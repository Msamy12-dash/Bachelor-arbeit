import React, { ChangeEvent, Component, useEffect } from "react";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Quill from "react-quill";
import { requestResponseForMCP } from "@/OllamaSinglePromptFunction/ollamaMCPFunction";



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
}

interface CommentListProps {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  addReply: (parentKey: number, name: string, content: string, date: string) => void;
  incrementUpvote: (key: number) => void;
  deleteComment: (key: number) => void;
  editComment: (key: number, newContent: string) => void;
  getRange: (index: number, length: number) => void;
  editor: Quill|null;
  setAIChanges: Function;
}

interface CommentListState {
  showIcon: boolean;
  showTextarea: boolean;
  index: number;
  length: number;
  checkedKeys: number[];
}

class CommentList extends Component<CommentListProps, CommentListState>  {
  state: CommentListState = {
    showIcon: true,
    showTextarea: false,
    index: 0,
    length: 0,
    checkedKeys: [],
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
      //const response = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
      this.props.setAIChanges(response);



    }
  }



  render() {
    const { comments, addReply, incrementUpvote, deleteComment, editComment, getRange } = this.props;
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
            newChecked={this.newChecked}
            unchecked={this.unchecked}

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
                  getRange={getRange}
                  editor={this.props.editor}
                  setAIChanges={this.props.setAIChanges}
                />
              </div>
            )}
          </div>
        ))}
        </div>
        <div style={{display: "flex", float: "right"}}>
            <p>Select all</p>
            <input type="checkbox" style={{marginLeft: "0.75vw", marginRight: "0.5vw"}}/>
        </div>
        <div style={{justifyContent: "center"}}>
            <button onClick={this.handleSubmitOnClick} className="submitToAI-btn">Submit to AI</button>
        </div>
      </div>
    );
  }
}

export default CommentList;
