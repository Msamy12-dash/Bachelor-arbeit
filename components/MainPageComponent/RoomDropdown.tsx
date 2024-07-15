import React, { useState, useCallback } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import usePartySocket from "partysocket/react";
import { Rooms, SINGLETON_ROOM_ID } from "@/party/types";
import { PARTYKIT_HOST } from "@/pages/env";

export default function RoomDropdown({ 
    currentRoom, 
    setCurrentRoom 
  }: { 
    currentRoom: string, 
    setCurrentRoom: React.Dispatch<React.SetStateAction<string>> 
  }) {
  const [rooms, setRooms] = useState<Rooms>({});
  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    party: "rooms",
    room: SINGLETON_ROOM_ID,
    onMessage(evt) {
      const data = JSON.parse(evt.data);
      if (data.type === "rooms") {
        setRooms((prevRooms) => ({
          ...prevRooms,
          ...data.rooms,
        }));
      } else if (data.type === "newRoomCreated") {
        setCurrentRoom(data.roomId);
      }
    },
  });

  const createNewRoom = useCallback(() => {
    socket.send(JSON.stringify({ type: "createNewRoom" }));
  }, [socket]);

  const renderDropdownItems = () => {
    const items: JSX.Element[] = Object.entries(rooms).map(([room, count]) => (
      <DropdownItem key={room} onPress={() => setCurrentRoom(room)}>
        {`Room #${room} (Present: ${count})`}
      </DropdownItem>
    ));
    
    items.push(
      <DropdownItem key="newRoom" onPress={createNewRoom}>
        New Room
      </DropdownItem>
    );

    return items;
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="flat">
          {currentRoom ? `Room #${currentRoom}` : "Select Room"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Room selection">
        {renderDropdownItems()}
      </DropdownMenu>
    </Dropdown>
  );
}