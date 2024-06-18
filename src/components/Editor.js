import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import "../styles.css"

class Editor extends Component{

    constructor(props){
      super(props);
      this.state = {
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elit"
      }
      this.handleChange = this.handleChange.bind(this);
      this.modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
          ['link', 'image'],
          ['clean']
        ]
      };
   
      this.formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
    }
    

    handleChange(value){
      this.setState({text: value});
    }
    
  
  
    render(){
      return <div>
        <ReactQuill placeholder={this.state.text}
          modules={this.modules}
          formats={this.formats}
          onChange={this.handleChange} />
        <button onClick={this.getSelection_}>Get Selection</button>
      </div>
    }
  }
  export default Editor;