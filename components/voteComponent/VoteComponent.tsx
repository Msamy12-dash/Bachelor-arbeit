import { useEffect, useState } from "react";
import usePartySocket from "partysocket/react";

import PollOptions from "./VoteOptions";

import { Poll } from "@/party/types";
import { PARTYKIT_HOST } from "@/pages/env";

// Custom hook to create and handle WebSocket connection
function useSocketConnection(onMessage: (event: MessageEvent) => void) {
  return usePartySocket({
    host: PARTYKIT_HOST,
    room: "1",
    party: "vote",
    onMessage,
  });
}

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

  const onMessage = (event: MessageEvent) => {
    const data = event.data;

    if (data != "vote now") {
   
      const pollData = JSON.parse(data) as Poll;

      if (pollData.votes) {
        setVotes(pollData.votes);
        // Optionally, you can also clear messages here if needed
      }
    }
  };

  const socket = useSocketConnection(onMessage);

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

  return (
    <>
    
      <PollOptions
        options={options}
        setVote={sendVote}
        vote={vote}
        votes={votes}
      />
    </>
  );
}
