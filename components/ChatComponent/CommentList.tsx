import React, { Component } from "react";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Quill from "react-quill";
import { Spinner } from "@nextui-org/react";
import {requestResponseForMCP} from "../../OllamaSinglePromptFunction/ollamaMCPFunction"

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
  setAIChanges: Function;
}

interface CommentListState {
  showTextarea: boolean;
  index: number;
  length: number;
  checkedKeys: number[];
  loading: boolean;
}

class CommentList extends Component<CommentListProps, CommentListState> {
  state: CommentListState = {
    showTextarea: false,
    index: 0,
    length: 0,
    checkedKeys: [],
    loading: false
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

  newChecked = (key: number) => {
    const currentKeys = this.state.checkedKeys;
    currentKeys.push(key);
    this.setState({checkedKeys: currentKeys});
  }

  unchecked = (key: number) => {
    let currentKeys = this.state.checkedKeys;

    // remove key from checkedKeys
    currentKeys = currentKeys.filter(number => number !== key);
    this.setState({checkedKeys:currentKeys});

  }

  handleSubmitOnClick = async () => {
    // If at least one comment is selected
    if(this.state.checkedKeys.length != 0){

      this.setState({loading: true});

      // Create prompt for the AI
      const completeText = this.props.editor?.getEditor().getText();
      let userComments = [];
      let userCommentsContext = [];
      let index = 0;
      for(let key of this.state.checkedKeys){
        const comment = this.props.comments.filter(comment => comment.key === key);
        
        if(comment[0] != null){
          userComments.push(comment[0].content);

          if(comment[0].isTextSpecific){
            const selectedText = this.props.editor?.getEditor().getText(comment[0].index, comment[0].length);
            userCommentsContext.push(selectedText);
          }else{
            userCommentsContext.push("");
          }
        }
        index += 1;
      }
      const response = await requestResponseForMCP(completeText, userComments, userCommentsContext);
      // const response = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
      this.props.setAIChanges(response);

      this.setState({loading: false});
    }
  }



  renderCommentsRecursive = (comments: Comment[], level = 0) => {
    return comments.map((comment) => {
      const classNames = "comment comment-level-${level}";
      return (
        <div key={comment.key} className={classNames}>
          <CommentCard
            onIncrement={() => this.props.incrementUpvote(comment.key)}
            onDelete={(key, parentKey) => this.props.deleteComment(key, parentKey)}
            onEdit={(key, newContent, parentKey) => this.props.editComment(key, newContent, parentKey)}
            addComment={(newcomment) => this.props.addComment(newcomment)}
            onGetRange = {(index: number, length: number) => this.props.getRange(index, length)}
            comment={comment}
            editor={this.props.editor}
            newChecked={this.newChecked}
            unchecked={this.unchecked}
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
      <div>
        <div className="comment-list"> 
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
            {this.renderCommentsRecursive(comments)}
            
          </div>
          {/* <div style={{display: "flex", float: "right"}}>
            <p>Select all</p>
            <input type="checkbox" style={{marginLeft: "0.75vw", marginRight: "0.5vw"}}/>
          </div> */}
          <div style={{justifyContent: "center"}}>
            <button onClick={this.handleSubmitOnClick} className="submitToAI-btn">
                {this.state.loading ? (
                  <div className="flex items-center justify-center space-x-2">
                      <Spinner color="current" />
                  <span className="font-semibold">Submitting...</span>
                  </div>
                  ) : (
                  "Submit to AI"
                )}
            </button>
          </div>

        </div>

    );
  }
}

export default CommentList;

