import React, { Component, ChangeEvent } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HistoryIcon from '@mui/icons-material/History';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import NewComment from './NewComment';
import Quill from "react-quill";

interface Comment {
  key: number;
  name: string;
  content: string;
  parentKey: number | null;   
  canReply: boolean;
  date: string; 
  upvotes: number;
  isTextSpecific: boolean;
  selectedText: string;
  index: number;
  length: number;
  history: string[]; 
  replies: Comment[];
}

interface CommentCardProps {
  comment: Comment;
  editor: Quill|null;
  onEdit: (key: number, newContent: string, parentKey: number | null) => void;
  onDelete: (key: number,parentId: number | null) => void;
  onIncrement: (key: number) => void;
  addReply: (name: string, content: string, date: string) => void;  // Corrected addReply signature
  addComment: (parentKey: number| null, name: string, content: string, date: string) => void;
  onGetRange: (index: number, length: number) => void;
}

interface CommentCardState {
  hasBeenEdited: boolean;
  isEditing: boolean;
  editContent: string;
  oldContent: string;
  showHistory: boolean;
  showReplyTextarea: boolean;
  ParentKey: number | null
}

class CommentCard extends Component<CommentCardProps, CommentCardState> {
  state: CommentCardState = {
    hasBeenEdited: false,
    isEditing: false,
    editContent: this.props.comment.content,
    oldContent: this.props.comment.content,
    showHistory: false,
    showReplyTextarea: false,
    ParentKey: null
  };

  enableEditMode = () => {
    this.setState({ isEditing: true });
  };

  handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ editContent: event.target.value });
  };

  saveEdit = () => {
    if (this.state.oldContent !== this.state.editContent) {
      const { comment, onEdit } = this.props;
      onEdit(comment.key, this.state.editContent, comment.parentKey);
      this.setState({
        oldContent: this.state.editContent,
        isEditing: false,
        hasBeenEdited: true,
      });
    }
  };

  cancelEdit = () => {
    this.setState({ isEditing: false, editContent: this.state.oldContent });
  };

  toggleHistory = () => {
    this.setState((prevState) => ({
      showHistory: !prevState.showHistory,
    }));
  };

  toggleReplyTextarea = () => {
    this.setState((prevState) => ({
      showReplyTextarea: !prevState.showReplyTextarea,
      ParentKey: this.props.comment.key
    }));
  };

  handleAddReply = (parentKey: number | null, name: string, content: string, date: string) => {
    this.props.addComment(parentKey, name, content, date);
    this.toggleReplyTextarea();
  };


  handleOnClick = () => {

    this.props.onGetRange(this.props.comment.index, this.props.comment.length);
  }

  render() {
    //TODO:check
    const { comment, onDelete, onIncrement, addReply, addComment } = this.props;
    const { isEditing, editContent, showHistory, showReplyTextarea, hasBeenEdited } = this.state;

    return (
      <div className="card">
      <div className="card-body">
        <div className='card-top'>
            <h5 className="card-title">{comment.name}</h5>
          <div className="EditDeleteHistory">
            {!isEditing && (
              <>
                <IconButton onClick={this.enableEditMode}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(comment.key,comment.parentKey)}>

                    <DeleteIcon />
                  </IconButton>
                </>
              )}
              {hasBeenEdited && !isEditing && (
                <IconButton onClick={this.toggleHistory}>
                  <HistoryIcon />
                </IconButton>
              )}
              <IconButton onClick={() => onIncrement(comment.key)}>
                <ThumbUpIcon />
              </IconButton>
              {comment.canReply && (
                <IconButton onClick={() => this.toggleReplyTextarea()}>
                  <ReplyIcon />
                </IconButton>
              )}

            </div>
          </div>
          {comment.isTextSpecific && (<p className='commentedOn'>Commented on {comment.selectedText}</p>)}
          {isEditing ? (
            <div>
              <textarea
                className="edit-textarea"
                value={editContent}
                onChange={this.handleContentChange}
              />
              <button onClick={this.saveEdit} className="btn-save">Save</button>
              <button onClick={this.cancelEdit} className="btn-cancel">Cancel</button>
            </div>
          ) : (
            <div>
              <p className="card-text">{comment.content}</p>
              <div className='card-bottom'>
                <p className='upvotes'>Upvotes: {comment.upvotes}</p>
              </div>
            </div>
          )}
          {showReplyTextarea && (
            <NewComment
            addComment={(name: string, content: string, date: string) => this.handleAddReply(this.state.ParentKey, name, content, date)}

              cancel={this.toggleReplyTextarea}
            />
          )}
          {showHistory && (
            <div className="comment-history">
              <h6>History:</h6>
              <ul>
                {comment.history.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
        </div>
        {comment.isTextSpecific && (<a onClick={this.handleOnClick} className='showInEditor'>Show in Editor</a>)}
      </div>
    );
  }
}

export default CommentCard;

