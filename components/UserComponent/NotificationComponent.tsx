import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Snackbar from "@mui/material/Snackbar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import usePartySocket from "partysocket/react";

import { PARTYKIT_HOST } from "@/pages/env";

function useSocketConnection(onMessage: (event: MessageEvent) => void) {
  return usePartySocket({
    host: PARTYKIT_HOST,
    room: "1",
    party: "vote",
    onMessage,
  });
}

const NotificationComponent: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const onMessage = (event: MessageEvent) => {
    const data = event.data;

    if (data === "vote now") {
      setMessages(prev => [...prev, "Please cast your vote now!"]);
      setIsSnackbarOpen(true);  // Ensure to open the snackbar when a message is received
      setTimeout(() => setIsSnackbarOpen(false), 3000); // Auto close snackbar after 3 seconds
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const socket = useSocketConnection(onMessage);

  useEffect(() => {
    const saved = localStorage.getItem("messages") || "[]";

    setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="relative inline-block ml-4">
      <button
        aria-label={`You have ${messages.length} notifications`}
        className="relative p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={onOpen}
      >
        <NotificationsIcon style={{ fontSize: 24 }} />
        {messages.length > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {messages.length}
          </span>
        )}
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Notifications</ModalHeader>
          <ModalBody>
            {messages.length === 0 ? (
              <p>No notifications</p>
            ) : (
              messages.map((msg, index) => <p key={index}>{msg}</p>)
            )}
          </ModalBody>
          <ModalFooter>
            <Button  color="danger" onPress={onClose}>Close</Button>
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
