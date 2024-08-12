import React, { useState, useEffect } from "react";
import { Avatar, Button, Card, CardBody, CardHeader, useDisclosure } from "@nextui-org/react";
import * as Y from "yjs";
import YPartyKitProvider from "y-partykit/provider";
import Draggable from 'react-draggable';
import { IconButton } from "@mui/material";
import usePartySocket from "partysocket/react";

import {
  saveRangeWithText,
  updateVoteRangeText,
  deleteRangeFromYArray,
  getCurrentId, deleteCurrentRelRange, saveNewTextForCurrentRange,
  unlockRange
} from "../VoteComponent/TextBlocking";
import { sendvote } from "../VoteComponent/VoteClientFunctions";

import CustomMenu from "./AIInteractionComponent";

import { PARTYKIT_HOST } from "@/pages/env";

function useSocketConnection(ID: string, onMessage: (event: MessageEvent) => void) {
  return usePartySocket({
    host: PARTYKIT_HOST,
    room: "active-connections",
    party: "notificationserver",
    onMessage,
  });
}
interface Range {
  index: number;
  length: number;
}
interface TooltipProps {
  show: boolean;
  text: string;
  position: { x: number; y: number; maxWidth: number };
  onsaveRelRange: () => void;
  onCancel: () => void;
  quill: any;
  doc: Y.Doc;
  provider:YPartyKitProvider;
}

const Tooltip: React.FC<TooltipProps> = ({ show, text, position, onsaveRelRange, onCancel, quill, doc,provider }) => {
  const [connectionKeys, setConnectionKeys] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newNotification, setNewNotification] = useState(false); // New state to track notification status

  const onMessage = (event: MessageEvent) => {
    let data;

    //console.log()
    try {
      data = JSON.parse(event.data);
      console.log(JSON.stringify(data))
      
if(data.update=="delete vote"){
  unlockRange(doc,data.block_id,true,quill)}
    } catch (error) {
      console.error("Failed to parse message:", error);
      //console.log("Received message:", event.data);

      return;
    }
    console.log("data.connectionKeys")
    if (data.connectionKeys && JSON.stringify(data.connectionKeys) !== JSON.stringify(connectionKeys)) {
      console.log(data.connectionKeys)
      setConnectionKeys(data.connectionKeys);
      setNewNotification(true);
    }
    
    
  };

  useSocketConnection("0", onMessage);

  useEffect(() => {
    const saved = localStorage.getItem("connectionKeys") || "[]";

    setConnectionKeys(JSON.parse(saved));
  }, []);
  useSocketConnection("0", onMessage);

  useEffect(() => {
    localStorage.setItem("connectionKeys", JSON.stringify(connectionKeys));
  }, [connectionKeys]);




  const [inputDisabled, setInputDisabled] = useState(true);
  const [suggestButtonDisabled, setSuggestButtonDisabled] = useState(true);
  const [, setVotingInProgress] = useState(false);
  const [inputText, setInputText] = useState('');

  const [, setIsSnackbarOpen] = useState(false);

const User ={
  username : "user ",
  id :1}

  useEffect(() => {
    setInputText(text);
  }, [text]);

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const handleEditClick = () => {
    //saveRORange(quill,doc,range);
    setInputDisabled(false);
    setSuggestButtonDisabled(false);
    saveRangeWithText(quill, doc);
  };

  const handleCancelClick = () => {
    //deleteAll(quill, doc);
    //deleteCurrent(quill, doc, provider);
    deleteCurrentRelRange( doc, provider,quill);
    setInputDisabled(true);
    setSuggestButtonDisabled(true);
    onCancel();
  };

  const handleVoteClick = () => {
    const selectedText = text;
    const modifiedText = inputText;
    const pollOptions = [selectedText, modifiedText];
    const randomId = generateRandomId();

    saveNewTextForCurrentRange(doc, provider, modifiedText);

    const rangeId = getCurrentId(doc,provider);

    console.log("blocked id = "+rangeId)
    const examplePoll = {
      makeChage:false,
      Room_id :randomId,
      title:"a",
      id: "Vote on the Text",
      options: pollOptions,
      votes: [0, 0],
      bolck_id : rangeId,
      user: User
    };


    sendvote(randomId, examplePoll);
    setVotingInProgress(true);
    setInputDisabled(true);
    setSuggestButtonDisabled(true);

    updateVoteRangeText(doc, selectedText, modifiedText);

    onCancel();
    setIsSnackbarOpen(true); // Show Snackbar on vote click
  };

  const handleEndVoteClick = () => {
    setVotingInProgress(false);
    deleteRangeFromYArray(doc, inputText, quill);
    onCancel();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleInsertTrialText = () => {
    setInputText("The origins of football in England can be traced back to as early as the eighth century.");
  };

  const handleClearText = () => {
    setInputText('');
  };

  if (!show) {
    return null;
  }

  return (
    <Draggable >
      <div
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        maxWidth: `${position.maxWidth}px`,
      }}
    >
      <Card>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">Voting</p>
            <Avatar name="user" />
          </div>

        </CardHeader>
        <CardBody>
          <div className="mb-4">
            {!inputDisabled && (
              <IconButton
                size="small"
                style={{ position: 'absolute', top: '-10px', right: '10px' }}
                onClick={handleClearText}
              >
                {/*<CloseIcon fontSize="small" />*/}
                <span className="text-sm text-blue-500 cursor-pointer">
                clear all
              </span>
              </IconButton>
            )}
              <textarea
                className="max-w-full p-2 border border-gray-300 rounded-md"
                defaultValue={text}
                disabled={inputDisabled}
                placeholder="Enter your text"
                style={{ width: '100%', height: '100px', resize: 'vertical', overflow: 'auto' }}
                value={inputText}
                onChange={handleInputChange}
              />
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <CustomMenu disabled={suggestButtonDisabled} onInsertTrialText={handleInsertTrialText} onSaveRange={onsaveRelRange} />
            <Button
              className={!inputDisabled ? "bg-gray-300" : ""}
              color="primary"
              disabled={!inputDisabled}
              onClick={handleEditClick}
            >
              Edit
            </Button>
              <Button
                className={inputDisabled ? "bg-gray-300" : ""}
                color="success"
                disabled={inputDisabled}
                onClick={handleVoteClick}
              >
                Vote
              </Button>
            <Button color="danger" onClick={handleCancelClick}>Cancel</Button>
          </div>
        </CardBody>
      </Card>
      </div>
    </Draggable>
  );
};

export default Tooltip;
