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
import { handleCommentRangeShift } from "../ChatComponent/handleCommentRangeShift";
import DeltaStatic from "quill/index";

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
  setEditor,
  selectedText,
  setSelectedText,
  setCompleteText,
  selectedRange,
  setSelectedRange,
  setRange
}: Readonly<{
  currentRoom: string;
  yDoc: Y.Doc;
  yProvider: YPartyKitProvider;
  userColor: string;
  setEditor: Function;
  selectedText: string;
  setSelectedText: (text: string) => void;
  setCompleteText: (text: string) => void;
  selectedRange: Range | undefined | null;
  setSelectedRange: (range: Range | undefined | null) => void;
  setRange: Function;
}>) {
  const [text, setText] = useState("");
  const [shortenedSelectedText, setShortenedSelectedText] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
    maxWidth: 0,
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const quillRef = useRef<ReactQuill>(null);
  const isInitialLoadRef = useRef(true);

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

      editor.setContents(ytext.toDelta());
      isInitialLoadRef.current = false;
  
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

      //For MUP
      setRange(selection);

      // Update selectedText
      const getText = quillRef
        .current!.getEditor()
        .getText(range.index, range.length);
      setSelectedText(getText);

      // Get positions of Editor itself and selected range (in pixels)
      const bounds = quillRef.current!.getEditor().getBounds(selection!.index);

    } else {
      setSelectedText("");
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

  const onChange = (content: string, delta: DeltaStatic, source: string, editor: any): void => {
    if (!isInitialLoadRef.current && source === 'user') {
      handleCommentRangeShift(delta, quillRef, yDoc);
    }
    setText(content);
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
        onChange={onChange}
      />
      <Tooltip
        position={tooltipPosition}
        show={showTooltip}
        text={selectedText}
      />
    </div>
  );
}