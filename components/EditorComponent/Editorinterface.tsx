"use client";
import React, { useState, useMemo, useEffect } from "react";
import { Card } from "@nextui-org/react";
import dynamic from "next/dynamic";
import Lobby from "../MainPageComponent/Lobby";
import CommentHandler from "../ChatComponent/CommentHandler";
import Quill from "react-quill";

interface Comment {
  key: number;
  name: string;
  content: string;
  date: string; 
  upvotes: number;
  isTextSpecific: boolean;
  shortenedSelectedText: string;
  index: number;
  length: number;
  history: string[]; 
  replies: Comment[];
}

interface Range{
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

  const [textSpecificComment, setTextSpecificComment] = useState<Comment | null>(null);
  const [editor, setEditor] = useState<Quill|null>(null);
  const [selectedText, setSelectedText] = useState<string>("");
  const [completeText, setCompleteText] = useState<string>("");


  function handleSetRange (range: Range){
    // for 'Show in Editor'-Button functionality
    editor?.getEditor().setSelection(range);
    editor?.getEditor().root.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Card style={{ width: "20%", padding: "10px" }}>
          {/*<PollMaker >**/}
          <CommentHandler room={currentRoom} textSpecificComment = {textSpecificComment} editor={editor} setRange={handleSetRange}/>
        </Card>

        <Card style={{ width: "60%", padding: "20px" }}>
          <Editor key={currentRoom} room={currentRoom} userColor={userColor} setTextSpecificComment={setTextSpecificComment} setEditor={setEditor} selectedText={selectedText} setSelectedText={setSelectedText} setCompleteText={setCompleteText}/>

        </Card>
        <Card style={{ width: "20%" }}>
          <Lobby currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} selectedText={selectedText} completeText={completeText}/>
        </Card>
      </div>
    </>
  );
}
