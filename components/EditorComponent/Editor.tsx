import React, { useState, useRef, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import { QuillBinding } from "y-quill";
import "react-quill/dist/quill.snow.css";
import QuillCursors from "quill-cursors";
import * as Y from "yjs";
import { DeltaStatic } from "quill/index";
import YPartyKitprovider from "y-partykit/provider";

import Tooltip from "../ToolTipsComponets/ToolTip";
import { handleCommentRangeShift } from "../ChatComponent/handleCommentRangeShift";
import {
  handleRORelSelectionChange,
  saveRelRange,
} from "../VoteComponent/TextBlocking";

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
  provider,
  userColor,
  setEditor,
  selectedText,
  setSelectedText,
  setSelectedRange,
  setRange,
}: Readonly<{
  currentRoom: string;
  yDoc: Y.Doc;
  provider: YPartyKitprovider;
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
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
    maxWidth: 0,
  });
  const [, setVoteRange] = useState<Range | null>();
  const isInitialLoadRef = useRef(true);
  const quill = useRef<ReactQuill>(null);

  const saveRange = (): void => {
    saveRelRange(quill, provider.doc, provider);
  };

  const handleHideTooltip = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    if (!yDoc) return;
    const ytext = yDoc.getText("quill");

    if (typeof window !== "undefined" && quill.current) {
      const editor = quill.current.getEditor();

      // Set editor methods and state in the parent component
      setEditor({
        ...quill.current,
        highlightText,
        removeHighlight,
        getSelection: () => editor.getSelection(),
      });

      // Handle selection change in the Quill editor
      editor.on("selection-change", handleSelectionChange);

      // Create a binding between Yjs and the Quill editor
      const binding = new QuillBinding(ytext, editor, provider.awareness);

      editor.setContents(ytext.toDelta());
      isInitialLoadRef.current = false;

      // Set local user state in Yjs awareness system
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
    handleRORelSelectionChange(
      quill,
      range,
      provider.doc,
      provider.doc.getText("quill")
    );

    const editor = quill.current!.getEditor();
    const selection = editor.getSelection();

    // If a valid selection is made
    if (range && range.length > 0 && selection) {
      // Get range the user selected and store it in state
      setSelectedRange(selection);

      // For MUP
      setRange(selection);

      // Update selectedText
      const getText = editor.getText(range.index, range.length);
      setSelectedText(getText);
    } else {
      setSelectedText("");
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
            saveRelRange(quill, provider.doc, provider, range);
          }
        }
      };

      editor.root.addEventListener("contextmenu", handleContextMenu);

      return () => {
        editor.root.removeEventListener("contextmenu", handleContextMenu);
      };
    }
  }, []);

  function highlightText(index: number, length: number, color: string) {
    quill.current?.getEditor().formatText(index, length, { background: color });
  }

  function removeHighlight(index: number, length: number) {
    quill.current?.getEditor().formatText(index, length, { background: false });
  }

  const onChange = (
    content: string,
    delta: DeltaStatic,
    source: string
  ): void => {
    if (!isInitialLoadRef.current && source === "user") {
      handleCommentRangeShift(delta, quill, yDoc);
    }
    setText(content);
  };

  return (
    <div>
      <h1>
        Editor <code>Room #{currentRoom}</code>
      </h1>
      <ReactQuill
        ref={quill}
        className="quill"
        modules={{ cursors: true }}
        theme="snow"
        value={text}
        onChange={onChange}
      />
      <Tooltip
        doc={provider.doc}
        onsaveRelRange={saveRange}
        position={tooltipPosition}
        provider={provider}
        quill={quill}
        show={showTooltip}
        text={selectedText}
        onCancel={handleHideTooltip}
      />
    </div>
  );
}
