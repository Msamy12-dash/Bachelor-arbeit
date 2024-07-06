import React, { Component, useEffect } from "react";
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
}

interface CommentListState {
  showIcon: boolean;
  showTextarea: boolean;
  index: number;
  length: number;
  checked: boolean;
  checkedKeys: number[];
}

class CommentList extends Component<CommentListProps, CommentListState>  {
  state: CommentListState = {
    showIcon: true,
    showTextarea: false,
    index: 0,
    length: 0,
    checked: false,
    checkedKeys: []
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
    this.setState({checkedKeys: currentKeys, checked: true});
  }

  unchecked = (key: number) => {
    let currentKeys = this.state.checkedKeys;

    // remove key from checkedKeys
    currentKeys = currentKeys.filter(number => number !== key);
    this.setState({checkedKeys:currentKeys});

    // If no comment is selected, don´t show button
    // if(this.state.checkedKeys.length == 0){
    //   this.setState({checked: false});
    //   console.log("jetzt");
    // }
  }


  handleSubmitOnClick = () => {
    // If at least one comment is selected
    if(this.state.checkedKeys.length != 0){
      // Create prompt for the AI
      let prompt = "";
      const wholeText = this.props.editor?.getEditor().getText();
      prompt += `Complete Text: \n ${wholeText} \n`;
      let index = 0;
      for(let key of this.state.checkedKeys){
        const comment = this.props.comments.filter(comment => comment.key === key);
        
        if(comment[0] != null){
          const content = comment[0].content;

          if(comment[0].isTextSpecific){
            const selectedText = this.props.editor?.getEditor().getText(comment[0].index, comment[0].length);
            prompt += `{Comment ${index}: \n Commented Text: ${selectedText} \n Content: ${content}}\n`;
          }else{
            prompt += `{Comment ${index}: \n Content: ${content}}\n`;
          }
        }
        index += 1;
      }
      console.log(prompt);
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
                />
              </div>
            )}
          </div>
        ))}
        </div>
        {this.state.checked && (<button onClick={this.handleSubmitOnClick} className="submitToAI-btn">Submit to AI</button>)}
      </div>
    );
  }
}

export default CommentList;
