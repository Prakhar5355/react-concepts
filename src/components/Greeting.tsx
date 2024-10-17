import React, { useState } from "react";

// Define the type for each name object in the array
interface Name {
  first: string;
  last: string;
}
type Primitive = string | number | boolean | null | undefined;
type NonStringPrimitive = Exclude<Primitive, string>; // number | boolean | null | undefined

const example1: NonStringPrimitive = 42; // Valid
// Define other possible name types (for example)
interface OtherName {
  fullName: string;
}


function addNums(num1:number,num2:number){
    return num1+num2;
}
console.log(addNums(7,9)) 

enum Direction {
    North = 1,  // 1
    South,      // 2
    East = 10,  // 10
    West        // 11
  }
  
  console.log(Direction.North); // Output: 1
  console.log(Direction.East);  // Output: 10
  console.log(Direction.West);  // Output: 11
  
let p:[string,number]  = ["Prakhar", 89];
let tuple: [string, number] = ["Age", 30];
console.log(tuple)
// Define the props for the Greeting component
interface GreetingProps {
  names: (Name | OtherName)[]; // Union type for names
  demoFunc: () => void; // A function with no arguments that returns void
  children?: React.ReactNode; // Optional children to render
}

const Greeting = ({ names, demoFunc, children }: GreetingProps) => {
  const [first, setFirst] = useState<string>("");

  // A function to process names
  const renderNames = (name: Name | OtherName) => {
    if ("first" in name && "last" in name) {
      // If it's of type Name
      return (
        <p key={`${name.first}-${name.last}`}>
          {name.first} {name.last}
        </p>
      );
    } else if ("fullName" in name) {
      // If it's of type OtherName
      return <p key={name.fullName}>{name.fullName}</p>;
    } else {
      // If an unexpected type is encountered
      const _: never = name; // This will cause a compile-time error if a new type is added
      throw new Error("Unexpected name type");
    }
  };

  return (
    <>
      <div>
        {/* Loop through the names array and display each name */}
        {names.map(renderNames)}
      </div>
      <div>
        {/* Call the demoFunc when clicking a button */}
        <button onClick={demoFunc}>Call Function</button>
      </div>
      <div>
        {/* Render children, like "Hii" */}
        {children}
      </div>
    </>
  );
};

export default Greeting;
