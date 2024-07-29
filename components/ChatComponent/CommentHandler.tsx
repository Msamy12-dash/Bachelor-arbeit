import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import Quill from "react-quill";
import * as Y from "yjs";
import YPartyKitProvider from "y-partykit/provider";

interface Comment {
  key: number;
  name: string;
  content: string;
  date: string; 
  upvotes: number;
  isTextSpecific: boolean;
  shortenedSelectedText: string;
  index: number;
  length: number;
  history: string[]; 
  replies: Comment[];
  parentKey: number | null;
  canReply: boolean;
}

interface CommentHandlerProps {
  room: string;
  textSpecificComment: Comment | null;
  editor: Quill | null;
  setRange: Function;
  setAIChanges: Function;
  deleteSelectedComments: boolean;
  setDeleteSelectedComments: Function;
  promptList: string[];
  yDoc: Y.Doc;
  yProvider: YPartyKitProvider;
}

export default function CommentHandler({
  room,
  textSpecificComment,
  setRange,
  editor,
  setAIChanges,
  deleteSelectedComments,
  setDeleteSelectedComments,
  promptList,
  yDoc,
  yProvider
}: Readonly<CommentHandlerProps>) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState<boolean>(true);
  const [checkedKeys, setCheckedKeys] = useState<number[]>([]);

  useEffect(() => {
    if (yDoc) {
      const yarray = yDoc.getArray<Comment>("comments");

      const updateComments = () => {
        setComments(yarray.toArray());
      };

      yarray.observe(updateComments);
      updateComments();

      return () => {
        yarray.unobserve(updateComments);
      };
    }
  }, [yDoc]);

  const getNewKey = async (): Promise<number> => {
    const ymap = yDoc.getMap('keys');
    const currentKey = Number(ymap.get('currentKey') || 0);
    const newKey = currentKey + 1;
    ymap.set('currentKey', newKey);
    return newKey;
  };

  const addComment = async (comment: Comment) => {
    const newKey = await getNewKey();
    let canReply = true;

    if (comment.parentKey !== null) {
      const parentKey = comment.parentKey;
      const parentComment = comments.find(comment => comment.key === parentKey);
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
      shortenedSelectedText: comment.shortenedSelectedText,
      index: comment.index,
      length: comment.length,
      history: [],
      replies: [],
      parentKey: comment.parentKey,
      canReply: canReply
    };

    const yarray = yDoc.getArray<Comment>("comments");

    if (comment.parentKey === null) {
      yarray.push([newComment]);
    } else {
      const addReplyToComment = (commentsArray: Comment[], keyToFind: number, replyToAdd: Comment): Comment[] => {
        return commentsArray.map(comment => {
          if (comment.key === keyToFind) {
            return {
              ...comment,
              replies: [...comment.replies, replyToAdd],
            };
          } else if (comment.replies.length > 0) {
            return {
              ...comment,
              replies: addReplyToComment(comment.replies, keyToFind, replyToAdd)
            };
          }
          return comment;
        });
      };
      const updatedComments = addReplyToComment(yarray.toArray(), comment.parentKey, newComment);
      yarray.delete(0, yarray.length);
      yarray.push(updatedComments);
    } 
  };

  useEffect(() => {
    if (textSpecificComment != null) {
      addComment(textSpecificComment);
    }
  }, [textSpecificComment]);

  const incrementUpvote = (IncrementComment: Comment) => {
    const yarray = yDoc.getArray<Comment>("comments");

    const updateUpvote = (comments: Comment[]): Comment[] => {
      return comments.map(comment => {
        if (comment.key === IncrementComment.key) {
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

    const updatedComments = updateUpvote(yarray.toArray());
    yarray.delete(0, yarray.length);
    yarray.push(updatedComments);
  };

  const deleteComment = (DeleteComment: Comment) => {
    const yarray = yDoc.getArray<Comment>("comments");

    const removeComment = (comments: Comment[]): Comment[] => {
      return comments.reduce((acc, comment) => {
        if (comment.key === DeleteComment.key && comment.parentKey === DeleteComment.parentKey) {
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
  
    const updatedComments = removeComment(yarray.toArray());
    yarray.delete(0, yarray.length);
    yarray.push(updatedComments);
  };

  const editComment = (EditComment: Comment, newContent: string) => {
    const yarray = yDoc.getArray<Comment>("comments");

    const updateComment = (comments: Comment[]): Comment[] => {
      return comments.map((comment) => {
        if (comment.key === EditComment.key && comment.parentKey === EditComment.parentKey) {
          return { ...comment, history: [...comment.history, comment.content], content: newContent };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: updateComment(comment.replies) };
        }
        return comment;
      });
    };

    const updatedComments = updateComment(yarray.toArray());
    yarray.delete(0, yarray.length);
    yarray.push(updatedComments);
  };

  const getRange = (index: number, length: number) => {
    console.log(index, length);
    setRange({index: index, length: length});
  };

  return (
    <div className="comments text-center block">
      <div className="Comment-font text-xl pt-2 font-bold">Comments</div>
      <button onClick={() => setShowComments(!showComments)} className="HideShowComments font-normal py-2 px-4 rounded">
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && (
        <div className="mt-8">
          <CommentList
            comments={comments}
            incrementUpvote={incrementUpvote}
            deleteComment={deleteComment}
            editComment={editComment}
            addComment={addComment}
            editor={editor}
            getRange={getRange}
            setAIChanges={setAIChanges}
            setCheckedKeys={setCheckedKeys}
            //promptList={promptList}
          />
        </div>
      )}
    </div>
  );
}
