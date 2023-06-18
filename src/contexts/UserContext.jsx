import { createContext, useEffect, useReducer, useState } from 'react';

export const UserContext = createContext({});

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return { user: action.payload };
    }
    case 'LOGOUT': {
      return { user: null };
    }
    default: {
      return state;
    }
  }
};

export function UserContextProvider({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);

  const [state, dispatch] = useReducer(userReducer, {
    user: user,
  });

  return <UserContext.Provider value={{ ...state, dispatch }}>{children}</UserContext.Provider>;
}
