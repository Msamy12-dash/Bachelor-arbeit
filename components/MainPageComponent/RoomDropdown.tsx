import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Rooms } from "@/party/src/types";


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
        <Button className="capitalize" variant="flat">
          {currentRoom
            ? `Room: ${currentRoom} (${rooms[currentRoom] || 0})`
            : "Select Room"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Room selection"
        selectedKeys={currentRoom ? [currentRoom] : []}
        selectionMode="single"
        onAction={(key) => {key !== "new-room" && setCurrentRoom(key.toString())
          console.log(currentRoom)
        }}
      >
        {renderDropdownItems()}
      </DropdownMenu>
    </Dropdown>
  );
}
