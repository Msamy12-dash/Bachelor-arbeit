import React, { Component } from 'react';
import ReactQuill, {Quill} from "react-quill"
import 'react-quill/dist/quill.snow.css'
import "../styles.css"

class Editor extends Component{

    constructor(props){
      super(props);
      this.state = {
        selectedRange: ["null", "null"]
      }

      this.quill = null;
      this.handleChange = this.handleChange.bind(this);

      this.editorRef = React.createRef();
    }

    componentDidMount() {
        this.quill = new Quill(this.editorRef.current, {
        theme: 'snow'
      });
      }



    handleOnClick = () => {
      const selection = this.quill.getSelection(); // Get range the user selected
      this.setState({selectedRange: [selection.index, selection.length]})

      this.quill.formatText(selection.index, selection.length, {
        'background': '#FFFF00' // Yellow mark
      });
    }


    handleChange(value){
      this.setState({text: value});
    }


    render(){
      return <div>
        <div className='quill' ref={this.editorRef} />
        <h6>Range:</h6>
        <p>index={this.state.selectedRange[0]}, length={this.state.selectedRange[1]}</p>
        <button onClick={this.handleOnClick}>Mark selected range</button>
      </div>
    }
  }
  export default Editor;