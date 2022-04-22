import { createContext, useState } from "react";


 export const ThemeContext=createContext();


 export const ThemeContextProvider=({children})=>{
   
    const [theme,setTheme]=useState(false)
    
    function toggleAuth(){
        console.log("hi",theme)
      setTheme(!theme)
    }

    return <ThemeContext.Provider value ={{theme,toggleAuth}}>
      {children}
    </ThemeContext.Provider>
}