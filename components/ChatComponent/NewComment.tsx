import React, { Component, ChangeEvent } from 'react';

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
  }

class NewComment extends Component<NewCommentProps, NewCommentState> {
    textareaRef: React.RefObject<HTMLTextAreaElement>;

    constructor(props: NewCommentProps) {
        super(props);
        this.state = {
            content: ''
        };
        this.textareaRef = React.createRef();
    }

    handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            content: event.target.value
        });
    }

    handleOnClick = () => {
        const textarea = this.textareaRef.current;
        if (textarea && textarea.value !== "") {
          const { content } = this.state;
          const name = "Name"; // Placeholder for the name
          const date = new Date().toLocaleDateString();
          const comment: Comment = {key: 0, name: "Name", content: content, date: date, upvotes: 0, isTextSpecific: false, selectedText: "", index: 0, length: 0, history: [], replies: []}
          this.props.addComment(comment);  // Nur den Hauptkommentar hinzufügen
          textarea.value = "";
          this.setState({ content: "" });
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className='new-comment-name'>Name</h5>
                    <textarea
                        onChange={this.handleChange}
                        ref={this.textareaRef}
                        className="new-comment-input"
                        placeholder='Add new Comment here'
                    />
                    <div className="card-buttons">
                        <button onClick={this.handleOnClick} className='new-comment-btn'>Send</button>
                        <button onClick={this.props.cancel} className="new-comment-close-btn">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewComment;



