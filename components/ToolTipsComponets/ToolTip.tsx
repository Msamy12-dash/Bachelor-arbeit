import React, {useState} from "react";
import { Avatar, Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";

import CustomMenu from "./AIInteractionComponent";
import PollUI from "../VoteComponent/VoteComponent";
import { saveRangeWithText, updateVoteRangeText, deleteRangeFromYArray } from "../VoteComponent/ReadOnly";
import {sendvote} from "../VoteComponent/VoteClientFunctions";
import ReactQuill from "react-quill";
import * as Y from "yjs";
import {Poll} from "@/party/types";



interface TooltipProps {
  show: boolean;
  text: string;
  position: { x: number; y: number; maxWidth: number };
    onSaveRange: () => void;
    onCancel: () => void;
    quill: any;
    doc: Y.Doc;
}

const Tooltip: React.FC<TooltipProps> = ({ show, text, position,onSaveRange, onCancel, quill, doc }) => {

    const [inputDisabled, setInputDisabled] = useState(true);
    const [suggestButtonDisabled, setSuggestButtonDisabled] = useState(true);
    const [votingInProgress, setVotingInProgress] = useState(false);
    const [inputText, setInputText] = useState('');

    const pollId = '1';
    const pollOptions = ['Option 1', 'Option 2', 'Option 3'];
    const initialVotes = [0, 0, 0];

    const examplePoll: Poll = {
        title: "vote",
        options: pollOptions,
        votes: [10, 20, 5]
    };

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
        sendvote(examplePoll);
        setVotingInProgress(true);
        setInputDisabled(true);
        setSuggestButtonDisabled(true);
        const range = quill.current?.getEditor().getSelection();
        console.log('text: ' + text + '  new text: '+ inputText)
        if (text) {
            updateVoteRangeText(doc,text, inputText);
        }
    };

    const handleEndVoteClick = () => {
        setVotingInProgress(false);

        // Delete the range from rangesArray and update the editor text
        deleteRangeFromYArray(doc, inputText,quill);
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
        widows:"100px",
        maxWidth: `${position.maxWidth}px`, // Apply maximum width

      }}
    >
      <Card>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md"></p>
            <Avatar name="user" />

          </div>
        </CardHeader>
        <CardBody >
            <div className="mb-4">
            {inputDisabled ? (
                <Input
                    type="text"
                    label=''
                    variant="bordered"
                    placeholder="Enter your text"
                    defaultValue={inputText || text}
                    value={inputText || text}
                    disabled={inputDisabled}
                    className="max-w-full"
                    onChange={handleInputChange}

                />
            ) : (
                <Input
                    isClearable
                    type="text"
                    label="Edit text here"
                    variant="bordered"
                    placeholder="Enter your text"
                    defaultValue={inputText || text}
                    value={inputText || text}
                    className="max-w-full scroll-auto"
                    onChange={handleInputChange}

                />
            )}
            </div>
        {/*<PollUI id={"1"} options={[text]} />*/}
            {votingInProgress && (
                <div className="mb-4 text-red-500">
                    Voting in progress
                </div>
            )}
          <div className="flex flex-wrap gap-4 items-center">
            <CustomMenu onSaveRange={onSaveRange} onInsertTrialText={handleInsertTrialText} disabled={suggestButtonDisabled} />
              <Button
                  color="primary"
                  onClick={handleEditClick}
                  disabled={!inputDisabled}
                  className={!inputDisabled ? "bg-gray-300" : ""}
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
              <Button color="success" onClick={() => sendvote(examplePoll)}>vote</Button>
            <Button color="danger" onClick={ handleCancelClick} >Cancel</Button>

          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Tooltip;
