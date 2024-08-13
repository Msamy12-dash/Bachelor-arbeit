import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '@/party/types';

interface OnlineUsersContextProps {
  onlineUsers: User[];
  setOnlineUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

// Create the context with a default empty state
const OnlineUsersContext = createContext<OnlineUsersContextProps | undefined>(undefined);

// Create a provider component
export const OnlineUsersProvider = ({ children }: { children: ReactNode }) => {
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);

  return (
    <OnlineUsersContext.Provider value={{ onlineUsers, setOnlineUsers }}>
      {children}
    </OnlineUsersContext.Provider>
  );
};

// Custom hook to use the context in components
export const useOnlineUsers = () => {
  const context = useContext(OnlineUsersContext);
  if (!context) {
    throw new Error('useOnlineUsers must be used within a OnlineUsersProvider');
  }
  return context;
};
