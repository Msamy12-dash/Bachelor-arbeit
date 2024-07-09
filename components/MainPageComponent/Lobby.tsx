"use client";
import { useEffect, useState } from "react";
import usePartySocket from "partysocket/react";
import { Rooms, SINGLETON_ROOM_ID } from "@/party/types";
import CardContainer from "../MUPComponents/CardContainer";
import { Button } from "@nextui-org/react";

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
    <div className="flex flex-col w-full h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Top Section */}
      <div className="top-section p-4 bg-white rounded-lg">
        <h3 className="text-2xl font-bold mb-4">All Rooms</h3>
        <ul className="flex flex-col space-y-4 mb-6">
          {Object.entries(rooms).map(([room, count]) => {
            return (
              <li key={room} className="flex items-center justify-between p-4 bg-white rounded shadow">
                <Button
                  onClick={() => setCurrentRoom(room)}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600"
                >
                  Room #{room}
                </Button>
                <span>
                  Present <span className="font-bold">{count}</span>
                </span>
              </li>
            );
          })}
        </ul>
        <Button
          onClick={() => setCurrentRoom(Math.random().toString(36).substring(2, 8))}
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600 mb-6"
        >
          New Room
        </Button>
      </div>
  
      {/* Card Container Section */}
      {currentRoom && (
        <div className="card-container flex-1 overflow-hidden">
          <CardContainer
            key={currentRoom}
            selectedText={selectedText}
            room={currentRoom}
            completeText={completeText}
          />
        </div>
      )}
    </div>
  );
  
}
