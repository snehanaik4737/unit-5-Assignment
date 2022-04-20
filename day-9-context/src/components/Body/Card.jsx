import React from "react";


import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
export const Card=()=> {
    const {handleChange}=useContext(CartContext)
  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        padding: "10px",
        background: "teal",
        display: "flex",
      }}>
      <button style={{
          height:"50px",
      }} onClick ={()=>{
          handleChange(1)}}>Add to Cart</button>
    </div>
  );
}

