"use client";
import React, { useState, useMemo, useEffect, ChangeEvent } from "react";
import dynamic from "next/dynamic";
import Quill from "react-quill";
import CommentHandler from "../ChatComponent/CommentHandler";
import { Card, Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Resizable } from "react-resizable";
import 'react-resizable/css/styles.css';
import CardContainer from "../MUPComponents/CardContainer";
import YPartyKitProvider from "y-partykit/provider";
import * as Y from "yjs";

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

interface MCP_AI_responses {
  summary: string;
  changes: string;
}

function getRandomColor() {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function EditorPage({
  currentRoom,
  yDoc,
  yProvider
}: {
  currentRoom: string;
  yDoc: Y.Doc;
  yProvider: YPartyKitProvider;
}) {
  const [prompts, setPrompts] = useState<string[]>([]);
  const userColor = useMemo(() => getRandomColor(), []);
  const Editor = useMemo(() => {
    return dynamic(() => import("@/components/EditorComponent/Editor"), {
      loading: () => <p>Loading...</p>,
      ssr: false,
    });
  }, []);

  const [textSpecificComment, setTextSpecificComment] = useState<Comment | null>(null);
  const [editor, setEditor] = useState<(Quill & {
    highlightText: (index: number, length: number, color: string) => void;
    removeHighlight: (index: number, length: number) => void;
    getSelection: () => { index: number; length: number } | null;
  }) | null>(null);
  const [selectedText, setSelectedText] = useState<string>("");
  const [completeText, setCompleteText] = useState<string>("");
  const [showAIChangesDiv, setShowAIChangesDiv] = useState<boolean>(false);
  const [AIChanges, setAIChanges] = useState<MCP_AI_responses | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [isCommentsVisible, setIsCommentsVisible] = useState<boolean>(true);
  const [deleteSelectedComments, setDeleteSelectedComments] = useState<boolean>(false);

  const [commentWidth, setCommentWidth] = useState<number>(300);

  useEffect(() => {
    if(AIChanges != null){
      setShowAIChangesDiv(true);
    }
  }, [AIChanges]);

  function handleSetRange(range: Range) {
    editor?.editor?.setSelection(range);
    editor?.editor?.root.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function handleDiscardOnClick (){
    setAIChanges(null);
    setShowAIChangesDiv(false);
  }

  function handleAcceptOnClick(){
    if (AIChanges) {
      editor?.editor?.setText(AIChanges.changes);
    }
    setAIChanges(null);
    setShowAIChangesDiv(false);

    if(isChecked){
      setDeleteSelectedComments(true);
    }
  }

  function handleCheckboxOnChange (event: ChangeEvent<HTMLInputElement>){
    setIsChecked(event.target.checked);
  }

  function toggleCommentsVisibility() {
    setIsCommentsVisible(prev => !prev);
  }

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        {isCommentsVisible && (
          <Resizable
            width={commentWidth}
            height={Infinity}
            axis="x"
            minConstraints={[250, Infinity]}
            maxConstraints={[1000, Infinity]}
            onResize={(event, { size }) => setCommentWidth(size.width)}
            handle={<div style={{ width: 10, cursor: 'ew-resize', position: 'absolute', right: -5, top: 0, bottom: 0, backgroundColor: '#ccc' }} />}
          >
            <div style={{ width: commentWidth, position: "relative", height: "100%", overflow: "hidden", background: "#f9f9f9" }}>
              <Button
                onClick={toggleCommentsVisibility}
                style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <FaArrowRight size={24} />
              </Button>
              <Card style={{ width: "100%", padding: "10px", height: "100%" }}>
                <CommentHandler
                  editor={editor}
                  room={currentRoom}
                  setRange={handleSetRange}
                  textSpecificComment={textSpecificComment}
                  setAIChanges={setAIChanges}
                  deleteSelectedComments={deleteSelectedComments}
                  setDeleteSelectedComments={setDeleteSelectedComments}
                  promptList={prompts}
                  yDoc={yDoc}
                  yProvider={yProvider}
                />
              </Card>
            </div>
          </Resizable>
        )}

        <Card style={{ flexGrow: 1, padding: "20px", transition: "width 0.3s", position: "relative" }}>
          {!isCommentsVisible && (
            <Button
              onClick={toggleCommentsVisibility}
              style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <FaArrowLeft size={24} />
            </Button>
          )}
          <Editor
            key={currentRoom}
            currentRoom={currentRoom}
            yDoc={yDoc}
            yProvider={yProvider}
            userColor={userColor}
            setTextSpecificComment={setTextSpecificComment}
            setEditor={setEditor}
            selectedText={selectedText}
            setSelectedText={setSelectedText}
            setCompleteText={setCompleteText}
          />
          {showAIChangesDiv && AIChanges && (
            <Card style={{position: "absolute", left: "100px", top:"100px", border: "1px solid grey", borderRadius: "25px"}}>
              <div style={{ width: "40vw", padding: "1.5vw", backgroundColor: "#f0f0f0"}}>
                <p style={{fontWeight: "bold", marginBottom: "1vw", fontSize:"1.1rem"}}>Changes made by the AI according to selected Comments</p>
                <p style={{marginBottom: "1vw"}}>{AIChanges.summary}</p>
                <div style={{display: "flex", marginBottom: "1vw"}}>
                  <input type="checkbox" checked={isChecked} onChange={handleCheckboxOnChange} />
                  <p style={{marginLeft: "0.5vw"}}>Delete selected comment(s)</p>
                </div>
                <div style={{display: "flex"}}>                  
                  <Button style={{color: "white", paddingLeft: "1vw", paddingRight: "1vw"}} color="success" onClick={handleAcceptOnClick}>Accept changes</Button>
                  <Button onClick={handleDiscardOnClick} className="ml-5">Discard</Button>
                </div>
              </div>
            </Card>
          )}
        </Card>

        <Card className="w-1/5 p-4 overflow-y-auto">
          <CardContainer
            key={currentRoom}
            currentRoom={currentRoom}
            yDoc={yDoc}
            yProvider={yProvider}
            selectedText={selectedText}
            completeText={completeText}
            editor={editor}
          />
        </Card>
      </div>
    </>
  );
}