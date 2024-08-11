import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import usePartySocket from "partysocket/react";

import VoteCard from "../voteComponent/VoteCard";

import { PARTYKIT_HOST } from "@/pages/env";

function useSocketConnection(ID: string, onMessage: (event: MessageEvent) => void) {
  return usePartySocket({
    host: PARTYKIT_HOST,
    room: "active-connections",
    party: "notificationserver",
    onMessage,
  });
}

const NotificationComponent: React.FC = () => {
  const [connectionKeys, setConnectionKeys] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newNotification, setNewNotification] = useState(false); // New state to track notification status

  const onMessage = (event: MessageEvent) => {
    let data;

    //console.log()
    try {
      data = JSON.parse(event.data);
      console.log(JSON.stringify(data))
      

    } catch (error) {
      console.error("Failed to parse message:", error);
      //console.log("Received message:", event.data);

      return;
    }
    console.log("data.connectionKeys")
    if (data.connectionKeys && JSON.stringify(data.connectionKeys) !== JSON.stringify(connectionKeys)) {
      console.log(data.connectionKeys)
      setConnectionKeys(data.connectionKeys);
      setNewNotification(true);
    }
    
  };

  useSocketConnection("0", onMessage);

  useEffect(() => {
    const saved = localStorage.getItem("connectionKeys") || "[]";

    setConnectionKeys(JSON.parse(saved));
  }, []);
  useSocketConnection("0", onMessage);

  useEffect(() => {
    localStorage.setItem("connectionKeys", JSON.stringify(connectionKeys));
  }, [connectionKeys]);

  return (
    <div className="relative inline-block ml-4">
      <button aria-label={`You have ${connectionKeys.length} notifications`} onClick={() => {
        onOpen();
        if (newNotification) {
          setNewNotification(false); // Reset notification state
        }
      }}>
        <NotificationsIcon style={{ fontSize: 24 }} />
        {connectionKeys.length > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {connectionKeys.length}
          </span>
        )}
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Notifications</ModalHeader>
          <ModalBody>
            {connectionKeys.length === 0 ? (
              <p>No notifications</p>
            ) : (
              <div>
                {connectionKeys.map((key) => (
                  <VoteCard key={key} pollId={key} />
                ))}
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onPress={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NotificationComponent;
