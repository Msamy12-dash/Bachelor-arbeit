/* eslint-disable prettier/prettier */
"use client";

import usePartySocket from "partysocket/react";
import { useEffect, useState } from "react";

import PollOptions from "./VoteOptions";

import { Poll } from "@/party/types";



export default function PollUI({
  id,
  options,
  initialVotes,
}: {
  id: string;
  options: string[];
  initialVotes?: number[];
}) {
  const [votes, setVotes] = useState<number[]>(initialVotes ?? []);
  const [vote, setVote] = useState<number | null>(null);

  const socket = usePartySocket({
    room: "1",
    debug : true,
    onMessage(event) {
      const message = JSON.parse(event.data) as Poll;

      if (message.votes) {
        setVotes(message.votes);
      }
    },
  });

  socket.send(JSON.stringify({ type: "vote", options }));
  
  const sendVote = (option: number) => {
    if (vote === null) {
      socket.send(JSON.stringify({ type: "vote", option }));
      setVote(option);
    }
  };


  // prevent double voting
  useEffect(() => {
    let saved = localStorage?.getItem("poll:" + id);

    if (vote === null && saved !== null) {
      setVote(+saved);
    } else if (vote !== null && saved === null) {
      localStorage?.setItem("poll:" + id, `${vote}`);
    }
  }, [id, vote]);

  return (
    <PollOptions
      options={options}
      setVote={sendVote}
      vote={vote}
      votes={votes}
    />
  );
}
