import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import Quill from "react-quill";

interface Comment {
  key: number;
  name: string;
  content: string;
  date: string; 
  upvotes: number;
  isTextSpecific: boolean;
  selectedText: string;
  index: number;
  length: number;
  history: string[]; 
  replies: Comment[];
  parentKey: number | null;
  canReply: boolean

}

export default function CommentHandler({
  room,
  textSpecificComment,
  editor,
  setRange
}: Readonly<{
  room: string;
  textSpecificComment: Comment | null;
  editor: Quill|null;
  setRange: Function;
}>) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState<boolean>(true);
  const [key, setKey] = useState<number>(0);

  const getNewKey = (): number => {
    const newKey = key;
    setKey(key + 1);
    return newKey;
  };
  
  const addComment = (comment:Comment) => {
    const newKey = getNewKey();
    let canReply = true;

    //check if its a subsubcomment -> cant reply
    if (comment.parentKey !== null) {
      // Find the comment with the matching parentkey
      const parentComment = comments.find(comment => comment.key === comment.parentKey);
      if (parentComment === undefined) {
        canReply = false;
      }
    
    const newComment: Comment = {
      key: comments.length,
      name: comment.name,
      content: comment.content,
      date: comment.date,
      upvotes: 0,
      isTextSpecific: comment.isTextSpecific,
      selectedText: comment.selectedText,
      index: comment.index,
      length: comment.length,
      history: [],
      replies: [],
      parentKey: comment.parentKey,
      canReply: canReply
    };
    setComments((prevComments) => [...prevComments, newComment]);
    saveComment(newComment); // Speichert den Kommentar in der MongoDB
  };

  useEffect(() => {
    // Fetch comments from the API when the component mounts
    const fetchComments = async () => {
      try {
        const response = await fetch('/api/fetch-comments');
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        setComments(data);

      } catch (error) {

      }
    };

    fetchComments();
  }, []);


  useEffect(() => {
    if (textSpecificComment != null) {
      addComment(textSpecificComment);
    }
  }, [textSpecificComment]);

  const addReply = (parentKey: number, name: string, content: string, date: string) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.key === parentKey
          ? { ...comment, replies: [...comment.replies, { key: comment.replies.length, name, content, date, upvotes: 0, isTextSpecific: false, selectedText: "", index: 0, length: 0, history: [], replies: [] }] }
          : comment
      )
    );
  };

  const incrementUpvote = (key: number) => {
    setComments(
      (prevComments) =>
        prevComments.map((comment) =>
          comment.key === key
            ? { ...comment, upvotes: comment.upvotes + 1 }
            : comment
        )
    );
  };

  const deleteComment = async (key: number) => {
    // Lokal aus der State-Variable entfernen
    const updatedComments = comments.filter(comment => comment.key !== key);
    setComments(updatedComments);

    try {
      // API-Aufruf zum Löschen des Kommentars in der MongoDB
      const response = await fetch('/api/delete-comment', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ room, key }),
      });
      if (!response.ok) {
        throw new Error('Failed to delete comment');
      }
      const data = await response.json();
      console.log('Comment deleted successfully:', data);
    } catch (error) {
      console.error('Failed to delete comment:', error);
    }
  };

  const editComment = async (key: number, newContent: string) => {
    // Lokal in der State-Variable aktualisieren
    setComments(
      (prevComments) =>
        prevComments.map((comment) =>
          comment.key === key
            ? { ...comment, history: [...comment.history, comment.content], content: newContent }
            : comment
        )
    );

    try {
      // API-Aufruf zum Aktualisieren des Kommentars in der MongoDB
      const response = await fetch('/api/update-comment', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ room, key, content: newContent }),
      });
      if (!response.ok) {
        throw new Error('Failed to update comment');
      }
      const data = await response.json();
      console.log('Comment updated successfully:', data);
    } catch (error) {
      console.error('Failed to update comment:', error);
    }
  };


  const getRange = (index: number, length: number) => {
    console.log(index, length);
    setRange({index: index, length: length});
  };

  // Funktion zum Speichern eines neuen Kommentars in der MongoDB
  const saveComment = async (comment: Comment) => {
    try {
      const response = await fetch('/api/save-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ room, comment }),
      });
      if (!response.ok) {
        throw new Error('Failed to save comment');
      }
      const data = await response.json();
      console.log('Comment saved successfully:', data);
    } catch (error) {
      console.error('Failed to save comment:', error);
    }
  };

  return (
    <div className="comments">
      <div className="Comment-font">Comments</div>
      <button onClick={() => setShowComments(!showComments)} className="HideShowComments">
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && (
        <CommentList
          addComment={addComment}
          addReply={addReply}
          incrementUpvote={incrementUpvote}
          deleteComment={deleteComment}
          editComment={editComment}
          getRange={getRange}
          comments={comments}
          editor={editor}
        />
      )}
    </div>
  );
}

