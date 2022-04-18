import { useState,useEffect } from "react"
import axios from "axios"



export const Todos =()=>{
   
    const [todo,setTodos]=useState([])

    const [text,setText]=useState("")

    const [loading,setLoading]=useState(true)

    const [page,setPage]=useState(1)

    useEffect(()=>{
      console.log("Mounted todos")
         getData();

         return function cleanup(){
           console.log("Unmounted todos done")
         }

       },[page]);

  const getData= async ()=>{
    const data = await fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`).then((d)=>
          d.json());
            setTodos(data);
            setLoading(false)
  }

    return loading ? 
    ("Loading..."): (
     <div>
        <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="enter todo"/>
       <button onClick={()=>{
           const payload={
               title:text,
               status:false
           };
        //    fetch("http://localhost:8080/todos",{
        //        method:"POST",
        //        headers:{
        //            "content-type":"application/json"
        //        },
        //        body:JSON.stringify(payload)
        //    }).then(()=>{ getData()
        // })
        axios.post("http://localhost:8080/todos",payload).then(()=>{ getData()
         })
       }}>Add todo</button>
      {todo.map((todo)=>(
       <div>{todo.title}</div>
     ))}

    <button onClick={()=>{
      setPage(page-1)
    }}>Prev</button>
    <button onClick={()=>{
      setPage(page+1)
    }}>next</button>
  


    </div>
    );
}