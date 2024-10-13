import React, { createContext, useReducer } from 'react';
import { initialState, userReducer } from './userReducer'; // Adjust the import path as necessary

// Create the context
export const UserContext = createContext(  
    {user: { name: "Default Name", email: "default@example.com" },
    changeEmail: () => {},
    changeName: () => {}
});

// Create a provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const changeEmail = (newEmail) => {
    dispatch({ type: 'CHANGE_EMAIL', payload: newEmail });
  };

  const changeName = (newName) => {
    dispatch({ type: 'CHANGE_NAME', payload: newName });
  };

  return (
    <UserContext.Provider value={{ user: state, changeEmail, changeName }}>
      {children}
    </UserContext.Provider>
  );
};
