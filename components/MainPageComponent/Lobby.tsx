/* eslint-disable prettier/prettier */
"use client";
import { useEffect, useState } from "react";
import usePartySocket from "partysocket/react";
import { Rooms, SINGLETON_ROOM_ID } from "@/party/types";
import CardContainer from "../MUPComponents/CardContainer";
import { Button } from "@nextui-org/react";
import { PARTYKIT_HOST } from "@/pages/env";
import Quill from "react-quill";


export default function Lobby({
  currentRoom,
  setCurrentRoom,
  selectedText,
  completeText,
  editor
}: {
  currentRoom: string;
  setCurrentRoom: (room: string) => void;
  selectedText: string;
  completeText: string;
  editor: Quill & {
    highlightText: (index: number, length: number, color: string) => void;
    removeHighlight: (index: number, length: number) => void;
    getSelection: () => { index: number; length: number } | null;
  } | null;
}) {
  const [rooms, setRooms] = useState<Rooms>({});
  const [nextRoomId, setNextRoomId] = useState<number>(1);

  usePartySocket({
    // host: props.host, -- defaults to window.location.host if not set
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
      }
    },
  });

  const handleNewRoom = () => {
    const newRoom = nextRoomId.toString().padStart(1, "0"); // Converts the number to a string with leading zeros

    setRooms((prevRooms) => ({
      ...prevRooms,
      [newRoom]: 1, // Assuming the new room starts with 1 present user
    }));
    setCurrentRoom(newRoom);
    setNextRoomId(nextRoomId + 1); // Increment the next room ID
  };

  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 overflow-auto">
      {currentRoom && (
        <div className="flex-1 overflow-hidden">
          <CardContainer
            key={currentRoom}
            selectedText={selectedText}
            room={currentRoom}
            completeText={completeText}
            editor={editor}
          />
        </div>
      )}
    </div>
  );
}
