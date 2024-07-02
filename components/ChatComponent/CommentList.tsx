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
}

interface CommentListProps {
  comments: Comment[];
  editor: Quill|null;
  addComment: (comment: Comment) => void;
  addReply: (parentKey: number, name: string, content: string, date: string) => void;
  incrementUpvote: (key: number) => void;
  deleteComment: (key: number) => void;
  editComment: (key: number, newContent: string) => void;
}

interface CommentListState {
  showIcon: boolean;
  showTextarea: boolean;
}

class CommentList extends Component<CommentListProps, CommentListState> {
  state: CommentListState = {
    showIcon: true,
    showTextarea: false
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

  render() {
    const { comments, addReply, incrementUpvote, deleteComment, editComment } = this.props;
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
