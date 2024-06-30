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
  history: string[]; // oder den genauen Typ angeben, wenn bekannt
}

interface CommentListProps {
  comments: Comment[];
  addComment: (name: string, content: string, date: string, upvotes: number) => void;
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

  handleSendOnClick = (name: string, content: string, date: string, upvotes: number) => {
    this.props.addComment(name, content, date, upvotes);
    this.setState({ showTextarea: false, showIcon: true });
  };

  cancel = () => {
    this.setState({ showTextarea: false, showIcon: true });
  };

  handleUpvoteOnClick = (key: number) => {
    this.props.incrementUpvote(key);
  };

  handleDeleteOnClick = (key: number) => {
    this.props.deleteComment(key);
  }

  handleEditComment = (key: number, newContent: string) => {
    this.props.editComment(key, newContent);
  }

  render() {
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
        {this.props.comments.map((comment) => (
          <CommentCard
            onIncrement={() => this.handleUpvoteOnClick(comment.key)}
            onDelete={() => this.handleDeleteOnClick(comment.key)}
            onEdit={(newContent: string) => this.handleEditComment(comment.key, newContent)}
            key={comment.key}
            name={comment.name}
            date={comment.date}
            content={comment.content}
            upvotes={comment.upvotes}
            history={comment.history}
          />
        ))}
      </div>
    );
  }
}

export default CommentList;

