"use client";

import { useState } from "react";
import usePartySocket from "partysocket/react";

import { PARTYKIT_HOST } from "@/pages/env";

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
  // use server-rendered initial data
  const [reactions, setReactions] = useState(props.initialData);
  // state to track if user has reacted
  const [hasReacted, setHasReacted] = useState(false);

  // update state when new reactions come in    

  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    room: props.roomId,
    party: "likeserver",
    onMessage: (event) => {
      console.log(event.data);
      const message = JSON.parse(event.data);

      setReactions(message.reactions);
    },
  });

  // handle reaction click
  const handleReaction = (kind: (typeof reactionTypes)[number]) => {
    if (!hasReacted) {
      socket.send(JSON.stringify({ type: "reaction", kind }));
      setHasReacted(true);
    }
  };

  // render buttons with reaction counts
  return (
    <div className="flex">
      {reactionTypes.map((kind) => (
        <button
          key={kind}
          className={`m-2 p-2 border border-white flex space-x-2 hover:bg-gray-800 ${hasReacted ? "cursor-not-allowed opacity-50" : ""}`}
          disabled={hasReacted}
          onClick={() => handleReaction(kind)}
        >
          <span>{reactionEmoji[kind]}</span>
          <span>{reactions[kind] ?? 0}</span>
        </button>
      ))}
    </div>
  );
};
