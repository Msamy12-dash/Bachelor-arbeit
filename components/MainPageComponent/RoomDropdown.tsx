import React, { useState, useCallback, useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import usePartySocket from "partysocket/react";
import { Rooms, SINGLETON_ROOM_ID } from "@/party/types";
import { PARTYKIT_HOST } from "@/pages/env";

export default function RoomDropdown({
  currentRoom,
  setCurrentRoom,
  rooms,
  setRooms,
}: {
  currentRoom: string;
  setCurrentRoom: React.Dispatch<React.SetStateAction<string>>;
  rooms: Rooms;
  setRooms: Function;
}) {
  
  const handleNewRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 8);
    setCurrentRoom(newRoomId);
  };

  const renderDropdownItems = () => {
    const items = Object.entries(rooms).map(([roomId, count]) => (
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
        onClick={handleNewRoom}
      >
        Create New Room
      </DropdownItem>
    );
    return items;
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="flat" className="capitalize  text-white bg-gradient-to-r from-blue-500 to-indigo-500">
          {currentRoom
            ? `Room: ${currentRoom} (${rooms[currentRoom] || 0})`
            : "Select Room"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Room selection"
        onAction={(key) => {key !== "new-room" && setCurrentRoom(key.toString())
          console.log(currentRoom)
        }}
        selectionMode="single"
        selectedKeys={currentRoom ? [currentRoom] : []}
      >
        {renderDropdownItems()}
      </DropdownMenu>
    </Dropdown>
  );
}
