// Create a hook to manage user state and interactions
import { useState, useEffect } from 'react';

function usePartyKit() {
  const [users, setUsers] = useState([]);
  const [connection, setConnection] = useState(null);

  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    room: props.roomId,
    party: "likeserver",
    onMessage: (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'presence') {
        setUsers(message.payload.users);
      }
    };

    setConnection(partyConnection);

    return () => {
      partyConnection.close();
    };
  }, []);

  const addUser = (user) => {
    connection.send(JSON.stringify({ type: 'add-user', payload: user }));
  };

  const removeUser = (userId) => {
    connection.send(JSON.stringify({ type: 'remove-user', payload: { id: userId } }));
  };

  return { users, addUser, removeUser };
}

export default usePartyKit;
