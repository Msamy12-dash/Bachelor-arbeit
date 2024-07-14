/* eslint-disable prettier/prettier */
"use client";
import { useState } from "react";
import usePartySocket from "partysocket/react";
import { Rooms, SINGLETON_ROOM_ID } from "@/party/types";
import TextArea from "../common/textArea";
import Button from "../common/button";

export default function Lobby({
  currentRoom,
  setCurrentRoom,
  setPrompts,
}: Readonly<{
  currentRoom: string;
  setCurrentRoom: (room: string) => void;
  setPrompts: (room: string[]) => void;
}>) {
  const [rooms, setRooms] = useState<Rooms>({});
  const [inputText, setInputText] = useState<string>("");

  usePartySocket({
    party: "roomserver",
    room: SINGLETON_ROOM_ID,
    onMessage(evt) {
      const data = JSON.parse(evt.data);

      if (data.type === "rooms") {
        setRooms(data.rooms as Rooms);
      }
    },
  });

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleSave = () => {
    const savedPrompts = JSON.parse(
      localStorage.getItem("savedPrompts") || "[]"
    );
    const updatedPrompts = [...savedPrompts, inputText];

    localStorage.setItem("savedPrompts", JSON.stringify(updatedPrompts));
    setPrompts(updatedPrompts);
    setInputText("");
  };

  return (
    <div>
      <h3>All Rooms</h3>
      <ul>
        {Object.entries(rooms).map(([room, count]) => {
          const isCurrent = room === currentRoom;

          return (
            <li key={room}>
              <button disabled={isCurrent} onClick={() => setCurrentRoom(room)}>
                Room #{room}
              </button>
              <span>
                Present <span>{count}</span>
              </span>
            </li>
          );
        })}
      </ul>
      {
        <button
          onClick={() =>
            setCurrentRoom(Math.random().toString(36).substring(2, 8))
          }
        >
          New Room
        </button>
      }

      {/**
       * Prompt save
       */}
      <div style={{ display: "flex" }}>
        <TextArea value={inputText} onChange={handleTextChange} />
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
}
