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
import { handleRORelSelectionChange,
  restoreSelectionToCurrentRange,
  saveRelRange
} from "../VoteComponent/TextBlocking";

Quill.register("modules/cursors", QuillCursors);



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
                                 provider,
                                 userColor,
                                 setEditor,
                                 selectedText,
                                 setSelectedText,
                                 setSelectedRange}: Readonly<{
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
  const quill = useRef<ReactQuill>(null);
  const [showButton, setShowButton] = useState(false);


  const [buttonPosition, setButtonPosition] = useState<Position>();




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
    handleRORelSelectionChange(quill, range, provider.doc, provider.doc.getText("quill"));

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
            saveRelRange(quill, provider.doc, provider,range);

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



  const onChange = (content: string, delta: DeltaStatic, source: string): void => {
    setText(content);
  };

  const saveRange = ():void=>{
    saveRelRange(quill, provider.doc, provider);
  }

  const handleHideTooltip = () => {
    setShowTooltip(false);
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