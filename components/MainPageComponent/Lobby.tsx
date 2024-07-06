"use client";
import { useEffect, useState } from "react";
import usePartySocket from "partysocket/react";
import Card from "../MUPComponents/MUPCard"; // Import the Card component
import styles from "./Lobby.module.css"; // Import CSS module

import { Rooms, SINGLETON_ROOM_ID } from "@/party/types";

export default function Lobby({
  currentRoom,
  setCurrentRoom,
  selectedText,
}: Readonly<{
  currentRoom: string;
  setCurrentRoom: (room: string) => void;
  selectedText: string;
}>) {
  const [rooms, setRooms] = useState<Rooms>({});
  const [cards, setCards] = useState<string[]>([]); // State to manage cards

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

  useEffect(() => {
    console.log("Selected text updated:", selectedText);
  }, [selectedText]);

  // Handler to add a new card
  const handleAddCard = () => {
    setCards([...cards, selectedText]);
  };

  return (
    <div className={styles.lobbyContainer}>
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
      <button
        onClick={() =>
          setCurrentRoom(Math.random().toString(36).substring(2, 8))
        }
      >
        New Room
      </button>
      {selectedText && selectedText.length > 0 && ( // Show button if there is selected text
        <button onClick={handleAddCard}>
          Add Card with Selected Text
        </button>
      )}
      <div className={styles.cardsContainer}>
        {cards.map((text, index) => (
          <Card key={index} selectedText={text} />
        ))}
      </div>
    </div>
  );
}
