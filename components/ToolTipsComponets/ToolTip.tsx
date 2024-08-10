import React, { useState, useEffect } from "react";
import { Avatar, Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import Snackbar from "@mui/material/Snackbar";
import * as Y from "yjs";
import YPartyKitProvider from "y-partykit/provider";

import {
  saveRangeWithText,
  updateVoteRangeText,
  deleteRangeFromYArray,
  deleteAll,
  saveRORange,
  deleteCurrent,
  getCurrentId, saveRelRange, deleteCurrentRelRange, saveNewTextForCurrentRange
} from "../VoteComponent/TextBlocking";
import { sendvote } from "../VoteComponent/VoteClientFunctions";
import Draggable from 'react-draggable';

import CloseIcon from '@mui/icons-material/Close';

import CustomMenu from "./AIInteractionComponent";
import { IconButton } from "@mui/material";

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
  const [inputDisabled, setInputDisabled] = useState(true);
  const [suggestButtonDisabled, setSuggestButtonDisabled] = useState(true);
  const [votingInProgress, setVotingInProgress] = useState(false);
  const [inputText, setInputText] = useState('');
  const [voteID, setVoteID] = useState(0); // State to track the ID
  const [currentRangeID, setCurrentRangeID] = useState(0);

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

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

    const examplePoll = {
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
                onClick={handleClearText}
                style={{ position: 'absolute', top: '-10px', right: '10px' }}
              >
                {/*<CloseIcon fontSize="small" />*/}
                <span className="text-sm text-blue-500 cursor-pointer">
                clear all
              </span>
              </IconButton>
            )}
              <textarea
                className="max-w-full p-2 border border-gray-300 rounded-md"
                style={{ width: '100%', height: '100px', resize: 'vertical', overflow: 'auto' }}
                defaultValue={text}
                disabled={inputDisabled}
                placeholder="Enter your text"
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
                onClick={handleVoteClick}
                disabled={inputDisabled}
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
