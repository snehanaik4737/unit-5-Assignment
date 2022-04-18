import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./Todoitem";
import {nanoid} from "nanoid"

function Todo(){
    const [todoList,settodoList] = useState([]);
    const getData=(todo)=>{
        const payload={
            title:todo,
            status:false,
            id:nanoid(5),
        }
        settodoList([...todoList,payload])
    }


    const handlestatus =(id)=>{
    // console.log(id)
    settodoList([...todoList.map((e)=>e.id===id ? {...e,status:!e.status}:e)])
    };
    return(
        <div>
           
         {todoList.map((e)=>(
            <TodoItem handlestatus={handlestatus} todo={e}/>
         ))}
          <TodoInput getData={getData}/>
         </div>
    )
}
export {Todo}