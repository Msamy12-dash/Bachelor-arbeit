"use client";

import usePartySocket from "partysocket/react";
import { useEffect, useState } from "react";
import PollOptions from "./VoteOptions";
import React from "react";
import { Poll, SINGLETON_ROOM_ID } from "party/types";




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
    party: "rooms",
    room: SINGLETON_ROOM_ID,
    onMessage(event) {
      const message = JSON.parse(event.data) as Poll;
      if (message.votes) {
        setVotes(message.votes);
      }
    },
  });

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
      votes={votes}
      vote={vote}
      setVote={sendVote}
    />
  );
}
