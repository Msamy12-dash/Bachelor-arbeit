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
}

export default function CommentHandler({
  room,
  textSpecificComment,
  setRange
}: Readonly<{
  room: string;
  textSpecificComment: Comment | null;
  editor: Quill|null;
  setRange: Function;
}>)
{
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState<boolean>(true);

  const addComment = (
    comment: Comment
  ) => {
    const newComment: Comment = {
      key: comments.length,
      name: comment.name,
      content: comment.content,
      date: comment.date,
      upvotes: 0, // Default to 0 upvotes for new comments
      isTextSpecific: comment.isTextSpecific,
      selectedText: comment.selectedText,
      index: comment.index,
      length: comment.length,
      history: [],
      replies: [],
    };
    setComments((prevComments) => [...prevComments, newComment]);
  };


  useEffect(() => {
    if(textSpecificComment != null){
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

  const deleteComment = (key: number) => {
    const updatedComments = comments.filter(comment => comment.key !== key);
    setComments(updatedComments);
  };

  const editComment = (key: number, newContent: string) => {
    setComments(
      (prevComments) =>
        prevComments.map((comment) =>
          comment.key === key
            ? { ...comment, history: [...comment.history, comment.content], content: newContent }
            : comment
        )
    );
  };

  const getRange = (index: number, length: number) => {
    console.log(index, length);
    setRange({index: index, length: length});
  }

  return (
    <div className="comments">
      <div className="Comment-font">Comments</div>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Hide Comments" : "Show Comments"}
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
        />
      )}
    </div>
  );
}


