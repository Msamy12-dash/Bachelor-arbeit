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
  onEdit: (key: number, newContent: string) => void;
  onDelete: (key: number) => void;
  onIncrement: (key: number) => void;
  addReply: (name: string, content: string, date: string) => void;  // Corrected addReply signature
  onGetRange: (index: number, length: number) => void;
  newChecked: (key: number) => void;
  unchecked: (key: number) => void;
}

interface CommentCardState {
  hasBeenEdited: boolean;
  isEditing: boolean;
  editContent: string;
  oldContent: string;
  showHistory: boolean;
  showReplyTextarea: boolean;
}

class CommentCard extends Component<CommentCardProps, CommentCardState> {
  state: CommentCardState = {
    hasBeenEdited: false,
    isEditing: false,
    editContent: this.props.comment.content,
    oldContent: this.props.comment.content,
    showHistory: false,
    showReplyTextarea: false,
  };

  enableEditMode = () => {
    this.setState({ isEditing: true });
  };

  handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ editContent: event.target.value });
  };

  saveEdit = () => {
    if (this.state.oldContent !== this.state.editContent) {
      this.props.onEdit(this.props.comment.key, this.state.editContent);
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
    }));
  };

  handleShowInEditorOnClick = () => {
    this.props.onGetRange(this.props.comment.index, this.props.comment.length);
  }


  handleCheckboxOnChange = (event: ChangeEvent<HTMLInputElement>) => {

    // if checkbox is checked
    if(event.target.checked){
      this.props.newChecked(this.props.comment.key);
    }else{
      this.props.unchecked(this.props.comment.key);
    }

  }





  render() {
    const { comment, onDelete, onIncrement, addReply } = this.props;
    const { isEditing, editContent, showHistory, showReplyTextarea, hasBeenEdited } = this.state;

    return (
      <div style={{display: "flex"}}>
        <div className="card">
          <div className="card-body">
            <div className='card-top'>
              <div className="NameDate">
                <h5 className="card-title">{comment.name}</h5>
                <p className='comment-date'>{comment.date}</p>
                
              </div>
              
              <div className="EditDeleteHistory">
                {!isEditing && (
                  <>
                    <IconButton onClick={this.enableEditMode}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onDelete(comment.key)}>
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
                <IconButton onClick={this.toggleReplyTextarea}>
                  <ReplyIcon />
                </IconButton>
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
                addComment={(comment: Comment) => addReply(comment.name, comment.content, comment.date)}  // Corrected addReply usage
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
            {comment.replies.length > 0 && (
              <div className="replies">
                {comment.replies.map((reply) => (
                  <CommentCard
                    key={reply.key}
                    comment={reply}
                    onEdit={this.props.onEdit}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    addReply={this.props.addReply}
                    onGetRange={this.props.onGetRange}
                    newChecked={this.props.newChecked}
                    unchecked={this.props.unchecked}
                  />
                ))}
              </div>
            )}
          </div>
          
          {comment.isTextSpecific && (<a onClick={this.handleShowInEditorOnClick} className='showInEditor'>Show in Editor</a>)}
        </div>
      <input type='checkbox' onChange={this.handleCheckboxOnChange} style={{marginLeft: "0.5vw"}}/>
      </div>
    );
  }
}

export default CommentCard;

