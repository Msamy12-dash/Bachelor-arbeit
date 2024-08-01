import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Snackbar from "@mui/material/Snackbar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import usePartySocket from "partysocket/react";

import PollUI from "../voteComponent/VoteComponent";

import { PARTYKIT_HOST } from "@/pages/env";
import { Poll } from "@/party/src/types";

function useSocketConnection(ID: string, onMessage: (event: MessageEvent) => void) {
  return usePartySocket({
    host: PARTYKIT_HOST,
    room: ID,
    party: "vote",
    onMessage,
  });
}

const NotificationComponent: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [poll, setPoll] = useState<Poll | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [isPollModalOpen, setIsPollModalOpen] = useState(false);
  const [notificationID, setNotificationID] = useState(0);

  const onMessage = async (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    console.log(data);
    
    if (data.message === "vote now") {
      const { poll } = data;
      setPoll({
        ...poll,
        votes: poll.votes || [],
        options: poll.options || []
      });

      setMessages(prev => [...prev, "Please cast your vote now!"]);
      setIsSnackbarOpen(true);
      setIsPollModalOpen(true);
      setTimeout(() => setIsSnackbarOpen(false), 3000);
      setNotificationID(prevID => prevID + 1);
    }
  };

  const id = notificationID.toString();
  const socket = useSocketConnection(id, onMessage);

  useEffect(() => {
    const saved = localStorage.getItem("messages") || "[]";
    setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const closePollModal = () => {
    setIsPollModalOpen(false);
  };

  return (
    <div className="relative inline-block ml-4">
      <button aria-label={`You have ${messages.length} notifications`} onClick={onOpen}>
        <NotificationsIcon style={{ fontSize: 24 }} />
        {messages.length > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {messages.length}
          </span>
        )}
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Notifications</ModalHeader>
          <ModalBody>
            {messages.length === 0 ? <p>No notifications</p> : (
              <div>
                {poll && <PollUI id={id} initialVotes={poll.votes} options={poll.options} />}
              </div>
            )}
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
    </div>
  );
};

export default NotificationComponent;
export type Poll = {
  title: string;
  options: string[];
  votes?: number[];
};
