import React, { useState, useEffect } from "react";
import { Avatar, Button, Card, CardBody, CardHeader, useDisclosure } from "@nextui-org/react";
import * as Y from "yjs";
import YPartyKitProvider from "y-partykit/provider";
import Draggable from 'react-draggable';
import { IconButton } from "@mui/material";
import usePartySocket from "partysocket/react";

import {
  getCurrentId, deleteCurrentRelRange, saveNewTextForCurrentRange,
  unlockRange,
  clearAllRelRanges, getPollTitle
} from "../VoteComponent/TextBlocking";
import { sendvote } from "../VoteComponent/VoteClientFunctions";

import CustomMenu from "./AIInteractionComponent";

import { PARTYKIT_HOST } from "@/pages/env";
import { generateOpenAIShortCommand,tieBreakerAI } from "../VoteComponent/AIVotingFunctions";
import { boolean } from "zod";

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

  const contribSocket = usePartySocket({
    host: PARTYKIT_HOST,
    room: provider.roomname,
    party: "aicontr",
    onMessage(evt) {
    },
  });
  const onMessage = (event: MessageEvent) => {
    let data;

    //console.log()
    try {
      data = JSON.parse(event.data);
      console.log(JSON.stringify(data))
      let saveContribution = data.user == provider.awareness.getLocalState()?.user.name;

      if(data.update=="delete vote"){
        console.log("Received data:", JSON.stringify(data, null, 2));
        if (data.isTied){
          console.log("its a tie")
          const makeChange =   tieBreakerAI(doc, data.block_id);
          unlockRange(doc,data.block_id,makeChange,quill,provider,contribSocket,saveContribution);
        }
        unlockRange(doc,data.block_id,data.makechanges,quill,provider,contribSocket,saveContribution)}
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
  };

  const handleCancelClick = () => {
    clearAllRelRanges(doc,quill);
    //deleteCurrentRelRange( doc, provider,quill);
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
    const pollTitle = getPollTitle(doc,rangeId);

    console.log("blocked id = "+rangeId)
    const examplePoll = {
      makeChage:false,
      Room_id :randomId,
      title:pollTitle || "unnamed poll",
      options: pollOptions,
      votes: [0, 0],
      bolck_id : rangeId,
      user: provider.awareness.getLocalState()?.user.name || "unknown",
    };


    sendvote(randomId, examplePoll);
    setVotingInProgress(true);
    setInputDisabled(true);
    setSuggestButtonDisabled(true);

    onCancel();
    setIsSnackbarOpen(true); // Show Snackbar on vote click
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleGenerateText = async (type: 'clarity' | 'tone' | 'rephrase' | 'complexity-up' | 'complexity-down') => {
    const aiGeneratedText = await generateOpenAIShortCommand(text, type);
    setInputText(aiGeneratedText);
  };

  const handleClearText = () => {
    setInputText('');
  };

  if (!show) {
    return null;
  }

  return (
    <Draggable handle=".drag-handle" cancel=".no-drag" >
      <div
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          maxWidth: `${position.maxWidth}px`,
          zIndex: 1000
        }}
      >
        <Card>
          <CardHeader className="flex gap-3 drag-handle cursor-move">
            <div className="flex flex-col">
              <p className="text-md">Voting</p>
              <Avatar name="user" />
            </div>

          </CardHeader>
          <CardBody>
            <div className="mb-4 relative">
              {!inputDisabled && (
                <IconButton
                  size="small"
                  style={{ position: 'absolute', top: '-10px', right: '10px' }}
                  onClick={() => setInputText('')}
                >
                <span className="text-sm text-blue-500 cursor-pointer">
                clear all
              </span>
                </IconButton>
              )}
              <textarea
                className="max-w-full p-2 border border-gray-300 rounded-md no-drag"
                value={inputText}
                disabled={inputDisabled}
                placeholder="Enter your text"
                style={{ width: '100%', height: '100px', resize: 'vertical', overflow: 'auto', wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: 'pre-wrap', }}
                onChange={e => setInputText(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <CustomMenu disabled={suggestButtonDisabled} onGenerateText={handleGenerateText} />
              <Button
                className={!inputDisabled ? "bg-gray-300" : ""}
                color="primary"
                disabled={!inputDisabled}
                onPress={handleEditClick}
              >
                Edit
              </Button>
              <Button
                className={inputDisabled ? "bg-gray-300" : ""}
                color="success"
                isDisabled={inputDisabled}

                onPress={handleVoteClick}
              >
                Vote
              </Button>
              <Button color="danger" onPress={handleCancelClick}>Cancel</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </Draggable>
  );
};

export default Tooltip;