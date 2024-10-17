import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search"
import Greeting from "../components/Greeting.tsx";


const nameList = [

    {
        first:"Prkhr",
        last:"Jain"
    },
    {
        first:"Ashwani",
        last:"Jain"
    },
    {
    first:false,
        last:"Jain"
    }
]

const sampleFunc = () =>{
    console.log("Typing Function")
}

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
       <Greeting demoFunc = {sampleFunc} names={nameList}>Hii</Greeting>
    
       </div>
        </>
    )
}

export default Home

