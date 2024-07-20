import React, { useState, useCallback, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import PartySocket from "partysocket";
import usePartySocket from "partysocket/react";
import { Rooms } from "@/party/types";
import { PARTYKIT_HOST } from "@/pages/env";

export default function RoomDropdown({
  currentRoom,
  setCurrentRoom,
}: {
  currentRoom: string;
  setCurrentRoom: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [roomCounts, setRoomCounts] = useState<Record<string, number>>({});
  
  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    party: "roomserver",
    room: "active-connections",
    onMessage(evt) {
      try {
        const data = JSON.parse(evt.data);
        if (typeof data === "object" && data !== null) {
          setRoomCounts(prevCounts => ({...prevCounts, ...data}));
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    },
  });

  useEffect(() => {
    // Initial fetch of room counts
    const fetchRoomCounts = async () => {
      try {
        const response = await fetch(`${PARTYKIT_HOST}/parties/roomserver/active-connections`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRoomCounts(data);
      } catch (error) {
        console.error("Error fetching room counts:", error);
      }
    };

    fetchRoomCounts();
  }, []);


  const createNewRoom = useCallback(() => {
    const newRoomId = Math.random().toString(36).substring(2, 8);
    setCurrentRoom(newRoomId);
  }, [setCurrentRoom]);

  const renderDropdownItems = () => {
    const items = Object.entries(roomCounts).map(([roomId, count]) => (
      <DropdownItem 
        key={roomId} 
        className={currentRoom === roomId ? "bg-primary-100" : ""}
      >
        {`Room ${roomId} (${count} user${count !== 1 ? "s" : ""})`}
      </DropdownItem>
    ));
    items.push(
      <DropdownItem
        key="new-room"
        className="text-primary"
        onClick={createNewRoom}
      >
        Create New Room
      </DropdownItem>
    );
    return items;
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="flat" className="capitalize">
          {currentRoom
            ? `Room: ${currentRoom} (${roomCounts[currentRoom] || 0})`
            : "Select Room"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Room selection"
        onAction={(key) => key !== "new-room" && setCurrentRoom(key.toString())}
        selectionMode="single"
        selectedKeys={currentRoom ? [currentRoom] : []}
      >
        {renderDropdownItems()}
      </DropdownMenu>
    </Dropdown>
  );
}