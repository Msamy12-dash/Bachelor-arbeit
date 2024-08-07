import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Snackbar from "@mui/material/Snackbar";
import usePartySocket from "partysocket/react";

import PollOptions from "../voteComponent/VoteOptions";

import { Poll } from "@/party/src/types";
import { PARTYKIT_HOST } from "@/pages/env";

 function useSocketConnection(ID: string, onMessage: (event: MessageEvent) => void) {
  return usePartySocket({
    host: PARTYKIT_HOST,
    room: ID,
    party: "vote",
    onMessage,
  });
}

// Custom hook to create and handle WebSocket connection


const PollUI: React.FC<{ id: string; options: string[]; initialVotes?: number[] }> = ({ id, options, initialVotes }) => {
  const [votes, setVotes] = useState<number[]>(initialVotes ?? []);
  const [vote, setVote] = useState<number | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const onMessage = (event: MessageEvent) => {
    const data = event.data;
      console.log("PollUI")
    if (data === "vote now") {
      setIsSnackbarOpen(true);  // Ensure to open the snackbar when a message is received
      setTimeout(() => setIsSnackbarOpen(false), 3000); // Auto close snackbar after 3 seconds
    } else {
      const pollData = JSON.parse(data) as Poll;

      if (pollData.votes) {
        setVotes(pollData.votes);
      }
    }
  };

  const socket = useSocketConnection(id,onMessage);

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
      <button className="btn btn-primary" onClick={onOpen}>Open Poll</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Poll</ModalHeader>
          <ModalBody>
            <PollOptions options={options} setVote={sendVote} vote={vote} votes={votes} />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onPress={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
        message="New notification received!"
        open={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
      />
    </>
  );
};

export default PollUI;