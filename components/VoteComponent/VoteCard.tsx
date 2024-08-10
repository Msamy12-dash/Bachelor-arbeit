import React, { useEffect, useState } from "react";

import PollUI from "./VoteComponent";

import { PARTYKIT_URL } from "@/pages/env";
import { Poll } from "@/party/src/types";

const VoteCard: React.FC<{ pollId: string }> = ({ pollId }) => {
  const [poll, setPoll] = useState<Poll | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const req = await fetch(`${PARTYKIT_URL}/parties/vote/${pollId}`, {
          method: "GET",
          next: {
            revalidate: 0,
          },
        });

        if (!req.ok) {
          if (req.status === 404) {
            setError("Poll not found");
          } else {
            throw new Error("Something went wrong.");
          }
        } else {
          const pollData = (await req.json()) as Poll;

          console.log(pollData)

          setPoll(pollData);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPoll();
  }, [pollId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col space-y-4">
      {poll && <PollUI id={pollId} initialVotes={poll.votes} options={poll.options} />}
    </div>
  );
};

export default VoteCard;
