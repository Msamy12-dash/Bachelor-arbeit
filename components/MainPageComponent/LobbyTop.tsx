import React, { useState } from 'react';
import usePartySocket from 'partysocket/react';

import UserAvatar from '../UserComponent/UserAvatar';

import { Rooms, SINGLETON_ROOM_ID } from '@/party/src/types';
import { PARTYKIT_HOST } from '@/pages/env';

export default function LobbyTop({
  currentRoom,
  setCurrentRoom,
}: {
  currentRoom: string;
  setCurrentRoom: (room: string) => void;
}) {
  const [rooms, setRooms] = useState<Rooms>({});
  const [nextRoomId, setNextRoomId] = useState<number>(1);

  usePartySocket({
    host: PARTYKIT_HOST,
    party: "rooms",
    room: SINGLETON_ROOM_ID,
    onMessage(evt) {
      const data = JSON.parse(evt.data);

      if (data.type === "rooms") {
        setRooms((prevRooms) => {
          const updatedRooms = { ...prevRooms };

          Object.keys(data.rooms).forEach((roomKey) => {
            updatedRooms[roomKey] = data.rooms[roomKey];
          });

          return updatedRooms;
        });
      }
    },
  });

  const handleNewRoom = () => {
    // Get all existing room numbers as integers
    const existingRoomIds = Object.keys(rooms).map((id) => parseInt(id, 10));

    // Find the next available room number
    let newRoomId = 1;
    while (existingRoomIds.includes(newRoomId)) {
      newRoomId++;
    }

    const newRoom = newRoomId.toString().padStart(1, "0");

    setRooms((prevRooms) => ({
      ...prevRooms,
      [newRoom]: 1,
    }));
    setCurrentRoom(newRoom);
    setNextRoomId(newRoomId + 1); // Update nextRoomId for future reference
  };

  const userCount = rooms[currentRoom] || 0;

  return (
    <>
      <UserAvatar userCount={userCount} />

      <select
        className=""
        value={currentRoom}
        onChange={(e) => setCurrentRoom(e.target.value)}
      >
        {Object.entries(rooms).map(([room, count]) => (
          <option key={room} value={room}>
            Room Number {room} 
          </option>
        ))}
      </select>
      <button onClick={handleNewRoom}>New Room</button>
      {/* Pass the user count to the UserAvatar component */}
    </>
  );
}
