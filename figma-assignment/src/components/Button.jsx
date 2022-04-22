import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useContext } from "react";
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import { ThemeContext } from "../contexts/ThemeContext";
export default function BasicSwitches() {
    const {theme,toggleAuth} =useContext(ThemeContext);

  return (
      
    <div>
       
      <Switch onChange={()=>{
                console.log("yes")
                toggleAuth()
            }}{...label} defaultChecked />
    
    </div>
  );
}