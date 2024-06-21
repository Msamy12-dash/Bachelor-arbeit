"use client"
import { useState, useRef, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import { QuillBinding } from "y-quill";
import useYProvider from "y-partykit/react";
import "react-quill/dist/quill.snow.css";
import QuillCursors from "quill-cursors";

Quill.register("modules/cursors", QuillCursors);

export default function Editor({
  room,
  userColor,
}: Readonly<{
  room: string;
  userColor: string;
}>) {
  const [text, setText] = useState("");
  const quill = useRef<ReactQuill>(null);

  const provider = useYProvider({
    room,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, [userColor, provider]);

  return (
    <div >
      <h1>
        Editor <code>Room #{room}</code>
      </h1>
      <ReactQuill
        ref={quill}
        theme="snow"
        value={text}
        onChange={setText}
        modules={{ cursors: true }}
      />
    </div>
    
  );
}
