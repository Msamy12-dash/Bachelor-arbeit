/* eslint-disable prettier/prettier */
"use client";
import React, { useState, useMemo } from "react";
import { Card } from "@nextui-org/react";
import dynamic from "next/dynamic";
import Quill from "react-quill";

import Lobby from "../MainPageComponent/Lobby";
import CommentHandler from "../ChatComponent/CommentHandler";
import PollUI from "../voteComponent/VoteComponent";

import { Poll } from "@/party/types";
import { PARTYKIT_HOST, PARTYKIT_URL } from "@/pages/env";
import LikeConnector from "../LikeComment/LikeConnector";

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
  const pollId = '1';
  const pollOptions = ['Option 1', 'Option 2', 'Option 3'];
  const initialVotes = [0, 0, 0];
  const examplePoll: Poll = {
    title: "vote",
    options: pollOptions,
    votes: [10, 20, 5]
  };

  function handleSetRange(range: Range) {
    // for 'Show in Editor'-Button functionality
    editor?.getEditor().setSelection(range);
    editor
      ?.getEditor()
      .root.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  async function sendvote(poll: Poll) {
    await fetch(`${PARTYKIT_URL}/parties/vote/${1}`, {
      method: "POST",
      body: JSON.stringify(poll),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      <div style={{ padding: "10px" }}>
        <button style={{ padding: "10px 20px", margin: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px" }} onClick={() => sendvote(examplePoll)}>
          Send Vote
        </button>
      </div>
      <Lobby currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
      <div style={{ display: "flex", height: "100vh" }}>
        <Card style={{ width: "20%", padding: "10px" }}>
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
          <PollUI id={pollId} initialVotes={initialVotes} options={pollOptions} />
          <LikeConnector />
        </Card>
      </div>
    </>
  );
}
