
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

import React from "react";
import { LangContext } from "../contexts/LanguageContext";

export const Navbar=()=> {

    const {cart} = useContext(CartContext)

    const {lang} =useContext(LangContext);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        padding: "15px",
        fontSize: "28px",
        margin: "10px",
        border: "1px solid red",
      }}
    >
      {/* Cart:{cart} */}

     {lang==="en" ? "Cart":"Thaila"}:{cart} 
    </nav>
  );
}

