import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Snackbar from "@mui/material/Snackbar";
import usePartySocket from "partysocket/react";

import PollOptions from "../VoteComponent/VoteOptions";

import { Poll } from "@/party/src/types";
import { PARTYKIT_HOST } from "@/env";

// Custom hook to create and handle WebSocket connection
function useSocketConnection(ID: string, onMessage: (event: MessageEvent) => void) {
  return usePartySocket({
    host: PARTYKIT_HOST,
    room: ID,
    party: "vote",
    onMessage,
  });
}

const PollUI: React.FC<{ id: string; options: string[]; initialVotes?: number[]; title: string; username: string; roomId: string; }> = ({ id, options, initialVotes, title, username, roomId }) => {
  const [votes, setVotes] = useState<number[]>(initialVotes ?? []);
  const [vote, setVote] = useState<number | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [pollTitle, setPollTitle] = useState("Open Poll");

  const onMessage = (event: MessageEvent) => {
    const data = event.data;
    //console.log("PollUI");
    if (data === "vote now") {
      setIsSnackbarOpen(true);  // Ensure to open the snackbar when a message is received
      setTimeout(() => setIsSnackbarOpen(false), 3000); // Auto close snackbar after 3 seconds
    } else {
      const pollData = JSON.parse(data) as Poll;

      if (pollData.votes) {
        setVotes(pollData.votes);
      }
      if(pollData.title){
        setPollTitle(pollData.title);
      }
    }
  };

  const socket = useSocketConnection(id, onMessage);

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
      <button className="btn btn-primary" onClick={onOpen}>{pollTitle}</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>
            <p>Created by: {username}</p>
            <p>Room ID: {roomId}</p>
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
