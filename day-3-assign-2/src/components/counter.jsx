

import React, { useState }  from "react";
 
import "./counter.css"
 function Counter(){

   const [counter,setCounter] =useState(0)

     const handleChange=(value)=>{
      setCounter(counter+value)
     }
   
     const doubleValue=()=>{
        setCounter(counter*2)
     }

    
    return(  
       <div id="counter">
       <div id="conterdiv"> <h3 >Counter:<span className={`${counter%2===0 ? "green":"red"}`}>{counter}</span></h3></div>
       
       <div id="update">
       <button onClick={()=>handleChange(1)}>Increment</button>
       <button onClick={()=>handleChange(-1)}>Decrement</button>
       <button onClick={doubleValue}>Double</button>
       
       </div>
       </div>   
   
    ) 
 }


 export {Counter};