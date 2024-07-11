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
  canReply: boolean;
}

interface CommentCardProps {
  comment: Comment;
  editor: Quill | null;
  onEdit: (comment: Comment, newContent: string) => void;
  onDelete: (comment: Comment) => void;
  onIncrement: (comment: Comment) => void; 
  addComment: (comment: Comment) => void;
  onGetRange: (index: number, length: number) => void;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment, editor, onEdit, onDelete, onIncrement, addComment, onGetRange }) => {
  const { theme } = useTheme();

  const [isEditing, setIsEditing] = React.useState(false);
  const [editContent, setEditContent] = React.useState(comment.content);
  const [oldContent, setOldContent] = React.useState(comment.content);
  const [showHistory, setShowHistory] = React.useState(false);
  const [showReplyTextarea, setShowReplyTextarea] = React.useState(false);
  const [parentKey, setParentKey] = React.useState<number | null>(null);

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

  const handleOnClick = () => {
    onGetRange(comment.index, comment.length);
  };

  const handleAddReply = (comment: Comment) => {
    comment.parentKey = parentKey;
    addComment(comment);
    toggleReplyTextarea();
  };

  return (
    <div className={`card ${theme === 'dark' ? 'text-white' : 'text-gray-700'} border border-gray-500 rounded-lg mb-4`}>

      <div className="card-body">
        {comment.isTextSpecific && (
          <div className={theme === 'dark' ? '' : 'bg-gray-100 rounded-t-lg'}>
            <p className={`text-left ${theme === 'dark' ? 'text-white' : 'text-gray-600'} pl-2 pt-2 italic`}>Commented on:</p>
            <p className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-600'} p-2 italic`}>{comment.selectedText}</p>
          </div>
        )}

        <div className='flex justify-between items-center p-4 rounded-t-lg'>
          <h5 className="card-title text-lg font-semibold">{comment.name}</h5>

          <div className="EditDeleteHistory">
            {!isEditing && (
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
            <IconButton onClick={() => onIncrement(comment)} className="text-gray-500 hover:text-gray-700">
              <ThumbUpIcon />
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
              <button onClick={cancelEdit} className="btn-cancel bg-red-800 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded">
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
            addComment={(comment: Comment) => handleAddReply(comment)}
            cancel={toggleReplyTextarea}
          />
        )}

        {showHistory && (
          <div className="comment-history mt-2">
            <h6 className="text-gray-800 font-semibold">History:</h6>
            <ul className="list-disc list-inside">
              {comment.history.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {comment.isTextSpecific && (
        <a onClick={handleOnClick} className='text-blue-500 hover:underline cursor-pointer pb-2 block mt-1'>Show in Editor</a>
      )}
    </div>
  );
};

export default CommentCard;
