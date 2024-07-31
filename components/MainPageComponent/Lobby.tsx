import React, { useState } from 'react';
import usePartySocket from 'partysocket/react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import UserAvatar from '../UserComponent/UserAvatar';

import { Rooms, SINGLETON_ROOM_ID } from '@/party/src/types';
import { PARTYKIT_HOST } from '@/pages/env';

export default function Lobby({
  currentRoom,
  setCurrentRoom,
}: {
  currentRoom: string;
  setCurrentRoom: (room: string) => void;
}) {
  const [rooms, setRooms] = useState<Rooms>({});
  const [newRoomName, setNewRoomName] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  usePartySocket({
    host: PARTYKIT_HOST,
    room:SINGLETON_ROOM_ID,
    party: "rooms",
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
    if (newRoomName && !rooms[newRoomName]) {
      setRooms((prevRooms) => ({
        ...prevRooms,
        [newRoomName]: 1, // Assuming '1' is the initial count of users
      }));
      setCurrentRoom(newRoomName);
      setNewRoomName(''); // Reset the input field
    } else {
      // Trigger the snackbar if room name is already in use
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const userCount = rooms[currentRoom] || 0;

  return (
    <>
      <UserAvatar userCount={userCount} />
      <input
        placeholder="Enter new room name"
        type="text"
        value={newRoomName}
        onChange={(e) => setNewRoomName(e.target.value)}
      />
      <button onClick={handleNewRoom}>Create Room</button>
      
      <select
        className=""
        value={currentRoom}
        onChange={(e) => setCurrentRoom(e.target.value)}
      >
        {Object.entries(rooms). map(([room, count]) => (
          <option key={room} value={room}>
            Room: {room}
          </option>
        ))}
      </select>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position the Snackbar at the top center of the screen
        autoHideDuration={1000} // Snackbar will disappear after 15 seconds
        open={openSnackbar}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="error" sx={{ width: '100%' }} onClose={handleCloseSnackbar}>
          Room "{newRoomName}" already exists!
        </Alert>
      </Snackbar>
    </>
  );
}
