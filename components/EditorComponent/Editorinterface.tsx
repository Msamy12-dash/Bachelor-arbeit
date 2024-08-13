import React, { useState, useMemo, useEffect, ChangeEvent } from "react";
import dynamic from "next/dynamic";
import Quill from "react-quill";
import CommentHandler from "../ChatComponent/CommentHandler";
import { Card, Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ResizableBox  } from "react-resizable";
import "react-resizable/css/styles.css";
import CardContainer from "../MUPComponents/CardContainer";
import YPartyKitProvider from "y-partykit/provider";
import * as Y from "yjs";
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Role,User } from "@/party/types"



interface Range {
  index: number;
  length: number;
}

interface MCP_AI_responses {
  summary: string;
  changes: string;
}
const usedColors = new Set<string>();
function getUniqueColor() {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "cyan", "magenta", "lime", "indigo", "teal"];

  let color = colors[Math.floor(Math.random() * colors.length)];

  // Ensure the color is unique
  while (usedColors.has(color)) {
    color = colors[Math.floor(Math.random() * colors.length)];
  }
  console.log(`Assigning color: ${color}`); // Debug logging
  usedColors.add(color);
  return color;
}

export default function EditorPage({
  currentRoom,
  yDoc,
  yProvider,
  selectedModel,
  user,
}: {
  currentRoom: string;
  yDoc: Y.Doc;
  yProvider: YPartyKitProvider;
  selectedModel: string;
  user: User | null;
}) {
  const [prompts, setPrompts] = useState<string[]>([]);
  const userColor = useMemo(() => getUniqueColor(), []);
  const Editor = useMemo(() => {
    return dynamic(() => import("@/components/EditorComponent/Editor"), {
      loading: () => <p>Loading...</p>,
      ssr: false,
    });
  }, []);

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
  const [isLeftCardVisible, setIsLeftCardVisible] = useState(true);
  const [isRightCardVisible, setIsRightCardVisible] = useState(true);



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
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        {/* Possible other components go here */}
      </div>
      <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        {isLeftCardVisible && (
          <ResizableBox
            width={400}
            height={Infinity}
            minConstraints={[330, Infinity]}
            maxConstraints={[530, Infinity]}
            axis="x"
            resizeHandles={['e']}
          >
            <Card style={{ height: "100%", padding: "10px", boxSizing: "border-box" }}>
            <CommentHandler
                  editor={editor}
                  room={currentRoom}
                  setRange={handleSetRange}
                  setAIChanges={setAIChanges}
                  selectedText={selectedText}
                  selectedRange={selectedRange}
                  deleteSelectedComments={deleteSelectedComments}
                  setDeleteSelectedComments={setDeleteSelectedComments}
                  promptList={prompts}
                  yDoc={yDoc}
                  yProvider={yProvider}
                  highlightText={editor?.highlightText}
                  removeHighlight={editor?.removeHighlight}
                  user={user}
                  selectedModel={selectedModel}
                />

            </Card>
          </ResizableBox>
        )}
        <IconButton
          onClick={() => setIsLeftCardVisible(!isLeftCardVisible)}
          className="m-2 p-2 bg-gray-200 rounded"
          size="small"
        >
          {isLeftCardVisible ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </IconButton>
        <Card
          style={{
            flex: 1,
            padding: "20px",
            height: "100%",
            boxSizing: "border-box",
            margin: isLeftCardVisible || isRightCardVisible ? "0 10px" : "0",
          }}
        >

          <Editor
            key={currentRoom}
            currentRoom={currentRoom}
            yDoc={yDoc}
            yProvider={yProvider}
            userColor={userColor}
            setEditor={setEditor}
            selectedText={selectedText}
            setSelectedText={setSelectedText}
            setCompleteText={setCompleteText}
            selectedRange={selectedRange}
            setSelectedRange={setSelectedRange}
            setRange={setRange}
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
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxOnChange}
                  />
                  <p style={{ marginLeft: "0.5vw" }}>
                    Delete selected comment(s)
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <Button
                    style={{
                      color: "white",
                      paddingLeft: "1vw",
                      paddingRight: "1vw",
                    }}
                    color="success"
                    onClick={handleAcceptOnClick}
                  >
                    Accept changes
                  </Button>
                  <Button onClick={handleDiscardOnClick} className="ml-5">
                    Discard
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </Card>
        <IconButton
          onClick={() => setIsRightCardVisible(!isRightCardVisible)}
          className="m-2 p-2 bg-gray-200 rounded"
          size="small"
        >
          {isRightCardVisible ? <ArrowRightIcon /> : <ArrowLeftIcon />}
        </IconButton>
        {isRightCardVisible && (
          <ResizableBox
            width={350}
            height={Infinity}
            minConstraints={[350, Infinity]}
            maxConstraints={[400, Infinity]}
            axis="x"
            resizeHandles={['w']}
          >
          <Card style={{ height: "100%", padding: "10px", boxSizing: "border-box" }}>
            <div>
            <Card >
              <CardContainer
                key={currentRoom}
                currentRoom={currentRoom}
                yDoc={yDoc}
                yProvider={yProvider}
                selectedText={selectedText}
                completeText={completeText}
                editor={editor}
                setPrompts={setPrompts}
                selectedModel={selectedModel}
                range={range}
              />
            </Card>
            </div>
          </Card>
        </ResizableBox>
        )}
      </div>
    </>

  );
}
