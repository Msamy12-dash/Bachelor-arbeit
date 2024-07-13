/* eslint-disable prettier/prettier */
"use client";

import { useEffect, useState } from "react";
import usePartySocket from "partysocket/react";


import PollOptions from "./VoteOptions";

import { Poll } from "@/party/types";
import { PARTYKIT_HOST } from "@/pages/env";

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
    host: PARTYKIT_HOST,
    room: "1",
    party:"vote",
    onMessage(event) {
      const message = JSON.parse(event.data) as Poll;

      if (message.votes) {
        setVotes(message.votes);
      }
    },
  });
  const pollId = '1';
  const pollOptions = ['Option 1', 'Option 2', 'Option 3'];
  const examplePoll: Poll = {
    title: "vote",
    options: pollOptions,
    votes: [0, 0, 0]
  };



  const sendVote = (optionIndex: number) => {
    if (vote === null) {
      socket.send(JSON.stringify({ type: "vote", option: optionIndex }));
      setVote(optionIndex);
      localStorage.setItem("poll:" + id, optionIndex.toString());
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("poll:" + id);

    if (saved) {
      setVote(parseInt(saved, 10));
    }
  }, [id]);
  console.log(sendVote)
  return (
    <PollOptions
      options={options}
      setVote={sendVote}
      vote={vote}
      votes={votes}
    />
  );
}
