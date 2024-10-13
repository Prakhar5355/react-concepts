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

//without useReducer
// import React, { createContext, useState } from 'react';

// // Create the context with default values
// export const UserContext = createContext({ 
//     user: { name: "Default Name", email: "default@example.com" },
//     changeEmail: () => {},
//     changeName: () => {}
// });

// // Create a provider component
// export const UserProvider = ({ children }) => {
//     // Using useState to manage user state
//     const [user, setUser] = useState({
//         name: "Prakhar", // Default user name
//         email: "prakhar@example.com" // Default user email
//     });

//     // Function to change the user's email
//     const changeEmail = (newEmail) => {
//         setUser(prevUser => ({ ...prevUser, email: newEmail }));
//     };

//     // Function to change the user's name
//     const changeName = (newName) => {
//         setUser(prevUser => ({ ...prevUser, name: newName }));
//     };

//     return (
//         <UserContext.Provider value={{ user, changeEmail, changeName }}>
//             {children}
//         </UserContext.Provider>
//     );
// };
