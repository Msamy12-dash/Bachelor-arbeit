import React, { Component } from "react";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Quill from "react-quill";
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
  canReply: boolean;

}

interface CommentListProps {
  comments: Comment[];
  editor: Quill|null;
  addComment: (parentKey: number | null, name: string, content: string, date: string) => void;
  addReply: (parentKey: number, name: string, content: string, date: string) => void;
  incrementUpvote: (key: number) => void;
  deleteComment: (key: number, parentKey: number | null) => void
  editComment: (key: number, newContent: string, parentKey: number | null) => void;
  getRange: (index: number, length: number) => void;
}

interface CommentListState {
  showIcon: boolean;
  showTextarea: boolean;
  index: number;
  length: number;
}

class CommentList extends Component<CommentListProps, CommentListState> {
  state: CommentListState = {
    showIcon: true,
    showTextarea: false,
    index: 0,
    length: 0
  };

  showTextarea = () => {
    this.setState({ showIcon: false, showTextarea: true });
  };

  handleSendOnClick = (comment: Comment) => {
    this.props.addComment(comment);
    this.setState({ showTextarea: false, showIcon: true });
  };

  cancel = () => {
    this.setState({ showTextarea: false, showIcon: true });
  };


  renderCommentsRecursive = (comments: Comment[], level = 0) => {
    return comments.map((comment) => {
      const classNames = "comment comment-level-${level}";
      return (
        <div key={comment.key} className={classNames}>
          <CommentCard
            onIncrement={() => this.props.incrementUpvote(comment.key)}
            onDelete={(key, parentKey) => this.props.deleteComment(key, parentKey)}
            onEdit={(key, newContent, parentKey) => this.props.editComment(key, newContent, parentKey)}
            addComment={(parentKey, name, content, date) => this.props.addComment(parentKey, name, content, date)}
            comment={comment}
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
    const { comments, addReply, incrementUpvote, deleteComment, editComment, getRange } = this.props;
    const { showTextarea } = this.state;
    return (
      <div>
        <div>
        {this.state.showIcon && (
          <IconButton onClick={this.showTextarea}>
            <AddIcon />
          </IconButton>
        )}
        {this.state.showTextarea && (
          <NewComment
            addComment={this.handleSendOnClick}
            cancel={this.cancel}
          />
        )}
        </div>
        <div className="commentsList">
        {(this.props.comments.length == 0) && (<p className='NoComments' style={{marginTop:"10vw", opacity:"80%", fontSize: "large"}}>No Comments yet</p>)}
        {comments.map((comment) => (
          <div key={comment.key} className="comment">
            <CommentCard
            onIncrement={() => incrementUpvote(comment.key)}
            onDelete={() => deleteComment(comment.key)}
            onEdit={(key: number, newContent: string) => editComment(key, newContent)}
            addReply={(name: string, content: string, date: string) => addReply(comment.key, name, content, date)} 
            onGetRange = {(index: number, length: number) => getRange(index, length)}
            comment={comment}
            editor={this.props.editor}
            />
            {comment.replies.length > 0 && (
              <div className="replies">
                <CommentList
                  editor={this.props.editor}
                  comments={comment.replies}
                  addComment={() => {}}
                  addReply={addReply}
                  incrementUpvote={incrementUpvote}
                  deleteComment={deleteComment}
                  editComment={editComment}
                  getRange={getRange}
                />
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default CommentList;

