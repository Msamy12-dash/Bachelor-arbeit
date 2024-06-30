"use client";
import { useState, useRef, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import { QuillBinding } from "y-quill";
import useYProvider from "y-partykit/react";
import "react-quill/dist/quill.snow.css";
import QuillCursors from "quill-cursors";
import * as Y from "yjs";

import { SINGLETON_ROOM_ID } from "@/party/types";

Quill.register("modules/cursors", QuillCursors);

export default function Editor({
  room,
  userColor,
}: Readonly<{
  room: string;
  userColor: string;
}>) {
  const ydoc = new Y.Doc();

  const [text, setText] = useState("");
  const quill = useRef<ReactQuill>(null);

  const provider = useYProvider({
    host: "localhost:1999", // optional, defaults to window.location.host
    party: "editorserver",
    room: SINGLETON_ROOM_ID,
    doc: ydoc,
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
          console.log(data.text)
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
  const saveTextToBackend = async () => {
    try {
      const response = await fetch('/api/saveMainText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ room, text }),
      });
      const data = await response.json();
      console.log('Save response:', data);
    } catch (error) {
      console.error('Failed to save text:', error);
    }
  };

  // Effect to save text every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      saveTextToBackend();
    }, 10000); // Save every 30 seconds

    return () => clearInterval(interval);
  }, [text, room]);


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
    </div>
  );
}
