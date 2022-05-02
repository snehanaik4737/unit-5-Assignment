import {useState,useEffect} from "react";

import { useDispatch,useSelector } from "react-redux";

import { addTodo,getTodos,deleteTodo,toggleTodo } from "../Redux/action";


export const Todos=()=>{

    const todos=useSelector(store=>store.todos);

    const dispatch=useDispatch();

    const handleAdd=()=>{
        // dispatch(addTodo({
        //     title:text,
        //     status:false,
        // }))
        const payload={
            title:text,
            status:false
        }
        fetch("http://localhost:8080/todos",{
            body:JSON.stringify(payload),
            headers:{
                "content-type":"application/json"
            },
            method:"POST",
        }).then(()=>setText("")).then(()=>{
            dispatch(getTodos());
        })
    }
    
    useEffect(()=>{
        dispatch(getTodos())
    },[])
    

    const [text,setText] =useState("")



    return <div><input type="text" onChange={(e)=>setText(e.target.value)}/>
    <button onClick={handleAdd}>Add Todo</button>
{/*     
    {todos.map((t)=>(
        <div key={t.title}>{t.title}</div>
    ))} */}



{todos.map((t)=>(
        <div key ={t.title}>{t.id}.{t.title}-{t.status? "Done":"Not done"}
        {/* {todos.map((t)=>(
            <div key={t.title}>{t.title}</div>
        ))} */}
       
       {/* //this is for deleting */}
        <button onClick={()=>{
            dispatch(deleteTodo(t.id))
        }}>Delete todo</button>

          <button onClick={()=>{
            dispatch(toggleTodo(t.id))
        }}>Toggle</button>
        
        </div>
    ))}
    
    
    </div>
}