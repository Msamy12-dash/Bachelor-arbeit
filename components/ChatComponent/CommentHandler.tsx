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

  const fetchCurrentKey = async (): Promise<number> => {
    try {
      const response = await fetch('/api/get-key');
      if (!response.ok) {
        throw new Error('Failed to fetch key');
      }
      const data = await response.json();
      return data.currentKey;
    } catch (error) {
      console.error('Failed to fetch key:', error);
      return 0;
    }
  };
  
  const updateKey = async (newKey: number) => {
    try {
      const response = await fetch('/api/update-key', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentKey: newKey }),
      });      
      if (!response.ok) {
        throw new Error('Failed to update key');
      }
      const data = await response.json();
      console.log('Key updated successfully:', data);
    } catch (error) {
      console.error('Failed to update key:', error);
    }
  };

  const getNewKey = async (): Promise<number> => {
    const currentKey = await fetchCurrentKey();
    const newKey = currentKey + 1;
    setKey(newKey);
    await updateKey(newKey);
    return newKey;
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

  const addComment = async (comment: Comment) => {
    const newKey = await getNewKey();
    let canReply = true;

    //check if its a subsubcomment -> cant reply
    if (comment.parentKey !== null) {
      // Find the comment with the matching parentkey
      const parentComment = comments.find(comment => comment.key === comment.parentKey);
      if (parentComment === undefined) {
        canReply = false;
      }
    }
    
    const newComment: Comment = {
      key: newKey,
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

    if (comment.parentKey === null) {
      // If parentkey is null, add the new comment as a root comment
      setComments(prevComments => [...prevComments, newComment]);
      // save only main comments
      saveComment(newComment); // Speichert den Kommentar in der MongoDB
    } else {
      const addReplyToComment = (commentsArray: Comment[], keyToFind: number, replyToAdd: Comment): Comment[] => {
        return commentsArray.map(comment => {
          if (comment.key === keyToFind) {
            // Add new comment as a reply to this comment
            return {
              ...comment,
              replies: [...comment.replies, replyToAdd]
            };
          } else if (comment.replies.length > 0) {
            // Recursively check in replies
            return {
              ...comment,
              replies: addReplyToComment(comment.replies, keyToFind, replyToAdd)
            };
          }
          return comment;
        });
      };
  
      const updatedComments = addReplyToComment(comments, comment.parentKey, newComment);
      setComments(updatedComments);
    }
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


  const incrementUpvote = (key: number) => {
    const updateUpvote = (comments: Comment[]): Comment[] => {
      return comments.map(comment => {
        if (comment.key === key) {
          return {
            ...comment,
            upvotes: comment.upvotes + 1
          };
        } else if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: updateUpvote(comment.replies)
          };
        }
        return comment;
      });
    };
    setComments(prevComments => updateUpvote(prevComments));
  };

  const deleteComment = async (key: number, parentKey: number | null) => {
    const removeComment = (comments: Comment[]): Comment[] => {
      return comments.reduce((acc, comment) => {
        if (comment.key === key && comment.parentKey === parentKey) {
          return acc;
        } else {
          const updatedReplies = comment.replies.length > 0 ? removeComment(comment.replies) : [];
          acc.push({
            ...comment,
            replies: updatedReplies
          });
          return acc;
        }
      }, [] as Comment[]);
    };
  
    const updatedComments = removeComment(comments);
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

  const editComment = async (key: number, newContent: string, parentKey: number | null) => {
    const updateComment = (comments: Comment[]): Comment[] => {
      return comments.map((comment) => {
        if (comment.key === key && comment.parentKey === parentKey) {
          return { ...comment, history: [...comment.history, comment.content], content: newContent };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: updateComment(comment.replies) };
        }
        return comment;
      });
    };

    setComments(prevComments => updateComment(prevComments));

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

  

  return (
    <div className="comments">
      <div className="Comment-font">Comments</div>
      <button onClick={() => setShowComments(!showComments)} className="HideShowComments">
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && (
        <CommentList
          addComment={addComment}
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


