/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
// components/Tooltip.tsx
import React from "react";
import { Avatar, Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";

import CustomMenu from "./AIInteractionComponent";
import PollUI from "../voteComponent/VoteComponent";

interface TooltipProps {
  show: boolean;
  text: string;
  position: { x: number; y: number; maxWidth: number };
}

const Tooltip: React.FC<TooltipProps> = ({ show, text, position }) => {
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
        <PollUI id={"1"} options={[text]} />
          <p>Selected text: {text}</p>
          <div className="flex flex-wrap gap-4 items-center">
            <CustomMenu  />
            <Button color="success">vote</Button>
            <Button color="danger">Cancel</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Tooltip;
