
import { useContext } from "react";

import React from "react";
 import { ThemeContext } from "../contexts/ThemeContext";
import BasicSwitches from './Button'

export const Navbar=()=> {

   

     const {theme,} =useContext(ThemeContext);



  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "start",
        padding: "5px",
        fontSize: "28px",
        margin: "5px",
      
        background:`${theme === true? "white":"black"}`,
        color:`${theme === true? "black":"white"}`,
      }}
    >
        <h2>My Dashboard</h2>
        <BasicSwitches></BasicSwitches>
            
    </nav>
  );
}

