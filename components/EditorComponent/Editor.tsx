/* eslint-disable prettier/prettier */
import { useState, useRef, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import { QuillBinding } from "y-quill";
// eslint-disable-next-line import/order
import useYProvider from "y-partykit/react";

import "react-quill/dist/quill.snow.css";
import QuillCursors from "quill-cursors";

import Tooltip from "../ToolTipsComponets/ToolTip";

import { PARTYKIT_HOST } from "@/pages/env";

Quill.register("modules/cursors", QuillCursors);

export default function Editor({
  room,
  userColor,
}: {
  room: string;
  userColor: string;
}) {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
    maxWidth: number;
  }>({ x: 0, y: 0, maxWidth: 0 });
  const [selectedText, setSelectedText] = useState<string>("");

  const [text, setText] = useState("");
  const quill = useRef<ReactQuill>(null);

  const provider = useYProvider({
    room: room,
    party: "editorserver",
    host: PARTYKIT_HOST,
  });

  // Create an editor-binding which
  // "binds" the quill editor to a Y.Text type.
  useEffect(() => {
    const ytext = provider.doc.getText("quill");
    const editor = quill.current!.getEditor();
    const binding = new QuillBinding(ytext, editor, provider.awareness);

    provider.awareness.setLocalStateField("user", {
      name: "Typing...",
      color: userColor,
    });

    return () => {
      binding.destroy();
    };
  }, [userColor, provider, quill]);
  useEffect(() => {
    if (quill.current) {
      const editor = quill.current.getEditor();
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

  return (
    <div>
      <h1>
        Editor <code>Room #{room}</code>
      </h1>
      <ReactQuill
        ref={quill}
        modules={{ cursors: true }}
        theme="snow"
        value={text}
        onChange={setText}
      />
      <Tooltip
        position={tooltipPosition}
        show={showTooltip}
        text={selectedText}
      />
    </div>
  );
}
