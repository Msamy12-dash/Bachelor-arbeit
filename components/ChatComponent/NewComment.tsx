/* eslint-disable prettier/prettier */
import React, { Component, ChangeEvent } from "react";

interface NewCommentProps {
  addComment: (comment: Comment) => void;
  cancel: () => void;
}

interface NewCommentState {
  content: string;
}

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
}

class NewComment extends Component<NewCommentProps, NewCommentState> {
  textareaRef: React.RefObject<HTMLTextAreaElement>;

  constructor(props: NewCommentProps) {
    super(props);
    this.state = {
      content: "",
    };
    this.textareaRef = React.createRef();
  }

  handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      content: event.target.value,
    });
  };

  handleOnClick = () => {
    const textarea = this.textareaRef.current;

    if (textarea && textarea.value !== "") {
      const { content } = this.state;
      const name = "Name"; // Placeholder for the name
      const date = new Date().toLocaleDateString();
      const comment: Comment = {
        key: 0,
        name: name,
        content: content,
        date: date,
        upvotes: 0,
        isTextSpecific: false,
        shortenedSelectedText: "",
        index: 0,
        length: 0,
        history: [],
        replies: [],
        parentKey: null,
        canReply: true,
      };

      this.props.addComment(comment); // Nur den Hauptkommentar hinzufügen
      textarea.value = "";
      this.setState({ content: "" });
    }
  };

  render() {
    const { cancel } = this.props;

    return (
      <div className="new-comment">
        <textarea
          ref={this.textareaRef}
          className="new-comment-input"
          placeholder="Add a comment..."
          value={this.state.content}
          onChange={this.handleChange}
        />
        <div className="new-comment-buttons">
          <button className="new-comment-btn" onClick={this.handleOnClick}>
            Send
          </button>
          <button className="new-comment-close-btn" onClick={cancel}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default NewComment;
