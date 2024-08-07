import React, { ChangeEvent } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HistoryIcon from '@mui/icons-material/History';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import NewComment from './NewComment';
import Quill from "react-quill";
import { useTheme } from 'next-themes';
import { Role, User } from "@/party/types";

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
  user: User | null;
  likedBy: string[];
}

interface CommentCardProps {
  comment: Comment;
  editor: Quill | null;
  onEdit: (comment: Comment, newContent: string) => void;
  onDelete: (comment: Comment) => void;
  onIncrement: (comment: Comment, decrement: boolean) => void; 
  addComment: (comment: Comment) => void;
  onGetRange: (index: number, length: number) => void;
  newChecked: (key: number) => void;
  unchecked: (key: number) => void;
  highlightText: (index:number, length: number, color: string) => void;
  removeHighlight: (index:number, length: number) => void;
  user: User | null;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment, editor, onEdit, onDelete, onIncrement, addComment, onGetRange, newChecked, unchecked, highlightText, removeHighlight, user }) => {
  const { theme } = useTheme();

  const [isEditing, setIsEditing] = React.useState(false);
  const [editContent, setEditContent] = React.useState(comment.content);
  const [oldContent, setOldContent] = React.useState(comment.content);
  const [showHistory, setShowHistory] = React.useState(false);
  const [showReplyTextarea, setShowReplyTextarea] = React.useState(false);
  const [parentKey, setParentKey] = React.useState<number | null>(null);
  const [isLiked, setIsLiked] = React.useState<boolean>(comment.likedBy.includes(user?.id || ""));

  const enableEditMode = () => {
    setIsEditing(true);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContent(event.target.value);
  };

  const saveEdit = () => {
    if (oldContent !== editContent) {
      onEdit(comment, editContent);
      setOldContent(editContent);
      setIsEditing(false);
    }
  };

  const cancelEdit = () => {
    setEditContent(oldContent);
    setIsEditing(false);
  };

  const toggleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  const toggleReplyTextarea = () => {
    setShowReplyTextarea((prev) => !prev);
    setParentKey(comment.key);
  };

  const handleShowInEditorOnClick  = () => {

    onGetRange(comment.index, comment.length);
  }

  const handleAddReply = (comment: Comment) => {
    comment.parentKey = parentKey;
    addComment(comment);
    toggleReplyTextarea();
  };

  const handleCheckboxOnChange = (event: ChangeEvent<HTMLInputElement>) => {

    // if checkbox is checked
    if(event.target.checked){
      newChecked(comment.key);
    }else{
      unchecked(comment.key);
    }
  }

  const handleLike = (comment: Comment) => {
    if (!user) return;

    const userIdIndex = comment.likedBy.indexOf(user.id);

    if (userIdIndex > -1) {
      comment.likedBy.splice(userIdIndex, 1);
      setIsLiked(false);
      onIncrement(comment, true);
    } else {
      comment.likedBy.push(user.id);
      setIsLiked(true);
      onIncrement(comment, false);
    }
  }



  return (
    <div style={{display: "flex", padding: "1vw", justifyContent: "space-between"}}>
      <div className={`card ${theme === 'dark' ? 'text-white' : 'text-gray-700'} border border-gray-500 rounded-lg mb-4`} style={{width: "32vw"}}>

        <div className="card-body">
          {comment.isTextSpecific && (
            <div className={theme === 'dark' ? '' : 'bg-gray-100 rounded-t-lg'}>
              <p className={`text-left ${theme === 'dark' ? 'text-white' : 'text-gray-600'} pl-2 pt-2 italic`}>Commented on:</p>
              <p className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-600'} p-2 italic`}>{comment.shortenedSelectedText}</p>
            </div>
          )}

          <div className='flex justify-between items-center p-4 rounded-t-lg'>
            <h5 className="card-title text-lg font-semibold">{comment.name}</h5>

            <div className="EditDeleteHistory">
            {(user && comment.user && user.id === comment.user.id || user?.role === "admin") && !isEditing && (
              <>
                <IconButton onClick={enableEditMode} className="text-gray-500 hover:text-gray-700">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(comment)} className="text-gray-500 hover:text-gray-700">
                  <DeleteIcon />
                </IconButton>
              </>
            )}
            {comment.history.length > 0 && !isEditing && (
              <IconButton onClick={toggleHistory} className="text-gray-500 hover:text-gray-700">
                <HistoryIcon />
              </IconButton>
            )}
            <IconButton onClick={() => handleLike(comment)}>
              <ThumbUpIcon className={`${isLiked ? 'text-blue-500 hover:text-blue-700' : 'text-gray-500 hover:text-gray-700'}`}/>
            </IconButton>
            {comment.canReply && (
              <IconButton onClick={() => toggleReplyTextarea()} className="text-gray-500 hover:text-gray-700">
                <ReplyIcon />
              </IconButton>
            )}
          </div>
        </div>

        {isEditing ? (
          <div className="mb-2">
            <textarea
              className="edit-textarea border border-gray-300 rounded p-2 w-full"
              value={editContent}
              onChange={handleContentChange}
            />
            <div className="mt-2">
              <button onClick={saveEdit} className="btn-save bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Save
              </button>
              <button onClick={cancelEdit} className="btn-cancel bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="card-text">{comment.content}</p>
            <div className='flex justify-between items-center pb-2 mt-2'>
            </div>
          </div>
        )}

        {showReplyTextarea && (
          <NewComment
            selectedText=''
            selectedRange={null}
            addComment={(comment: Comment) => handleAddReply(comment)}
            cancel={toggleReplyTextarea}
            highlightText={highlightText}
            removeHighlight={removeHighlight}
            user={user}
          />
        )}

        {showHistory && (
          <div className="comment-history pb-2 mt-2 ">
            <h6 className="text-gray-800 font-semibold">History:</h6>
            <ul className="list-disc list-inside">
              {comment.history.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {comment.isTextSpecific && (
        <a onClick={handleShowInEditorOnClick} className='text-blue-500 hover:underline cursor-pointer pb-2 block mt-1'>Show in Editor</a>
        )}
        </div>      
      </div>
      <input type='checkbox' onChange={handleCheckboxOnChange} style={{marginLeft: "0.5vw", float: "right"}}/>
    </div>
  );
};


export default CommentCard;
