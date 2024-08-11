"use client";
import React, { useState, useMemo, useEffect, ChangeEvent } from "react";
import dynamic from "next/dynamic";
import Quill from "react-quill";
import { Card, Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Resizable } from "react-resizable";

import "react-resizable/css/styles.css";
import * as Y from "yjs";
import YPartyKitProvider from "y-partykit/provider";

import CardContainer from "../MUPComponents/CardContainer";
import CommentHandler from "../ChatComponent/CommentHandler";

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
  provider,
  selectedModel
}: {
  currentRoom: string;
  yDoc: Y.Doc;
  provider: YPartyKitProvider;
  selectedModel: string;
}) {
  const [prompts, setPrompts] = useState<string[]>([]);
  const userColor = useMemo(() => getRandomColor(), []);
  const Editor = useMemo(() => {
    return dynamic(() => import("@/components/EditorComponent/Editor"), {
      loading: () => <p>Loading...</p>,
      ssr: false,
    });
  }, []);
  const [, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const [editor, setEditor] = useState<
    | (Quill & {
        highlightText: (index: number, length: number, color: string) => void;
        removeHighlight: (index: number, length: number) => void;
        getSelection: () => { index: number; length: number } | null;
      })
    | null
  >(null);
  const [selectedText, setSelectedText] = useState<string>("");
  const [completeText, setCompleteText] = useState<string>("");
  const [showAIChangesDiv, setShowAIChangesDiv] = useState<boolean>(false);
  const [AIChanges, setAIChanges] = useState<MCP_AI_responses | null>();
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [isCommentsVisible, setIsCommentsVisible] = useState<boolean>(true);
  const [deleteSelectedComments, setDeleteSelectedComments] =
    useState<boolean>(false);
  const [selectedRange, setSelectedRange] = useState<Range | null>();
  const [range, setRange] = useState<Range>();
  const [commentWidth, setCommentWidth] = useState<number>(300);

  useEffect(() => {
    // If there is new MCP Response
    if (AIChanges != null) {
      setShowAIChangesDiv(true);
    }
  }, [AIChanges]);


  function handleSetRange(range: Range) {
    // for 'Show in Editor'-Button functionality
    editor?.editor?.setSelection(range);
    editor?.editor?.root.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  function handleDiscardOnClick() {
    setAIChanges(null);
    setShowAIChangesDiv(false);
  }

  function handleAcceptOnClick() {
    editor?.editor?.setText(AIChanges!.changes);
    setAIChanges(null);
    setShowAIChangesDiv(false);

    // When user wants selected comments to be deleted
    if (isChecked) {
      setDeleteSelectedComments(true);
    }
  }

  function handleCheckboxOnChange(event: ChangeEvent<HTMLInputElement>) {
    // if checkbox is checked
    if (event.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

  function toggleCommentsVisibility() {
    setIsCommentsVisible((prev) => !prev);
  }

  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        {isCommentsVisible && (
          <Resizable
            axis="x"
            handle={
              <div
                style={{
                  width: 10,
                  cursor: "ew-resize",
                  position: "absolute",
                  right: -5,
                  top: 0,
                  bottom: 0,
                  backgroundColor: "#ccc",
                }}
              />
            }
            height={Infinity}
            maxConstraints={[1000, Infinity]}
            minConstraints={[250, Infinity]}
            width={commentWidth}
            onResize={(event: any, { size }: any) => setCommentWidth(size.width)}
          >
            <div
              style={{
                width: commentWidth,
                position: "relative",
                height: "100%",
                overflow: "hidden",
                background: "#f9f9f9",
              }}
            >
              <Button
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  zIndex: 1000,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={toggleCommentsVisibility}
              >
                <FaArrowRight size={24} />
              </Button>
              <Card style={{ width: "100%", padding: "10px", height: "100%" }}>
                <CommentHandler
                  deleteSelectedComments={deleteSelectedComments}
                  editor={editor}
                  highlightText={editor?.highlightText}
                  promptList={prompts}
                  removeHighlight={editor?.removeHighlight}
                  room={currentRoom}
                  selectedModel={selectedModel}
                  selectedRange={selectedRange}
                  selectedText={selectedText}
                  setAIChanges={setAIChanges}
                  setDeleteSelectedComments={setDeleteSelectedComments}
                  setRange={handleSetRange}
                  yDoc={yDoc}
                  yProvider={provider}
                />
              </Card>
            </div>
          </Resizable>
        )}

        <Card
          style={{
            flexGrow: 1,
            padding: "20px",
            transition: "width 0.3s",
            position: "relative",
          }}
        >
          {!isCommentsVisible && (
            <Button
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={toggleCommentsVisibility}
            >
              <FaArrowLeft size={24} />
            </Button>
          )}
          <Editor
            key={currentRoom}
            currentRoom={currentRoom}
            provider={provider}
            selectedRange={selectedRange}
            selectedText={selectedText}
            setCompleteText={setCompleteText}
            setEditor={setEditor}
            setRange={setRange}
            setSelectedRange={setSelectedRange}
            setSelectedText={setSelectedText}
            userColor={userColor}
            yDoc={yDoc}
          />
          {showAIChangesDiv && AIChanges && (
            <Card
              style={{
                position: "absolute",
                left: "100px",
                top: "100px",
                border: "1px solid grey",
                borderRadius: "25px",
              }}
            >
              <div
                style={{
                  width: "40vw",
                  padding: "1.5vw",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    marginBottom: "1vw",
                    fontSize: "1.1rem",
                  }}
                >
                  Changes made by the AI according to selected Comments
                </p>
                <p style={{ marginBottom: "1vw" }}>{AIChanges.summary}</p>
                <div style={{ display: "flex", marginBottom: "1vw" }}>
                  <input
                    checked={isChecked}
                    type="checkbox"
                    onChange={handleCheckboxOnChange}
                  />
                  <p style={{ marginLeft: "0.5vw" }}>
                    Delete selected comment(s)
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <Button
                    color="success"
                    style={{
                      color: "white",
                      paddingLeft: "1vw",
                      paddingRight: "1vw",
                    }}
                    onClick={handleAcceptOnClick}
                  >
                    Accept changes
                  </Button>
                  <Button className="ml-5" onClick={handleDiscardOnClick}>
                    Discard
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </Card>

        <Card className="w-1/5 p-4 overflow-y-auto">
          <CardContainer
            key={currentRoom}
            completeText={completeText}
            currentRoom={currentRoom}
            editor={editor}
            range={range}
            selectedModel={selectedModel}
            selectedText={selectedText}
            setPrompts={setPrompts}
            yDoc={yDoc}
            yProvider={provider}
          />
        </Card>
      </div>
    </>
  );
}
