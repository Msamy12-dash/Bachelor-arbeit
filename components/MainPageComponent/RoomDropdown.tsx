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
  //roomServerSocket,
}: {
  currentRoom: string;
  setCurrentRoom: React.Dispatch<React.SetStateAction<string>>;
  //roomServerSocket: PartySocket;
}) {
  //maybe do room ids as incrementing integers instead of random strings later
  const [roomCounts, setRoomCounts] = useState<Record<string, number>>({});
  
  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    party: "rooms",
    room: currentRoom,
    onMessage(evt) {
      const data = JSON.parse(evt.data);
      if (data.type === "rooms") {
        setRooms((prevRooms) => ({
          ...prevRooms,
          ...data.rooms,
        }));
      } else if (data.type === "newRoomCreated") {
        setCurrentRoom(data.roomId);
      } else if (data.type === "userCount") {
        setRoomCounts(prev => ({
          ...prev,
          [data.roomId]: data.count
        }));
      }
    },
  });

  useEffect(() => {
    if (currentRoom) {
      const editorSocket = new WebSocket(`wss://${PARTYKIT_HOST}/${currentRoom}`);
      return () => {
        editorSocket.close();
      };
    }
  }, [currentRoom]);

  const createNewRoom = useCallback(() => {
    socket.send(JSON.stringify({ type: "createNewRoom" }));
  }, [socket]);

  const renderDropdownItems = () => {
    const items = Object.entries(roomCounts).map(([roomId, count]) => (
      <DropdownItem key={roomId}>
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
      >
        {renderDropdownItems()}
      </DropdownMenu>
    </Dropdown>
  );
}
