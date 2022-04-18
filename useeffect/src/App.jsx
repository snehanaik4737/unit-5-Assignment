import "./App.css"
import { Todos } from './Todos';
import {useState} from "react"
function App() {
 
  const [show,setShow]=useState(true);



  return (
    <div className="App">
     {show ? <Todos/>: null}
     {/* {todo.map((todo)=>(
       <div>{todo.title}</div>
     ))} */}
    <button onClick ={()=>{
      setShow(!show);
    }}>{show? "Hide":"Show"}Todos</button>
    </div>
  )
}


export default App
