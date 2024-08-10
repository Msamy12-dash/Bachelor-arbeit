
"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import { QuillBinding } from "y-quill";
import useYProvider from "y-partykit/react";
import "react-quill/dist/quill.snow.css";
import QuillCursors from "quill-cursors";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { DeltaStatic } from "quill/index";
import YPartyKitProvider from "y-partykit/provider";

import Tooltip from "../ToolTipsComponets/ToolTip";
import {
  handleRangeShift,
  handleROChange, handleRORelSelectionChange,
  handleROSelectionChange,
  saveRelRange,
  saveRORange
} from "../VoteComponent/TextBlocking";

import { PARTYKIT_HOST } from "@/pages/env";



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
}: Readonly<{
  room: string;
  userColor: string;
  setTextSpecificComment: Function;
  setEditor: Function;
}>) {

  const [text, setText] = useState("");
  const [selectedRange, setSelectedRange] = useState<Range | null>();
  const [voteRange, setVoteRange] = useState<Range | null>();
  const [buttonPosition, setButtonPosition] = useState<Position>();
  const [showButton, setShowButton] = useState(false);
  const [textareaPosition, setTextareaPosition] = useState<Position>();
  const [showTextarea, setShowTextarea] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
    maxWidth: number;
  }>({ x: 0, y: 0, maxWidth: 0 });


  const textareaRef: React.RefObject<HTMLTextAreaElement> = React.createRef();
  const quill = useRef<ReactQuill>(null);

  const provider = useYProvider({
    room: room,
    party: "editorserver",
    host: PARTYKIT_HOST,
  });
  

  useEffect(() => {

    const fetchInitialText = async () => {



      try {
        console.log(`Fetching initial text for room: ${room}`);
        const response = await fetch(`/api/getInitialText?room=${room}`);
        const data = await response.json();

        if (response.ok) {
          const ytext = provider.doc.getText("quill");

          ytext.delete(0, ytext.length); // Clear existing content
          ytext.insert(0, data.text); // Insert fetched text
          setText(data.text); // Update local state
          console.log(data.text);
        } else {
          console.error("Failed to fetch initial text:", data.error);
        }
      } catch (error) {
        console.error("Failed to fetch initial text:", error);
      }
    };

    fetchInitialText();
  }, [room, provider]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ytext = provider.doc.getText("quill");

      const editor = quill.current!.getEditor();

      if (quill.current) {
        setEditor(quill.current);
      }
      editor.on("selection-change", handleSelectionChange);
      const binding = new QuillBinding(ytext, editor, provider.awareness);

      provider.awareness.setLocalStateField("user", {
        name: "Typing...",
        color: userColor,
      });

      return () => {
        binding.destroy();
      };
    }
  }, [userColor, provider]);


  function handleSelectionChange(range: Range) {

    const readOnlyContext = { quill };

    handleRORelSelectionChange(quill, range,provider.doc,provider.doc.getText("quill"));

    // If text is selected
    if (range && range.length > 0) {
      // Get range the user selected and store it in state
      const selection = quill.current!.getEditor().getSelection();

      if (selection) {
        setSelectedRange(selection);

        // Get positions of Editor itself and selected range (in pixels)
        const bounds = quill.current!.getEditor().getBounds(selection!.index);

        setSelectedText(quill.current!.getEditor().getText(selection!.index,selection!.length));

        // Set button position relative to selected text
        setButtonPosition({top: bounds!.top + 40, left: bounds!.left});

        setShowButton(true);
        //console.log(buttonPosition);
      }
    } else {
      setShowButton(false);
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
          setVoteRange(range);
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
            saveRelRange(quill,provider.doc,provider, range);

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

    if (gettext.length > threshold) {
      const shortenedText = gettext.substring(0, threshold) + "...";

      setSelectedText(shortenedText);
    } else {
      setSelectedText(gettext);
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
    //handleRangeShift(delta,quill, provider.doc);
    setText(content);
  };

  const saveRange = ():void=>{
    saveRelRange(quill,provider.doc,provider);
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
        <button
          style={{
            position: "absolute",
            top: `${buttonPosition!.top}px`,
            left: `${buttonPosition!.left}px`,
            background: "#eee",
            border: "1px solid #ccc",
            padding: "4px 13px",
            borderRadius: "4px",
          }}
          onClick={handleCommentOnClick}
        >
          Comment{" "}
        </button>
      )}

      {showTextarea && (
        <div
          className="newTextComment-card"
          style={{
            position: "absolute",
            top: `${textareaPosition!.top}px`,
            left: `${textareaPosition!.left}px`,
          }}
        >
          <div className="newTextComment-body">
            <div className="newTextComment-top">
              <h5 className="newTextComment-name">Name</h5>
              <IconButton onClick={handleCloseOnClick}>
                <CloseIcon />
              </IconButton>
            </div>
            <textarea
              ref={textareaRef}
              className="newTextComment-textarea"
              placeholder="Add new Comment here"
              onChange={handleCommentChange}
            />

            <button className="newTextComment-send" onClick={handleSendOnClick}>
              Send
            </button>
          </div>
        </div>
      )}<Tooltip
      doc={provider.doc}
      position={tooltipPosition}
      quill={quill}
      show={showTooltip}
      text={selectedText}
      onCancel={handleHideTooltip}
      onsaveRelRange={saveRange}
      provider={provider}
    />

    </div>
  );
}
