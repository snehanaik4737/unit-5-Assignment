import { useState } from "react"
import { useEffect } from "react";

export const Counter=()=>{
    const[count,setCount]= useState(10);
    
    useEffect(()=>{
       let id= setInterval(()=>{
            setCount((prev)=>{
                if(prev<=0){
                   clearInterval(id);
                   return 0;
                }
                return prev-1
            })
        },1000)

        return function cleanup(){
            clearInterval(id);
        }

    },[])

    return (
    <div><h3>Count:{count}</h3></div>

    )
}