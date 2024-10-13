import React, { useContext } from 'react';
import { UserContext } from '../utils/UserContext'; // Adjust the import path as necessary

const About = () => {
  const { user, changeEmail, changeName } = useContext(UserContext);

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

  return (
    <>
      <div>About {user.name} ({user.email})</div>
      <button onClick={handleEmailChange}>Change Email</button>
      <button onClick={handleNameChange}>Change Name</button>
    </>
  );
};

export default About;
