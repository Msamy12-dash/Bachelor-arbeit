import { User } from '@/party/types';
import { useState, useEffect } from 'react';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const updateUser = (newUser: User) => {
    setUser(newUser);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('user', JSON.stringify(newUser));
    }
  };

  return { user, updateUser };
}