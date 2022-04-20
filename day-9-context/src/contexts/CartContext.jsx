import { createContext, useState } from "react";


 export const CartContext=createContext();


 export const CartContextProvider=({children})=>{

    const handleChange = (inc)=>{
       setCart(cart+inc);
    }
    const [cart,setCart]=useState(0);
    return <CartContext.Provider value ={{cart,handleChange}}>
      {children}
    </CartContext.Provider>
}