import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo,getTodos,deleteTodo,sort,filter} from "../Redux/Todos/action"


export const Todos =()=>{
const todos=useSelector(store=>store.todos.todos)
const dispatch= useDispatch();
const handleAdd=()=>{
    // dispatch(
        //     addTodo({
    //         title:text,
    //         status:false,
    //     })
    // )
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



const [text,setText]=useState("")
const [filter,setFilter] =useState("")

console.log("rendering todos")
return <div>
        <input type="text" placeholder="Filter todo" onChange={(e)=>{
          setFilter(e.target.value)
        }}></input>
     <select onChange={(e)=>{
         dispatch(sort(e.target.value))
        
     }}>
         <option value="id">Sort by id</option>
         <option value="status">Sort by status</option>
         <option value="title">Sort by Title</option>
         </select>
        
        <input value={text} type="text" onChange={(e)=>setText(e.target.value)}/>
    <button onClick={handleAdd}>add todo</button>
    {todos.filter(todo=>todo.title.includes(filter)).map((t)=>(
        <div key ={t.title}>{t.id}.{t.title}-{t.status? "Done":"Not done"}
        {todos.map((t)=>(
            <div key={t.title}>{t.title}</div>
        ))}
       
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

//