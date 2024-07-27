"use client";
import React, { useState, useMemo, useEffect, ChangeEvent } from "react";
import dynamic from "next/dynamic";
import Quill from "react-quill";
import { Card, Button } from "@nextui-org/react";

import LobbyTop from "../MainPageComponent/LobbyTop";
import CommentHandler from "../ChatComponent/CommentHandler";






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
  parentKey: number | null;
  canReply: boolean;
}

interface Range {
  index: number;
  length: number;
}

interface MCP_AI_responses{
  summary: string;
  changes: string;
}

function getRandomColor() {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

  return colors[Math.floor(Math.random() * colors.length)];
}

export default function EditorPage({ currentRoom }) {
  const [ setCurrentRoom] = useState("default");
  const userColor = useMemo(() => getRandomColor(), []);
  const Editor = useMemo(() => {
    return dynamic(() => import("@/components/EditorComponent/Editor"), {
      loading: () => <p>Loading...</p>,
      ssr: false,
    });
  }, []);
  const [, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const [textSpecificComment, setTextSpecificComment] =
    useState<Comment | null>(null);
    const [editor, setEditor] = useState<(Quill & {
      highlightText: (index: number, length: number, color: string) => void;
      removeHighlight: (index: number, length: number) => void;
      getSelection: () => { index: number; length: number } | null;
    }) | null>(null);
  const [selectedText, setSelectedText] = useState<string>("");
  const [completeText, setCompleteText] = useState<string>("");
  const [showAIChangesDiv, setShowAIChangesDiv] = useState<boolean>(false);
  const [AIChanges, setAIChanges] = useState<MCP_AI_responses | null>();
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [deleteSelectedComments, setDeleteSelectedComments] = useState<boolean>(false);



  useEffect(() => {
    // If there is new MCP Response
    if(AIChanges != null){
      setShowAIChangesDiv(true);
    }
  }, [AIChanges]);



  function handleSetRange(range: Range) {
    // for 'Show in Editor'-Button functionality
    editor?.editor?.setSelection(range);
    editor?.editor?.root.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function handleDiscardOnClick (){
    setAIChanges(null);
    setShowAIChangesDiv(false);
  }

  function handleAcceptOnClick(){
    editor?.editor?.setText(AIChanges!.changes);
    setAIChanges(null);
    setShowAIChangesDiv(false);

    // When user wants selected comments to be deleted
    if(isChecked){
      setDeleteSelectedComments(true);
    }
  }

  function handleCheckboxOnChange (event: ChangeEvent<HTMLInputElement>){

    // if checkbox is checked
    if(event.target.checked){
      setIsChecked(true);
    }else{
      setIsChecked(false);
    }
  }





  return (
    <>
      <div style={{ padding: "10px" }} />
      <div style={{ display: "flex", height: "100vh" }}>
        <Card style={{ width: "20%", padding: "10px" }}>
          <CommentHandler
            deleteSelectedComments={deleteSelectedComments}
            editor={editor}
            room={currentRoom}
            setAIChanges={setAIChanges}
            setDeleteSelectedComments={setDeleteSelectedComments}
            setRange={handleSetRange}
            textSpecificComment={textSpecificComment}
          />
        </Card>

        <Card style={{ width: "60%", padding: "20px" }}>
        <Editor key={currentRoom} room={currentRoom} selectedText={selectedText} setCompleteText={setCompleteText} setEditor={setEditor} setSelectedText={setSelectedText} setTextSpecificComment={setTextSpecificComment} userColor={userColor}/>
            {/* Pop up card for MCP Changes */}
            {showAIChangesDiv && (
              <Card style={{position: "absolute", left: "100px", top:"100px", border: "1px solid grey", borderRadius: "25px"}}>
                <div style={{ width: "40vw", padding: "1.5vw", backgroundColor: "#f0f0f0"}}>
                  <p style={{fontWeight: "bold", marginBottom: "1vw", fontSize:"1.1rem"}}>Changes made by the AI according to selected Comments</p>
                  <p style={{marginBottom: "1vw"}}>{AIChanges?.summary}</p>
                  <div style={{display: "flex", marginBottom: "1vw"}}>
                    <input type="checkbox" onChange={handleCheckboxOnChange}  />
                    <p style={{marginLeft: "0.5vw"}}>Delete selected comment(s)</p>
                  </div>
                  <div style={{display: "flex"}}>
                    <Button color="success" style={{color: "white", paddingLeft: "1vw", paddingRight: "1vw"}} onClick={handleAcceptOnClick}>Accept changes</Button>
                    <Button className="ml-5" onClick={handleDiscardOnClick}>Discard</Button>
                  </div>
                </div>
              </Card>
            )}


        </Card>
        <Card style={{ width: "20%", padding: "10px" }} />
      </div>
    </>
  );
}
