import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import UserAvatar from '../UserComponent/UserAvatar';

import { Rooms } from '@/party/src/types';

export default function Lobby({
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
  const [newRoomName, setNewRoomName] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleNewRoom = () => {
    if (rooms[newRoomName]) {
      setOpenSnackbar(true);
    } else {
      const updatedRooms = { ...rooms, [newRoomName]: 0 }; // Assuming '0' as initial count for new room

      setRooms(updatedRooms);
      setCurrentRoom(newRoomName);
    }
    setNewRoomName('');
  };

  const userCount = rooms[currentRoom] || 0;

  console.log(userCount);

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
        className="w-64 truncate bg-white border rounded p-2 shadow"
        value={currentRoom}
        onChange={(e) => setCurrentRoom(e.target.value)}
      >
        {Object.entries(rooms).map(([room, count]) => (
          <option key={room} value={room}>
            Room: {room} ({count})
          </option>
        ))}
      </select>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={15000} // Adjusted to 15 seconds as per the initial comment
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