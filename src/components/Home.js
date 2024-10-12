import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <>
        <h1>Hello Prakhar</h1>
       <Link to="/about"><button>About</button></Link>
        </>
    )
}

export default Home