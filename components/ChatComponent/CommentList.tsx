import React, { ChangeEvent, Component, useEffect } from "react";
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
  shortenedSelectedText: string;
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
  addComment: (comment: Comment) => void;
  incrementUpvote: (comment: Comment) => void;
  deleteComment: (comment: Comment) => void;
  editComment: (comment: Comment, newContent: string) => void;
  getRange: (index: number, length: number) => void;
  setAIChanges: Function;
}

interface CommentListState {
  showTextarea: boolean;
  showSubcomments: boolean;
  showAllSubcomments: boolean;
  checkedKeys: number[];
  loading: boolean;
}

class CommentList extends Component<CommentListProps, CommentListState>  {
  state: CommentListState = {
    showTextarea: false,
    showSubcomments: true,
    showAllSubcomments: true,
    checkedKeys: [],
    loading: false
  };

  

  toggleTextarea = () => {
    this.setState((prevState) => ({ showTextarea: !prevState.showTextarea }));
  };

  toggleSubcomments = () => {
    this.setState((prevState) => ({ showSubcomments: !prevState.showSubcomments }));
  };

  toggleAllSubcomments = () => {
    this.setState((prevState) => ({ showAllSubcomments: !prevState.showAllSubcomments }));
  };

  handleAddComment = (comment: Comment) => {
    this.props.addComment(comment);
    if (comment.parentKey === null) {
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
    const { showSubcomments, showAllSubcomments } = this.state;

    comments.sort((a, b) => b.key - a.key);

    return comments.map((comment) => {
      const classNames = `comment comment-level-${level} text-center block`;
      const showSubs = showSubcomments && comment.replies.length > 0 && showAllSubcomments;

      return (
        <div key={comment.key} className={classNames}>
          <CommentCard
            onIncrement={() => this.props.incrementUpvote(comment)}
            onDelete={(comment) => this.props.deleteComment(comment)}
            onEdit={(comment, newContent) => this.props.editComment(comment, newContent)}
            addComment={(newcomment) => this.props.addComment(newcomment)}
            onGetRange={(index: number, length: number) => this.props.getRange(index, length)}
            comment={comment}
            editor={this.props.editor}
            newChecked={this.newChecked}
            unchecked={this.unchecked}
          />
          {showSubs && (
            <div className={`replies replies-level-${level} ml-5`}>
              {this.renderCommentsRecursive(comment.replies, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };


  



  render() {
    const { comments } = this.props;
    const { showTextarea, showAllSubcomments } = this.state;
    return (
      <div>
        <div className="comment-list-container h-[35vw] overflow-auto">
          {comments.length > 0 && (
          <button className="toggle-all-subcomments-btn mb-2" onClick={this.toggleAllSubcomments}>
            {showAllSubcomments ? 'Hide Subcomments' : 'Show All Subcomments'}
          </button>
          )}
          <div className="CommentListTextArea mb-2">
            <IconButton onClick={this.toggleTextarea}>
              <AddIcon />
            </IconButton>
          </div>
          {showTextarea && (
            <NewComment addComment={(comment: Comment) => this.handleAddComment(comment)} cancel={this.toggleTextarea} />
          )}
          <div className="comment-list">
          { this.renderCommentsRecursive(comments)}
          </div>
      
      

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
