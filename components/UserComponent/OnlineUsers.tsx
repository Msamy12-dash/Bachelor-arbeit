import React, { useState } from 'react';
import { useOnlineUsers } from '@/contexts/OnlineUsersContext';  // Ensure the correct import path

export default function UserAvatar() {
  const { onlineUsers } = useOnlineUsers();  // Use the context to get online users
  const [showUsers, setShowUsers] = useState(false);  // State to control the visibility of the user list

  console.log("UserAvatar received users:", onlineUsers);

  const toggleUsersVisibility = () => {
    setShowUsers(!showUsers);
  };


  const styles = {
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      position: 'relative',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
      marginTop: '5px',
      zIndex: '1000',
      minWidth: '200px',
    },
    dropdownContent: {
      padding: '10px',
    },
    listItem: {
      padding: '8px 10px',
      borderBottom: '1px solid #ddd',
    },
    listHeader: {
      marginBottom: '10px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button style={styles.button} onClick={toggleUsersVisibility}>
        Online Users
      </button>

      {showUsers && (
        <div style={styles.dropdown}>
          {onlineUsers.length === 0 ? (
            <div style={styles.dropdownContent}>
              <p>No users online</p>
            </div>
          ) : (
            <div style={styles.dropdownContent}>

              <ul>
                {onlineUsers.map(user => (
                  <li key={user.id} style={styles.listItem}>{user.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
