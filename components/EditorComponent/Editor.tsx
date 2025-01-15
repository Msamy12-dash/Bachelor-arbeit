import React, { useState, useRef, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import { QuillBinding } from "y-quill";
import "react-quill/dist/quill.snow.css";
import QuillCursors from "quill-cursors";
import * as Y from "yjs";
import YPartyKitProvider from "y-partykit/provider";
import {DeltaStatic} from "quill/index";

import Tooltip from "../ToolTipsComponets/ToolTip";
import { handleCommentRangeShift } from "../ChatComponent/handleCommentRangeShift";
import { handleRORelSelectionChange,
  saveRelRange
} from "../VoteComponent/TextBlocking";
import { highlightAIContributions } from "@/components/VersionHistoryComponent/AIContributionTagging";



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
  const [, setVoteRange] = useState<Range | null>();
  const [showButton, setShowButton] = useState(false);


  const [buttonPosition, setButtonPosition] = useState<Position>();


  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const quillRef = useRef<ReactQuill>(null);
  const isInitialLoadRef = useRef(true);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null); // ADDED CODE: Ref for timeout
  const userOriginalName = yProvider.awareness.getLocalState()?.user.name || "Unknown"; // ADDED CODE: Store original user name


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
    handleRORelSelectionChange(quillRef, range, yProvider.doc, yProvider.doc.getText("quill"));

    // ADDED CODE: Handle typing status reset
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      yProvider.awareness.setLocalStateField("user", {
        name: userOriginalName,
        color: userColor,
      });

    }, 10); // Reset to original name after 1 second of inactivity

    // If text is selected
    if (range && range.length > 0) {
      // Get range the user selected and store it in state
      const selection = quillRef.current!.getEditor().getSelection();

      if (selection) {
        setSelectedRange(selection);

        //For MUP
        setRange(selection);

      }
      // Update selectedText
      const getText = quillRef
        .current!.getEditor()
        .getText(range.index, range.length);

      setSelectedText(getText);
    }
  }

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const maxWidth = editor.root.offsetWidth; // Get the width of the editor

      const handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();
        const range = editor.getSelection();

        if (range) {
          const text = editor.getText(range.index, range.length);

          setSelectedText(text);

          const bounds = editor.getBounds(range.index, range.length);

          if (bounds) {
            let tooltipX = bounds.left;
            let tooltipY = bounds.top + 120;

            const screenPadding = 10;
            const tooltipWidth = 300;

            if (tooltipX + tooltipWidth > window.innerWidth - screenPadding) {
              tooltipX = window.innerWidth - tooltipWidth - screenPadding;
            }

            if (tooltipX < screenPadding) {
              tooltipX = screenPadding;
            }

            setTooltipPosition({
              x: tooltipX,
              y: tooltipY,
              maxWidth: maxWidth,
            });
            setShowTooltip(true);
            saveRelRange(quillRef, yProvider.doc, yProvider,range);

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
  };

  const saveRange = ():void=>{
    saveRelRange(quillRef, yProvider.doc, yProvider);
  }

  const handleHideTooltip = () => {
    setShowTooltip(false);
  };

  const saveVersion = () => {
    const snapshot = Y.encodeStateAsUpdate(yDoc);

    // Optionally, retrieve metadata as a separate structure for debugging/logging
    const metadataMap = yDoc.getMap("metadata");
    const metadataSnapshot = Array.from(metadataMap.entries());

    // Prepare the version object
    const version = {
      snapshot, // Encoded state of the entire Y.js document
      metadata: metadataSnapshot, // Readable metadata
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage or send to a backend server
    localStorage.setItem(`version_${version.timestamp}`, JSON.stringify(version));
    highlightAIContributions(yDoc,quillRef);


    console.log("Version saved:", version);
  };


  return (
    <div>
      <button style={{ margin: "10px", padding: "10px" }} onClick={saveVersion}>
        Save Version
      </button>
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
        doc={yProvider.doc}
        onsaveRelRange={saveRange}
        position={tooltipPosition}
        provider={yProvider}
        quill={quillRef}
        show={showTooltip}
        text={selectedText}
        onCancel={handleHideTooltip}
      />

    </div>
  );
}
