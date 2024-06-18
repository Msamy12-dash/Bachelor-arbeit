import React, { Component } from 'react';
import CommentCard from './CommentCard';
import NewComment from './NewComment';


class CommentList extends Component {
    state = { 
        comments: []
    } 

    addComment = (name, date, content, upvotes) => {
        
        const newKey = this.state.comments.length;
        let currentComments = this.state.comments;
        // Add new comment to state.comments array
        currentComments.push({
            key:newKey,
            name,
            date,
            content,
            upvotes
        });
        
        // Update state
        this.setState({comments: currentComments});
        
    }
    
   
    
    incrementUpvote = (key) => {
        // Get current comments
        let currentComments = this.state.comments;
        // Get respective comment and increment its upvotes 
        let comment = this.state.comments.find(comment => comment.key === key);
        comment.upvotes++;

        // Update state
        this.setState({comments: currentComments});
    }


    render() { 
        return (

            <div> 
                <NewComment addComment={this.addComment}/>

                <button className='ai-comment-btn'>Let AI make comments</button>
                <button className='ai-summarize-btn'>Let AI summarize comments</button>

                {this.state.comments.map((comment) => <CommentCard onIncrement={() => this.incrementUpvote(comment.key)} key={comment.key} name={comment.name} date={comment.date} content={comment.content} upvotes={comment.upvotes}/>)}
            </div>
            
            

        );
    }
}
 
export default CommentList;