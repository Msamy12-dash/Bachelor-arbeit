/* eslint-disable prettier/prettier */
"use client";
import React, { useState, useMemo } from "react";
import { Card } from "@nextui-org/react";
import dynamic from "next/dynamic";
import Quill from "react-quill";

import Lobby from "../MainPageComponent/Lobby";
import CommentHandler from "../ChatComponent/CommentHandler";

interface Comment {
  key: number;
  name: string;
  content: string;
  date: string;
  upvotes: number;
  isTextSpecific: boolean;
  selectedText: string;
  index: number;
  length: number;
  history: string[];
  replies: Comment[];
  parentKey: number | null;
  canReply: boolean;
}

interface Range {
  index: number;
  length: number;
}

function getRandomColor() {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

  return colors[Math.floor(Math.random() * colors.length)];
}

export default function EditorPage() {
  const [currentRoom, setCurrentRoom] = useState("default");
  const userColor = useMemo(() => getRandomColor(), []);
  const Editor = useMemo(() => {
    return dynamic(() => import("@/components/EditorComponent/Editor"), {
      loading: () => <p>Loading...</p>,
      ssr: false,
    });
  }, []);

  const [textSpecificComment, setTextSpecificComment] =
    useState<Comment | null>(null);
  const [editor, setEditor] = useState<Quill | null>(null);

  function handleSetRange(range: Range) {
    // for 'Show in Editor'-Button functionality
    editor?.getEditor().setSelection(range);
    editor
      ?.getEditor()
      .root.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <>
          <Lobby currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
      <div style={{ display: "flex", height: "100vh" }}>
        <Card style={{ width: "20%", padding: "10px" }}>
          {/*<PollMaker >**/}
          <CommentHandler
            editor={editor}
            room={currentRoom}
            setRange={handleSetRange}
            textSpecificComment={textSpecificComment}
          />
        </Card>

        <Card style={{ width: "60%", padding: "20px" }}>
          <Editor
            key={currentRoom}
            room={currentRoom}
            setEditor={setEditor}
            setTextSpecificComment={setTextSpecificComment}
            userColor={userColor}
          />
        </Card>
        <Card style={{ width: "20%", padding: "10px" }}>
        </Card>
      </div>
    </>
  );
}
