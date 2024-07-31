/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect, useMemo } from "react";
import ReactQuill, { Quill } from "react-quill";
import { QuillBinding } from "y-quill";
import "react-quill/dist/quill.snow.css";
import QuillCursors from "quill-cursors";
import * as Y from "yjs";
import Tooltip from "../ToolTipsComponets/ToolTip";
import { PARTYKIT_HOST } from "@/pages/env";
import YPartyKitProvider from "y-partykit/provider";

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
  currentRoom,
  yDoc,
  yProvider,
  userColor,
  setTextSpecificComment,
  setEditor,
  selectedText,
  setSelectedText,
  setCompleteText
}: Readonly<{
  currentRoom: string;
  yDoc: Y.Doc;
  yProvider: YPartyKitProvider;
  userColor: string;
  setTextSpecificComment: Function;
  setEditor: Function;
  selectedText: string;
  setSelectedText: (text: string) => void;
  setCompleteText: (text: string) => void;
}>) {
  const [text, setText] = useState("");
  const [selectedRange, setSelectedRange] = useState<Range | null>(null);
  const [buttonPosition, setButtonPosition] = useState<Position | null>(null);
  const [showButton, setShowButton] = useState(false);
  const [textareaPosition, setTextareaPosition] = useState<Position | null>(
    null
  );
  const [showTextarea, setShowTextarea] = useState(false);
  const [shortenedSelectedText, setShortenedSelectedText] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
    maxWidth: 0,
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const quillRef = useRef<ReactQuill>(null);

  useEffect(() => {
    if (!yDoc) return;
    const ytext = yDoc.getText("quill");
  
    if (typeof window !== "undefined" && quillRef.current) {
      const editor = quillRef.current.getEditor();
  
      // Set editor methods and state in the parent component
      setEditor({
        ...quillRef.current,
        highlightText,
        removeHighlight,
        getSelection: () => editor.getSelection()
      });
  
      // Handle selection change in the Quill editor
      editor.on("selection-change", handleSelectionChange);
      
      // Create a binding between Yjs and the Quill editor
      const binding = new QuillBinding(ytext, editor, yProvider.awareness);
  
      // Set local user state in Yjs awareness system
      yProvider.awareness.setLocalStateField("user", {
        name: "Typing...",
        color: userColor,
      });
  
      // Clean up function
      return () => {
        binding.destroy(); // Destroy the binding when component unmounts
        editor.off("selection-change", handleSelectionChange); // Remove event listener
      };
    }
  }, [userColor, yProvider]);

  function handleSelectionChange(range: Range) {
    // If text is selected
    if (range && range.length > 0) {
      // Get range the user selected and store it in state
      const selection = quillRef.current!.getEditor().getSelection();

      setSelectedRange(selection);

      // Update selectedText
      const getText = quillRef
        .current!.getEditor()
        .getText(range.index, range.length);
      setSelectedText(getText);

      // Get positions of Editor itself and selected range (in pixels)
      const bounds = quillRef.current!.getEditor().getBounds(selection!.index);

      // Set button position relative to selected text
      setButtonPosition({ top: bounds!.top + 40, left: bounds!.left });

      setShowButton(true);
      //console.log(buttonPosition);
    } else {
      setSelectedText("");
      setShowButton(false);
    }
  }

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const maxWidth = editor.container.offsetWidth; // Get the width of the editor

      editor.on("selection-change", (range) => {
        if (range && range.length > 0) {
          const text = editor.getText(range.index, range.length);

          setSelectedText(text);

          const bounds = editor.getBounds(range.index, range.length);

          if (bounds) {
            setTooltipPosition({
              x: bounds.left,
              y: bounds.top + 120,
              maxWidth: maxWidth, // Adjusted for better vertical positioning
            });
          } else {
            // Handle the case when bounds is null
          }
          setShowTooltip(true);
        } else {
          setShowTooltip(false);
        }
      });
    }
  }, []);

  function handleCommentOnClick() {
    setShowButton(false);
    setShowTextarea(true);
    console.log(buttonPosition);
    // Get selected text
    const gettext = quillRef
      .current!.getEditor()
      .getText(selectedRange?.index, selectedRange?.length);

    // Shorten text if too long
    const threshold = 25;
    if (gettext.length > threshold) {
      const shortenedText = gettext.substring(0, threshold) + "...";
      setShortenedSelectedText(shortenedText);
    } else {
      setShortenedSelectedText(gettext);
    }

    const bounds = quillRef
      .current!.getEditor()
      .getBounds(selectedRange!.index);

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
      quillRef
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
        shortenedSelectedText: shortenedSelectedText,
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

  function highlightText(index: number, length: number, color: string) {
    quillRef.current
      ?.getEditor()
      .formatText(index, length, { background: color });
  }

  function removeHighlight(index: number, length: number) {
    quillRef.current
      ?.getEditor()
      .formatText(index, length, { background: false });
  }

  return (
    <div>
      <h1>
        Editor <code>Room #{currentRoom}</code>
      </h1>
      <ReactQuill
        ref={quillRef}
        className="quill"
        modules={{ cursors: true }}
        theme="snow"
        value={text}
        onChange={setText}
      />
      {showButton && (
        <button
          className="new-comment-btn bg-blue-500 text-white py-1 px-3 rounded hover:bg-cyan-500 transition-colors"
          onClick={handleCommentOnClick}
          style={{
            position: "absolute",
            top: `${buttonPosition?.top}px`,
            left: `${buttonPosition?.left}px`,
          }}
        >
          Comment
        </button>
      )}
      {showTextarea && (
        <div
          className="newTextComment-card"
          style={{
            position: "absolute",
            top: `${textareaPosition?.top}px`,
            left: `${textareaPosition?.left}px`,
          }}
        >
          <div className="new-comment flex flex-col items-start p-4 rounded-lg shadow-md mt-2 mb-2">
            <textarea
              ref={textareaRef}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              className="new-comment-input w-full min-h-20 p-2 mb-2 border border-gray-300 rounded-md resize-vertical text-base"
            />
            <div className="new-comment-buttons flex space-x-2">
              <button
                className="new-comment-btn bg-blue-500 text-white py-1 px-3 rounded hover:bg-cyan-500 transition-colors"
                onClick={handleSendOnClick}
              >
                Send
              </button>
              <button
                className="new-comment-close-btn bg-pink-500 text-white py-1 px-2 rounded hover:bg-yellow-500 transition-colors"
                onClick={handleCloseOnClick}
              >
                Cancel
              </button>
            </div>
          </div>
          </div>
      )}
      <Tooltip
        position={tooltipPosition}
        show={showTooltip}
        text={selectedText}
      />
    </div>
  );
}