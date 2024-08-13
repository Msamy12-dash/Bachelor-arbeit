import React, { useState } from 'react';
import { useOnlineUsers } from '@/contexts/OnlineUsersContext';

export default function UserAvatar() {
  const { onlineUsers } = useOnlineUsers();
  const [showUsers, setShowUsers] = useState(false);

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
      display: 'flex',
      alignItems: 'center',
    },
    colorDot: {
      height: '10px',
      width: '10px',
      borderRadius: '50%',
      marginRight: '10px',
      backgroundColor: 'black',  // Fixed color for testing
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
                  <li key={user.id} style={styles.listItem}>
                    <span
                      style={{
                        ...styles.colorDot,
                        backgroundColor: user.color,
                      }}
                    ></span>
                    {user.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
