
import { Navbar } from "./Navbar"
import { Subdiv } from "./Subdiv"
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const Card=()=>{

    const {theme} =useContext(ThemeContext);
    return (
        <div style={{
         height:"700px",
         width:"50%",
         margin:"auto",
         border:"1px solid black",
         background:`${theme === true? "white":"black"}`,
         color:`${theme === true? "black":"white"}`,
        }}>

       <Navbar/>  
       <Subdiv></Subdiv>
        </div>
    )
}