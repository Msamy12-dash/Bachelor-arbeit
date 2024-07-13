/* eslint-disable prettier/prettier */
"use client";
import React, { useState, useMemo, useEffect, ChangeEvent } from "react";
import dynamic from "next/dynamic";
import Quill from "react-quill";
import Lobby from "../MainPageComponent/Lobby";
import LobbyTop from "../MainPageComponent/LobbyTop";
import CommentHandler from "../ChatComponent/CommentHandler";
import { Card, Button } from "@nextui-org/react";




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
    const [editor, setEditor] = useState<(Quill & {
      highlightText: (index: number, length: number, color: string) => void;
      removeHighlight: (index: number, length: number) => void;
      getSelection: () => { index: number; length: number } | null;
    }) | null>(null);
  const [selectedText, setSelectedText] = useState<string>("");
  const [completeText, setCompleteText] = useState<string>("");
  const [showAIChangesDiv, setShowAIChangesDiv] = useState<boolean>(false);
  const [AIChanges, setAIChanges] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(true); 




  useEffect(() => {
    // If there is new MCP Response
    if(AIChanges != ""){
      setShowAIChangesDiv(true);
    }
  }, [AIChanges]);


  function handleSetRange(range: Range) {
    // for 'Show in Editor'-Button functionality
    editor?.getEditor().setSelection(range);
    editor
      ?.getEditor()
      .root.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function handleDiscardOnClick (){
    setAIChanges("");
    setShowAIChangesDiv(false);
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
          <LobbyTop currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
      <div style={{ display: "flex", height: "100vh" }}>
        <Card style={{ width: "20%", padding: "10px" }}>
          {/*<PollMaker >**/}
          <CommentHandler
            editor={editor}
            room={currentRoom}
            setRange={handleSetRange}
            textSpecificComment={textSpecificComment}
            setAIChanges={setAIChanges}
          />
        </Card>

        <Card style={{ width: "60%", padding: "20px" }}>
        <Editor key={currentRoom} room={currentRoom} userColor={userColor} setTextSpecificComment={setTextSpecificComment} setEditor={setEditor} selectedText={selectedText} setSelectedText={setSelectedText} setCompleteText={setCompleteText}/>
            {/* Pop up card for MCP Changes */}
            {showAIChangesDiv && (
              <div style={{position: "absolute", left: "100px", top:"100px"}}>
                <Card style={{ width: "40vw", padding: "1vw", backgroundColor: "#eee"}}>
                  <p style={{fontWeight: "bold", marginBottom: "1vw"}}>Changes made by the AI according to selected Comments</p>
                  <p style={{marginBottom: "1vw"}}>{AIChanges}</p>
                  <div style={{display: "flex", marginBottom: "1vw"}}>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxOnChange} ></input>
                    <p style={{marginLeft: "0.5vw"}}>Delete selected Comments</p>
                  </div>
                  <div style={{display: "flex"}}>                  
                    <Button color="success">Accept changes</Button>
                    <Button onClick={handleDiscardOnClick}>Discard</Button>
                  </div>
                </Card>
              </div>
            )}
  
          
        </Card>
        <Card style={{ width: "20%" }}>
          <Lobby currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} selectedText={selectedText} completeText={completeText} editor={editor}/>
        </Card>
      </div>
    </>
  );
}
