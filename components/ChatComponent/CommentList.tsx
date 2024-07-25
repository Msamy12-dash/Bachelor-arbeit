import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Quill from "react-quill";

import NewComment from "./NewComment";
import CommentCard from "./CommentCard";
//install mui: npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

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
  canReply: boolean
}

interface CommentListProps {
  comments: Comment[];
  editor: Quill|null;
  addComment: (comment: Comment) => void;
  incrementUpvote: (key: number) => void;
  deleteComment: (key: number, parentKey: number | null) => void
  editComment: (key: number, newContent: string, parentKey: number | null) => void;
  getRange: (index: number, length: number) => void;
}

interface CommentListState {
  showTextarea: boolean;
  index: number;
  length: number;
}

class CommentList extends Component<CommentListProps, CommentListState> {
  state: CommentListState = {
    showTextarea: false,
    index: 0,
    length: 0
  };

  toggleTextarea = () => {
    this.setState((prevState) => ({ showTextarea: !prevState.showTextarea }));
  };

  handleAddComment = (comment: Comment) => {
    this.props.addComment(comment);
    if(comment.parentKey === null) {
      this.toggleTextarea();
    }
  };

  renderCommentsRecursive = (comments: Comment[], level = 0) => {
    return comments.map((comment) => {
      const classNames = "comment comment-level-${level}";

      return (
        <div key={comment.key} className={classNames}>
          <CommentCard
            addComment={(newcomment) => this.props.addComment(newcomment)}
            comment={comment}
            editor={this.props.editor}
            onDelete={(key, parentKey) => this.props.deleteComment(key, parentKey)}
            onEdit={(key, newContent, parentKey) => this.props.editComment(key, newContent, parentKey)}
            onGetRange = {(index: number, length: number) => this.props.getRange(index, length)}
            onIncrement={() => this.props.incrementUpvote(comment.key)}
          />
          {comment.replies.length > 0 && (
            <div className={"replies replies-level-${level}"}>
              {this.renderCommentsRecursive(comment.replies, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  render() {
    const { comments } = this.props;
    const { showTextarea } = this.state;

    return (
      <div className="comment-list"> 
          {this.renderCommentsRecursive(comments)}
          <div className='CommentListTextArea'>
            {showTextarea ? (
              <NewComment 
              addComment={(comment: Comment) => this.handleAddComment(comment)}
              cancel={this.toggleTextarea} />
            ) : (
              <IconButton onClick={this.toggleTextarea}>
                <AddIcon />
              </IconButton>
            )}
          </div>
        </div>
    );
  }
}

export default CommentList;

