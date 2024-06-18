import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css'
import "../styles.css"
import Editor from "./Editor"
import CommentList from './CommentList';

class App extends Component {
    state = {  } 
    render() { 
        return (

            <div className='main'>
                <div className='left'>
                    <h2>Comments</h2>

                    <CommentList/>

                </div>
                <div className='middle'>
                    <h1>Basic Quill React Editor</h1>
                    <Editor className="Editor"/>
                </div>
                <div className='right'>
                    <h2>AI Features</h2>
                </div>
            </div>
        );
    }
}
 
export default App;