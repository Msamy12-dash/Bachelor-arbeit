"use client"
import { useState, useMemo } from "react";
import Lobby from "./components/Lobby";
import Editor from "./components/Editor";
import PollMaker from "./components/voteComponent/VoteMaker";

function getRandomColor() {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function EditorPage() {
  const [currentRoom, setCurrentRoom] = useState("default");
  const userColor = useMemo(() => getRandomColor(), []);

  return (<>
    <div>
      <Editor room={currentRoom} userColor={userColor} key={currentRoom} />
      </div>
      <div>
      <Lobby currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
      </div>
      <PollMaker/>
      </>
  );
}
