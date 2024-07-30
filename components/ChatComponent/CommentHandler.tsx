import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import Quill from "react-quill";
import * as Y from "yjs";
import YPartyKitProvider from "y-partykit/provider";
import colors from "../../highlightColors.js"

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

interface Range {
  index: number;
  length: number;
}

interface CommentHandlerProps {
  room: string;
  editor: Quill | null;
  setRange: Function;
  setAIChanges: Function;
  deleteSelectedComments: boolean;
  setDeleteSelectedComments: Function;
  promptList: string[];
  yDoc: Y.Doc;
  yProvider: YPartyKitProvider;
  selectedText: string;
  selectedRange: Range | null | undefined;
  highlightText: ((index: number, length: number, color: string) => void) | undefined;
  removeHighlight: ((index: number, length: number) => void) | undefined; 
}

export default function CommentHandler({
  setRange,
  editor,
  setAIChanges,
  deleteSelectedComments,
  setDeleteSelectedComments,
  promptList,
  yDoc,
  yProvider,
  selectedText,
  selectedRange,
  highlightText,
  removeHighlight
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

  const handleHighlightText = (index: number, length: number, color: string) => {
    if (highlightText) {
      highlightText(index, length, color);
    }
  };

  const handleRemoveHighlight = (index: number, length: number) => {
    if (removeHighlight) {
      removeHighlight(index, length);
    }
  }

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

    if (newComment.isTextSpecific) {
      handleHighlightText(newComment.index, newComment.length, colors.currentMUPSectionDYellow);
    }

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

    if (DeleteComment.isTextSpecific) {
      handleRemoveHighlight(DeleteComment.index, DeleteComment.length);
    }
  
    const updatedComments = removeComment(yarray.toArray());

    updatedComments.forEach(comment => {
      const commentEnd = comment.index + comment.length;
      const deleteCommentEnd = DeleteComment.index + DeleteComment.length;
  
      if (
        (comment.index >= DeleteComment.index && comment.index < deleteCommentEnd) || // Anfang des Kommentars liegt innerhalb des DeleteComments
        (commentEnd > DeleteComment.index && commentEnd <= deleteCommentEnd) || // Ende des Kommentars liegt innerhalb des DeleteComments
        (comment.index <= DeleteComment.index && commentEnd >= deleteCommentEnd) // Kommentar umfasst den gesamten DeleteComment-Bereich
      ) {
        handleHighlightText(comment.index, comment.length, colors.currentMUPSectionDYellow);
      }
    });

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
     
      
      {showComments && (
        <div className="mt-8">
          <CommentList
            comments={comments}
            selectedText={selectedText}
            selectedRange={selectedRange}
            incrementUpvote={incrementUpvote}
            deleteComment={deleteComment}
            editComment={editComment}
            addComment={addComment}
            editor={editor}
            getRange={getRange}
            setAIChanges={setAIChanges}
            setCheckedKeys={setCheckedKeys}
            //promptList={promptList}
            highlightText={handleHighlightText}
            removeHighlight={handleRemoveHighlight}
          />
        </div>
      )}
    </div>
  );
}
