import React, { useState, useEffect } from 'react';

function DebounceExample() {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    // Set up a debounce function (500ms delay)
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);  // Update the debounced value after delay
    }, 300);

    // Cleanup function to clear timeout if user types before the delay finishes
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);  // This effect depends on inputValue

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
}

export default DebounceExample;
