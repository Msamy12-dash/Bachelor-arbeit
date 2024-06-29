import React, { useState } from 'react';
import CommentList from './CommentList';

interface Comment {
  key: number;
  name: string;
  content: string;
  date: string; // oder `Date`, je nach Format
  upvotes: number;
  history: string[]; // falls `history` eine Liste von Strings ist
  room: any;
}

export default function CommentHandler({
  room
}: Readonly<{
  room: string;
}>)
{
  // Zustand-Variablen, die bei Änderung eine Neurenderung des Komponents bewirken
  const [comments, setComments] = useState<Comment[]>([]);

  // Handler
  const addComment = (
    name: string,
    content: string,
    date: string, // oder `Date`, je nach Format
    upvotes: number,
  ) => {
    const newComment: Comment = {
      key: comments.length,
      name,
      content,
      date,
      upvotes,
      history: [],
      room: room
    };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  // Handler
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

  // Rückgabe von JSX
  // JSX ist der Standard zum Schreiben von HTML mit JS
  return ( 
        <div className="comments">
            <div className="Comment-font">Comments</div>
          <CommentList
            addComment={addComment}
            incrementUpvote={incrementUpvote}
            deleteComment={deleteComment}
            editComment={editComment}
            comments={comments}
          />
        </div>
  );
};
