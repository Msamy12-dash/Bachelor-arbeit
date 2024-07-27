import React, { useState, useEffect } from "react";
import { Avatar, Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import * as Y from "yjs";

import { saveRangeWithText, updateVoteRangeText, deleteRangeFromYArray } from "../VoteComponent/TextBlocking";
import { sendvote } from "../VoteComponent/VoteClientFunctions";

import CustomMenu from "./AIInteractionComponent";

interface TooltipProps {
  show: boolean;
  text: string;
  position: { x: number; y: number; maxWidth: number };
  onSaveRange: () => void;
  onCancel: () => void;
  quill: any;
  doc: Y.Doc;
}

const Tooltip: React.FC<TooltipProps> = ({ show, text, position, onSaveRange, onCancel, quill, doc }) => {
  const [inputDisabled, setInputDisabled] = useState(true);
  const [suggestButtonDisabled, setSuggestButtonDisabled] = useState(true);
  const [votingInProgress, setVotingInProgress] = useState(false);
  const [inputText, setInputText] = useState('');
  const [voteID, setVoteID] = useState(0); // State to track the ID

  useEffect(() => {
    // Update input text with selected text when the component mounts or text changes
    setInputText(text);
  }, [text]);

  const handleEditClick = () => {
    onSaveRange();
    setInputDisabled(false);
    setSuggestButtonDisabled(false);
    saveRangeWithText(quill, doc);
  };

  const handleCancelClick = () => {
    setInputDisabled(true);
    onCancel();
  };

  const handleVoteClick = () => {
    const selectedText = text;
    const modifiedText = inputText;
    const pollOptions = [selectedText, modifiedText];

    const examplePoll = {
      title: "Vote on the Text",
      options: pollOptions,
      votes: [0, 0]
    };

    sendvote(voteID.toString(), examplePoll); // Convert ID to string
    setVoteID(voteID + 1); // Increment the ID
    setVotingInProgress(true);
    setInputDisabled(true);
    setSuggestButtonDisabled(true);

    updateVoteRangeText(doc, selectedText, modifiedText);
  };

  const handleEndVoteClick = () => {
    console.log("HandleEndVoteClick")
    setVotingInProgress(false);
    deleteRangeFromYArray(doc, inputText, quill);
    onCancel();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleInsertTrialText = () => {
    setInputText("The origins of football in England can be traced back to as early as the eighth century.");
  };

  if (!show) {
    return null;
  }

  return (
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
            <Input
              className="max-w-full"
              defaultValue={text}
              disabled={inputDisabled}
              label=""
              placeholder="Enter your text"
              type="text"
              value={inputText || text}
              variant="bordered"
              onChange={handleInputChange}
            />
          </div>
          {votingInProgress && (
            <div className="mb-4 text-red-500">
              Voting in progress
            </div>
          )}
          <div className="flex flex-wrap gap-4 items-center">
            <CustomMenu disabled={suggestButtonDisabled} onInsertTrialText={handleInsertTrialText} onSaveRange={onSaveRange} />
            <Button
              className={!inputDisabled ? "bg-gray-300" : ""}
              color="primary"
              disabled={!inputDisabled}
              onClick={handleEditClick}
            >
              Edit
            </Button>
            {votingInProgress ? (
              <Button color="success" onClick={handleEndVoteClick}>
                End Vote
              </Button>
            ) : (
              <Button color="success" onClick={handleVoteClick}>
                Vote
              </Button>
            )}
            <Button color="danger" onClick={handleCancelClick}>Cancel</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Tooltip;
