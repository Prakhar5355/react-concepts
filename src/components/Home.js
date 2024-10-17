import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search"
import Greeting from "../components/Greeting";

const Home = () =>{
    return(
        <>
        <h1>Hello Prakhar</h1>
        <div className="parent" style={{display:"flex"}}>
            <Search></Search>
       
       <Link to="/about"><button>About</button></Link>
       <Link to="/contact"><button>Contact us</button></Link>
       <Link to="/profile"><button>My Profile</button></Link>
       <Link to="/square"><button>Calculate Square</button></Link>
     <Greeting name="Ashwani"/>
       </div>
        </>
    )
}

export default Home

