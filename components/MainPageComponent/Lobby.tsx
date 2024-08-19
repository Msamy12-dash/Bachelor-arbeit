import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

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
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const MAX_ROOM_NAME_LENGTH = 20; // Maximum length for the room name

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleNewRoom = () => {
    if (!newRoomName.trim()) {
      setSnackbarMessage('Room name cannot be empty.');
      setOpenSnackbar(true);
      return;
    }

    if (newRoomName.length > MAX_ROOM_NAME_LENGTH) {
      setSnackbarMessage(`Room name cannot exceed ${MAX_ROOM_NAME_LENGTH} characters.`);
      setOpenSnackbar(true);
      return;
    }

    if (rooms[newRoomName]) {
      setSnackbarMessage(`Room "${newRoomName}" already exists!`);
      setOpenSnackbar(true);
    } else {
      const updatedRooms = { ...rooms, [newRoomName]: 0 }; // Assuming '0' as initial count for new room

      setRooms(updatedRooms);
      setCurrentRoom(newRoomName);
    }
    setNewRoomName('');
  };

  return (
    <>
      <input
        className="w-36"
        placeholder="Enter new room name"
        type="text"
        value={newRoomName}
        maxLength={MAX_ROOM_NAME_LENGTH} // Enforce maximum length in the input
        onChange={(e) => setNewRoomName(e.target.value)}
      />
      <button className="w-36" onClick={handleNewRoom}>
        Create Room
      </button>

      <select
        className="w-36 truncate"
        value={currentRoom}
        onChange={(e) => setCurrentRoom(e.target.value)}
      >
        {Object.entries(rooms).map(([room, count]) => (
          <option key={room} value={room}>
            {`Room ${room} (${count} user${count !== 1 ? "s" : ""})`}
          </option>
        ))}
      </select>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5000} // Auto-hide after 5 seconds
        open={openSnackbar}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="error" sx={{ width: '100%' }} onClose={handleCloseSnackbar}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
