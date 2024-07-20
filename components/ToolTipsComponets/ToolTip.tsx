import React from "react";
import { Avatar, Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";

import {sendvote} from "../voteComponent/VoteClientFunctions"

import CustomMenu from "./AIInteractionComponent";

import { Poll } from "@/party/types";

interface TooltipProps {
  show: boolean;
  text: string;
  position: { x: number; y: number; maxWidth: number };
}

const Tooltip: React.FC<TooltipProps> = ({ show, text, position }) => {
  if (!show) {
    return null;
  }
  const pollId = '1';
  const pollOptions = ['Option 1', 'Option 2', 'Option 3'];
  const initialVotes = [0, 0, 0];
  const examplePoll: Poll = {
    title: "vote",
    options: pollOptions,
    votes: [10, 20, 5]
  };

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
            <p className="text-md">Options</p>
            <Avatar name="user" />

          </div>
        </CardHeader>
        <CardBody >
        <Input
      isRequired
      className="max-w-xs"
      label="new changes"
    />
          <p>Selected text: {text}</p>
          <div className="flex flex-wrap gap-4 items-center">
            <CustomMenu  />
            <Button color="success" onClick={() => sendvote(examplePoll)}>vote</Button>
            <Button color="danger">Cancel</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Tooltip;
