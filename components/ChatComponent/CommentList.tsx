import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CommentCard from './CommentCard';
import NewComment from './NewComment';
import Quill from 'react-quill';

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

interface CommentListProps {
  comments: Comment[];
  editor: Quill | null;
  addComment: (comment: Comment) => void;
  incrementUpvote: (comment: Comment) => void;
  deleteComment: (comment: Comment) => void;
  editComment: (comment: Comment, newContent: string) => void;
  getRange: (index: number, length: number) => void;
}

interface CommentListState {
  showTextarea: boolean;
  showSubcomments: boolean;
  showAllSubcomments: boolean;
}

class CommentList extends Component<CommentListProps, CommentListState> {
  state: CommentListState = {
    showTextarea: false,
    showSubcomments: true,
    showAllSubcomments: true,
  };

  toggleTextarea = () => {
    this.setState((prevState) => ({ showTextarea: !prevState.showTextarea }));
  };

  toggleSubcomments = () => {
    this.setState((prevState) => ({ showSubcomments: !prevState.showSubcomments }));
  };

  toggleAllSubcomments = () => {
    this.setState((prevState) => ({ showAllSubcomments: !prevState.showAllSubcomments }));
  };

  handleAddComment = (comment: Comment) => {
    this.props.addComment(comment);
    if (comment.parentKey === null) {
      this.toggleTextarea();
    }
  };

  renderCommentsRecursive = (comments: Comment[], level = 0) => {
    const { showSubcomments, showAllSubcomments } = this.state;

    return comments.map((comment) => {
      const classNames = `comment comment-level-${level} text-center block`;
      const showSubs = showSubcomments && comment.replies.length > 0 && showAllSubcomments;

      return (
        <div key={comment.key} className={classNames}>
          <CommentCard
            onIncrement={() => this.props.incrementUpvote(comment)}
            onDelete={(comment) => this.props.deleteComment(comment)}
            onEdit={(comment, newContent) => this.props.editComment(comment, newContent)}
            addComment={(newcomment) => this.props.addComment(newcomment)}
            onGetRange={(index: number, length: number) => this.props.getRange(index, length)}
            comment={comment}
            editor={this.props.editor}
          />
          {showSubs && (
            <div className={`replies replies-level-${level} ml-5`}>
              {this.renderCommentsRecursive(comment.replies, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  render() {
    const { comments } = this.props;
    const { showTextarea, showAllSubcomments } = this.state;
    return (
      <div className="comment-list-container h-[42vw] overflow-auto">
        {comments.length > 0 && (
          <button className="toggle-all-subcomments-btn mb-2" onClick={this.toggleAllSubcomments}>
            {showAllSubcomments ? 'Hide Subcomments' : 'Show All Subcomments'}
          </button>
        )}
        <div className="CommentListTextArea mb-2">
          <IconButton onClick={this.toggleTextarea}>
            <AddIcon />
          </IconButton>
        </div>
        {showTextarea && (
          <NewComment addComment={(comment: Comment) => this.handleAddComment(comment)} cancel={this.toggleTextarea} />
        )}
        <div className="comment-list">
          {this.renderCommentsRecursive(comments)}
        </div>
      </div>
    );
  }
}

export default CommentList;
