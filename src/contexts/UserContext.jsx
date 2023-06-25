import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  console.log(user);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
