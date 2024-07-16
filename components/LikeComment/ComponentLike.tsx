/* eslint-disable prettier/prettier */
"use client";

import { useState } from "react";
import usePartySocket from "partysocket/react";
import { Console } from "console";


const reactionTypes = ["thumbsup", "heart"] as const;
const reactionEmoji = {
  heart: "❤️",
  thumbsup: "👍",
};

type ReactionsProps = {
  initialData: Record<string, number>;
  roomHost: string;
  roomId: string;
};

export const Reactions = (props: ReactionsProps) => {
  // use server-rendered initial data
  const [reactions, setReactions] = useState(props.initialData);
  // update state when new reactions come in
  const socket = usePartySocket({

    party:"reactionserver",
    room:props.roomId,
    onMessage: (event) => {
      const message = JSON.parse(event.data);

      setReactions(message.reactions);
    },
  });
  console.log(props)

  // render buttons with reaction counts
  return (
    <div className="flex">
      {reactionTypes.map((kind) => (
        <button
          key={kind}
          className="m-2 p-2 border border-white flex space-x-2 hover:bg-gray-800"
          onClick={() => {
            socket.send(JSON.stringify({ type: "reaction", kind }));
          }}
        >
          <span>{reactionEmoji[kind]}</span>
          <span>{reactions[kind] ?? 0}</span>
        </button>
      ))}
    </div>
  );
};