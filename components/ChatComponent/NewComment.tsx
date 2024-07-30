import React, { ChangeEvent, Component, FocusEvent } from 'react';


interface Range {
  index: number;
  length: number;
}

interface NewCommentProps {
  addComment: (comment: Comment) => void;
  cancel: () => void;
  selectedText: string;
  selectedRange: Range | null | undefined;
  highlightText: (index:number, length: number, color: string) => void;
  removeHighlight: (index:number, length: number) => void;
}

interface NewCommentState {
  content: string;
  initialSelectedText: string;
  isTextareaFocused: boolean;
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
      content: '',
      initialSelectedText: this.props.selectedText,
      isTextareaFocused: false,
    };
    this.textareaRef = React.createRef();
  }

  componentDidUpdate(prevProps: NewCommentProps, prevState: NewCommentState) {
    if (
      prevProps.selectedText !== this.props.selectedText &&
      this.props.selectedText !== this.state.initialSelectedText &&
      !this.state.isTextareaFocused
    ) {
      this.setState({initialSelectedText: this.props.selectedText}) 
    }
  }

  highlightSelectedText = () => {
    if (this.state.initialSelectedText !== "" && this.props.selectedRange) {
      this.props.highlightText(this.props.selectedRange.index, this.props.selectedRange.length, '#FFD166');
    }
  }

  handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      content: event.target.value
    });
  };

  handleOnClick = () => {
    const textarea = this.textareaRef.current;
    let textSpecific = false;
    let selectedText = "";
    let index = 0;
    let length = 0;
   
    if (this.state.initialSelectedText !== "") {
      textSpecific = true;
      selectedText = this.state.initialSelectedText;
      const threshold = 25;
      if (selectedText.length > threshold){
        selectedText = selectedText.substring(0,threshold) + "...";
      }
      if (this.props.selectedRange?.index) {
        index = this.props.selectedRange?.index;
      }
      if (this.props.selectedRange?.length) {
        length = this.props.selectedRange?.length;
      }
    }

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
        isTextSpecific: textSpecific,
        shortenedSelectedText: selectedText,
        index: index,
        length: length,
        history: [],
        replies: [],
        parentKey: null,
        canReply: true,
      };

      this.props.addComment(comment);
      textarea.value = "";
      this.setState({ content: "" });
    }
  };

  handleTextareaFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    //this.highlightSelectedText();
    this.setState({ isTextareaFocused: true });
  };

  handleTextareaBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (this.state.initialSelectedText !== "") {
      if (this.props.selectedRange)
      this.props.removeHighlight(this.props.selectedRange?.index, this.props.selectedRange?.length)
    }
    this.setState({ isTextareaFocused: false });
  };

  render() {
    const { cancel } = this.props;

    return (
      <div className="new-comment flex flex-col items-start p-4 rounded-lg shadow-md mt-2 mb-2">
        {this.state.initialSelectedText && (
          <div className="selected-text-container bg-gray-100 p-2 rounded-md border border-gray-300 mb-2 w-full">
            <p className="font-semibold">Comment on:</p>
            <p className="italic text-gray-600">{this.state.initialSelectedText}</p>
        </div>
        )}
        <textarea
          ref={this.textareaRef}
          value={this.state.content}
          onChange={this.handleChange}
          onFocus={this.handleTextareaFocus}
          onBlur={this.handleTextareaBlur}
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

