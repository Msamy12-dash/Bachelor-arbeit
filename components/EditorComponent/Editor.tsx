
"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import { QuillBinding } from "y-quill";
import useYProvider from "y-partykit/react";
import "react-quill/dist/quill.snow.css";
import QuillCursors from "quill-cursors";
import * as Y from "yjs";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { DeltaStatic } from "quill/index";
import YPartykitProvider from "y-partykit/provider"
import Tooltip from "../ToolTipsComponets/ToolTip";
import { handleROSelectionChange, handleRangeShift, handleROChange,  saveRORange } from "../VoteComponent/TextBlocking";



interface Range {
  index: number;
  length: number;
}

interface Position {
  top: number;
  left: number;
}

Quill.register("modules/cursors", QuillCursors);



export default function Editor({
  room,
  userColor,
  setTextSpecificComment,
  setEditor,
  selectedText,
  setSelectedText,
  setCompleteText
}: Readonly<{
  room: string;
  userColor: string;
  setTextSpecificComment: Function;
  setEditor: Function;
  selectedText: string;
  setSelectedText: (text: string) => void;
  setCompleteText: (text: string) => void;
}>) {

  const [text, setText] = useState("");
  const [selectedRange, setSelectedRange] = useState<Range | null>();
  const [buttonPosition, setButtonPosition] = useState<Position>();
  const [showButton, setShowButton] = useState(false);
  const [textareaPosition, setTextareaPosition] = useState<Position>();
  const [showTextarea, setShowTextarea] = useState(false);
  const [shortenedSelectedText, setShortenedSelectedText] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
    maxWidth: number;
  }>({ x: 0, y: 0, maxWidth: 0 });


  const textareaRef: React.RefObject<HTMLTextAreaElement> = React.createRef();
  const quill = useRef<ReactQuill>(null);

  const providerRef = useRef<YPartykitProvider | null>(null);

  useEffect(() => {
    // Cleanup function to disconnect the previous provider
    return () => {
      if (providerRef.current) {
        providerRef.current.disconnect();
        providerRef.current = null;
      }
    };
  }, [room]);

  const provider = useYProvider({
    //host: PARTYKIT_HOST,
    host: "localhost:1999",
    room: room,
    party: "editorserver", //correct?
    options: {
      connect: true,
    }
  });

  // Assign the new provider to the ref
  providerRef.current = provider;
  function highlightText(index: number, length: number, color: string ) {
    quill.current?.getEditor().formatText(index, length, { background: color });
  }

  function removeHighlight(index: number, length: number) {
    quill.current?.getEditor().formatText(index, length, { background: false });
  }
  useEffect(() => {
    const ydoc = provider.doc;
    const ytext = ydoc.getText("quill");
    const yarray = provider.doc.getArray('rangesArray');
    const voteYarray = provider.doc.getArray('voteArray');

    yarray.delete(0,yarray.length);
    voteYarray.delete(0,voteYarray.length);
    if (typeof window !== "undefined" && quill.current) {
      const editor = quill.current.getEditor();

      // Set editor methods and state in the parent component
      setEditor({
        ...quill.current,
        highlightText,
        removeHighlight,
        getSelection: () => editor.getSelection()
      });

      // Handle selection change in the Quill editor
      editor.on("selection-change", handleSelectionChange);
      const binding = new QuillBinding(ytext, editor, provider.awareness);

      provider.awareness.setLocalStateField("user", {
        name: "Typing...",
        color: userColor,
      });

      return () => {
        binding.destroy(); // Destroy the binding when component unmounts
        editor.off("selection-change", handleSelectionChange); // Remove event listener
      };
    }
  }, [userColor, provider]);


  function handleSelectionChange(range: Range) {

    const readOnlyContext = {quill};

    handleROSelectionChange(quill, range, "user", provider.doc);

    // If text is selected
    if (range && range.length > 0) {
      // Get range the user selected and store it in state
      const selection = quill.current!.getEditor().getSelection();

      if (selection) {
        setSelectedRange(selection);

        // Update selectedText
        const getText = quill.current!.getEditor().getText(range.index, range.length);
        setSelectedText(getText);

        // Get positions of Editor itself and selected range (in pixels)
        const bounds = quill.current!.getEditor().getBounds(selection!.index);

        // Set button position relative to selected text
        setButtonPosition({top: bounds!.top + 40, left: bounds!.left});

        setShowButton(true);
        //console.log(buttonPosition);

      } else {
        setSelectedText("");
        setShowButton(false);
      }
    }
  }

  useEffect(() => {
    if (quill.current) {
      const editor = quill.current.getEditor();
      const maxWidth = editor.container.offsetWidth; // Get the width of the editor

      const handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();
        const range = editor.getSelection();

        if (range) {
          const text = editor.getText(range.index, range.length);

          setSelectedText(text);

          const bounds = editor.getBounds(range.index, range.length);

          if (bounds) {
            setTooltipPosition({
              x: bounds.left,
              y: bounds.top + 120,
              maxWidth: maxWidth,
            });
            setShowTooltip(true);
          } else {
            // setShowTooltip(false);
          }
        } else {
          // setShowTooltip(false);
        }
      };

      editor.root.addEventListener("contextmenu", handleContextMenu);

      return () => {
        editor.root.removeEventListener("contextmenu", handleContextMenu);
      };
    }
  }, []);

  function handleCommentOnClick() {
    setShowButton(false);
    setShowTextarea(true);
    console.log(buttonPosition);
    // Get selected text
    const gettext = quill
      .current!.getEditor()
      .getText(selectedRange?.index, selectedRange?.length);

    // Shorten text if too long
    const threshold = 25;
    if (gettext.length > threshold){
      const shortenedText = gettext.substring(0,threshold) + "...";
      setShortenedSelectedText(shortenedText);
    }else{
      setShortenedSelectedText(gettext);
    }

    const bounds = quill.current!.getEditor().getBounds(selectedRange!.index);

    setTextareaPosition({
      top: bounds!.top,
      left: bounds!.left + bounds!.width + 100,
    });
  }

  function handleCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setCommentContent(event.target.value);
  }

  function handleCloseOnClick() {
    setShowTextarea(false);
    setCommentContent("");
    setSelectedRange(null);
  }

  function handleSendOnClick() {
    if (textareaRef.current!.value != "") {
      // Mark the text
      quill
        .current!.getEditor()
        .formatText(selectedRange!.index, selectedRange!.length, {
          background: "#ffff66",
        });

      const date = new Date().toLocaleDateString();

      // Send comment to Editorinterface
      setTextSpecificComment({
        key: 0,
        name: "Name",
        content: commentContent,
        date: date,
        upvotes: 0,
        isTextSpecific: true,
        selectedText: selectedText,
        index: selectedRange!.index,
        length: selectedRange!.length,
        history: [],
        replies: [],
        parentKey: null,
        canReply: true,
      });

      setShowTextarea(false);
    }
  }

  const onChange = (content: string, delta: DeltaStatic, source: string, editor: any): void => {
    handleROChange(quill, content, delta, source);
    handleRangeShift(delta,quill,provider.doc);
    console.log(JSON.stringify(quill.current?.getEditor().getSelection()?.index))
    setText(content);
  };

  const saveRange = ():void=>{
    saveRORange(quill,provider.doc);
  }

  const handleHideTooltip = () => {
    setShowTooltip(false);
  };


  return (
    <div>
      <h1>
        Editor <code>Room #{room}</code>
      </h1>
      <ReactQuill
        ref={quill}
        className="quill"
        modules={{ cursors: true }}
        theme="snow"
        value={text}
        onChange={onChange}
      />
      {showButton && (
        <button className="new-comment-btn bg-blue-500 text-white py-1 px-3 rounded hover:bg-cyan-500 transition-colors" onClick={handleCommentOnClick} style={{
              position: 'absolute',
              top: `${buttonPosition!.top}px`,
              left: `${buttonPosition!.left}px`,
            }}>Comment </button>)
        }

      {showTextarea && (
        <div className="newTextComment-card" style={{
          position: 'absolute',
          top: `${textareaPosition!.top}px`,
          left: `${textareaPosition!.left}px`}}>

            <div className="new-comment flex flex-col items-start p-4 rounded-lg shadow-md mt-2 mb-2">
                <textarea
                    ref={textareaRef}
                    onChange={handleCommentChange}
                    placeholder="Add a comment..."
                    className="new-comment-input w-full min-h-20 p-2 mb-2 border border-gray-300 rounded-md resize-vertical text-base"
                />
                <div className="new-comment-buttons flex space-x-2">
                    <button className="new-comment-btn bg-blue-500 text-white py-1 px-3 rounded hover:bg-cyan-500 transition-colors" onClick={handleSendOnClick}>Send</button>
                    <button className="new-comment-close-btn bg-pink-500 text-white py-1 px-2 rounded hover:bg-yellow-500 transition-colors" onClick={handleCloseOnClick}>Cancel</button>
                </div>
            </div>
        </div>
      )}<Tooltip
      doc={provider.doc}
      position={tooltipPosition}
      quill={quill}
      show={showTooltip}
      text={selectedText}
      onCancel={handleHideTooltip}
      onSaveRange={saveRange}
    />

    </div>
  );
}
