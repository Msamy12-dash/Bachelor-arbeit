"use client";

import { useState } from "react";
import usePartySocket from "partysocket/react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { PARTYKIT_HOST } from "@/env";
import { IconButton } from "@mui/material";

const reactionTypes = ["thumbsup", "heart"] as const;
const reactionEmoji = {
  thumbsup: "👍",
  heart: "❤️",
};

type ReactionsProps = {
  initialData: Record<string, number>;
  roomHost: string;
  roomId: string;
};

export const Reactions = (props: ReactionsProps) => {
  const [reactions, setReactions] = useState(props.initialData);
  const [hasReacted, setHasReacted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    room: props.roomId,
    party: "likeserver",
    onMessage: (event) => {
      //console.log(event.data);
      const message = JSON.parse(event.data);
      setReactions(message.reactions);
    },
  });

  const handleReaction = (kind: (typeof reactionTypes)[number]) => {
    if (!hasReacted) {
      socket.send(JSON.stringify({ type: "reaction", kind }));
      setHasReacted(true);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative"
    >
      <IconButton disabled={hasReacted}>
        <ThumbUpIcon />
      </IconButton>
      
      {isHovering && (
        <div className="flex absolute">
          {reactionTypes.map((kind) => (
            <button
              key={kind}
              className={`m-2 p-2 border border-white flex space-x-2 hover:bg-gray-800 ${hasReacted ? "cursor-not-allowed opacity-50" : ""}`}
              onClick={() => handleReaction(kind)}
              disabled={hasReacted}
            >
              <span className="text-sm">{reactionEmoji[kind]}</span>
              <span className="text-sm">{reactions[kind] ?? 0}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
