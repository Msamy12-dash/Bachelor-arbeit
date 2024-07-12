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
    selectedText: string;
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
        selectedText: "",
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
            <div className="new-comment flex flex-col items-start p-4 rounded-lg shadow-md mt-2 mb-2">
                <textarea
                    ref={this.textareaRef}
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder="Add a comment..."
                    className="new-comment-input w-full min-h-20 p-2 mb-2 border border-gray-300 rounded-md resize-vertical text-base"
                />
                <div className="new-comment-buttons flex space-x-2">
                    <button className="new-comment-btn bg-blue-500 text-white py-1 px-3 rounded hover:bg-cyan-500 transition-colors" onClick={this.handleOnClick}>Send</button>
                    <button className="new-comment-close-btn bg-red-500 text-white py-1 px-2 rounded hover:bg-red-200 transition-colors" onClick={cancel}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default NewComment;


