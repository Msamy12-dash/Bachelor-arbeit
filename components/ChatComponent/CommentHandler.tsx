import React, { useState } from 'react';
import CommentList from './CommentList';

interface Comment {
  key: number;
  name: string;
  content: string;
  date: string; 
  upvotes: number;
  history: string[]; 
  replies: Comment[];
}

export default function CommentHandler({
  room
}: Readonly<{
  room: string;
}>)
{
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState<boolean>(true);

  const addComment = (
    name: string,
    content: string,
    date: string,
  ) => {
    const newComment: Comment = {
      key: comments.length,
      name,
      content,
      date,
      upvotes: 0, // Default to 0 upvotes for new comments
      history: [],
      replies: [],
    };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const addReply = (parentKey: number, name: string, content: string, date: string) => {
    setComments((prevComments) => 
      prevComments.map((comment) => 
        comment.key === parentKey
          ? { ...comment, replies: [...comment.replies, { key: comment.replies.length, name, content, date, upvotes: 0, history: [], replies: [] }] }
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
          comments={comments}
        />
      )}
    </div>
  );
}


