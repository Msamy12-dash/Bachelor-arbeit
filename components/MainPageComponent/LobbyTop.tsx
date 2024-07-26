/* eslint-disable prettier/prettier */
import { useState } from "react";
import usePartySocket from "partysocket/react";

import { Rooms, SINGLETON_ROOM_ID } from "@/party/types";
import { PARTYKIT_HOST } from "@/pages/env";

export default function Lobby({
  currentRoom,
  setCurrentRoom,
}: {
  currentRoom: string;
  setCurrentRoom: (room: string) => void;
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
    <div className="">
      <h3 className="text-lg font-bold mb-4">All Rooms</h3>
      <select
        className=" p-2 mb-4 border rounded"
        value={currentRoom}
        onChange={(e) => setCurrentRoom(e.target.value)}
      >
        {Object.entries(rooms).map(([room, count]) => (
          <option key={room} value={room}>
            Room Number {room} (Present: {count})
          </option>
        ))}
      </select>
      <div>
        <button onClick={handleNewRoom}>New Room</button>
      </div>
    </div>
  );
}
