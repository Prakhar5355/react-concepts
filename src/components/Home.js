import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <>
        <h1>Hello Prakhar</h1>
        <div className="parent" style={{display:"flex"}}>
       <Link to="/about"><button>About</button></Link>
       <Link to="/contact"><button>Contact us</button></Link>
       <Link to="/profile"><button>My Profile</button></Link>
       </div>
        </>
    )
}

export default Home

