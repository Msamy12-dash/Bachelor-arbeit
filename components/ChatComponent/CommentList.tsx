import React, { Component } from "react";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
//install mui: npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

interface Comment {
  key: number;
  name: string;
  content: string;
  date: string; // oder `Date`, je nach Format
  upvotes: number;
  history: string[];
  replies: Comment[];
}

interface CommentListProps {
  comments: Comment[];
  addComment: (name: string, content: string, date: string) => void;
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
    showTextarea: false,
  };

  showTextarea = () => {
    this.setState({ showIcon: false, showTextarea: true });
  };

  handleSendOnClick = (name: string, content: string, date: string) => {
    this.props.addComment(name, content, date);
    this.setState({ showTextarea: false, showIcon: true });
  };

  cancel = () => {
    this.setState({ showTextarea: false, showIcon: true });
  };

  render() {
    const { comments, addReply, incrementUpvote, deleteComment, editComment } = this.props;
    return (
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
        {comments.map((comment) => (
          <div key={comment.key} className="comment">
            <CommentCard
            onIncrement={() => incrementUpvote(comment.key)}
            onDelete={() => deleteComment(comment.key)}
            onEdit={(key: number, newContent: string) => editComment(key, newContent)}
            addReply={(name: string, content: string, date: string) => addReply(comment.key, name, content, date)} 
            comment={comment}
            />
            {comment.replies.length > 0 && (
              <div className="replies">
                <CommentList
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
    );
  }
}

export default CommentList;
