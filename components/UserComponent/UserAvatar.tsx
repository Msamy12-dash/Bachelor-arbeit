import React from 'react';
import { useOnlineUsers } from '@/contexts/OnlineUsersContext';  // Ensure the correct import path

export default function UserAvatar() {
  const { onlineUsers } = useOnlineUsers();  // Use the context to get online users

  console.log("UserAvatar received users:", onlineUsers);

  if (onlineUsers.length === 0) {
    return <p>No users online</p>;
  }

  return (
    <div>
      <h3>Online Users:</h3>
      <ul>
        {onlineUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
