// components/MainPageComponent/Lobby.tsx
"use client";
import { useEffect, useState } from "react";
import usePartySocket from "partysocket/react";
import styles from "./Lobby.module.css"; // Import CSS module

import { Rooms, SINGLETON_ROOM_ID } from "@/party/types";
import CardContainer from "../MUPComponents/CardContainer"; // Import the CardContainer component

export default function Lobby({
  currentRoom,
  setCurrentRoom,
  selectedText,
  completeText
}: Readonly<{
  currentRoom: string;
  setCurrentRoom: (room: string) => void;
  selectedText: string;
  completeText: string;
}>) {
  const [rooms, setRooms] = useState<Rooms>({});

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

  return (
    <div className={styles.lobbyContainer}>
      <h3>All Rooms</h3>
      <ul>
        {Object.entries(rooms).map(([room, count]) => {
          return (
            <li key={room}>
              <button onClick={() => setCurrentRoom(room)}>Room #{room}</button>
              <span>
                Present <span>{count}</span>
              </span>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setCurrentRoom(Math.random().toString(36).substring(2, 8))}>
        New Room
      </button>
      {currentRoom && (
        <CardContainer key={currentRoom} selectedText={selectedText} room={currentRoom} completeText={completeText} />
      )}
    </div>
  );
}
