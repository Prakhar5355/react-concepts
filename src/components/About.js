import React, { useContext } from 'react';
import { UserContext } from '../utils/UserContext'; // Adjust the import path as necessary
import { addUser } from '../utils/userSlice';
import { useSelector, useDispatch } from 'react-redux';

const About = () => {
  const { user, changeEmail, changeName } = useContext(UserContext);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const handleEmailChange = () => {
    const newEmail = prompt("Enter new email:", user.email);
    if (newEmail) {
      changeEmail(newEmail);
    }
  };

  const handleNameChange = () => {
    const newName = prompt("Enter new name:", user.name);
    if (newName) {
      changeName(newName);
    }
  };
  const handleAddUser = () => {
    const newName = prompt("Enter new user's name:");
    const newEmail = prompt("Enter new user's email:");
    if (newName && newEmail) {
        dispatch(addUser({ name: newName, email: newEmail }));
    }
};

  return (
    <>
      <div>About {user.name} ({user.email})</div>
      <button onClick={handleEmailChange}>Change Email</button>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleAddUser}>Add</button>
    </>
  );
};

export default About;
