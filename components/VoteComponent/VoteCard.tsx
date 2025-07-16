import React, { useEffect, useState } from "react";
import PollUI from "../voteComponent/VoteComponent";
import { PARTYKIT_URL } from "@/env";

type Poll = {
  id: string;
  options: string[];
  title: string;
  votes: number[];
  user?: {
    id: number;
    username?: string;
  };
  room_id: string;
};

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

          setPoll(pollData);
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPoll();
  }, [pollId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Check if poll data is not available or incomplete
  if (!poll || !poll.options || !poll.title || !poll.user) {
    return <div>Poll data is not available or incomplete.</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      {poll && (
        <PollUI 
          id={pollId} 
          initialVotes={poll.votes} 
          options={poll.options} 
          roomId={poll.room_id} 
          title={poll.title} 
          username={poll.user.username || "Anonymous"} // Provide a fallback if username is not available
        />
      )}
    </div>
  );
};

export default VoteCard;
