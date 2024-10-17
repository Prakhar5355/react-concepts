import React from "react";

// Define the type for the props using a shorter name
// interface Props {
//   name: string;
// }

const Greeting= (props) => {
  return (
    <>
      <p>Hello {props.name}</p>
    </>
  );
};

export default Greeting;
