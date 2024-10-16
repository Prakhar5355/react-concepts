import React, { useState, useMemo, useCallback } from 'react';

const OptimizeMemoAndCallback = () => {
  const [number, setNumber] = useState(5);
  const [darkMode, setDarkMode] = useState(false); // State to toggle dark mode

  const square = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  // Memoizing the toggle function using useCallback
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevMode => !prevMode);
  }, []); // No dependencies, so the function will be memoized


//   "I used useCallback to memoize the toggleDarkMode function to prevent it from being
//    recreated on every render of the component. This is important because if we pass this function to child 
//    components, they could unnecessarily re-render each time the parent renders, leading to performance degradation. 
//    By memoizing it, we ensure that the function reference remains stable, which can help optimize the rendering of child components
//     that rely on it, especially if they're using React.memo. This approach makes the code cleaner and signals to other developers that 
//     the function is intended to be stable across renders."
  return (
    <div style={{
      backgroundColor: darkMode ? 'grey' : 'white',
      color: darkMode ? 'white' : 'black',
      padding: '20px',
      transition: 'background-color 0.3s, color 0.3s'
    }}>
      <p>Square: {square}</p>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <button onClick={() => setNumber(number + 1)}>
        Increment Number
      </button>
    </div>
  );
};

export default OptimizeMemoAndCallback;
