import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <ChatUp/>
    </div>
  )
}



const ChatUp=()=>{
  const [user,setUser] =useState("albert");
  const [text,setText] =useState("");

const handleUpdate=()=>{
  setUser(text);
}
 function subscribe(user){
   console.log(`listening to ${user}`);

   const id=setInterval(()=>{
     console.log(`checking messages from ${user}`);

   },3000);

   return ()=>{
     clearInterval(id);
   }
 }

 useEffect(()=>{
   //subscription happens
   const unsubscribe=subscribe(user);;
   //cleanup
   return()=>{
     console.log(`unsubscribing from ${user}`);
     unsubscribe()
   }
 },[user])

return (
  <div>
    <input onChange={(e)=>setText(e.target.value)} type="text" value={text}></input>

    <button onClick={handleUpdate}>Update</button>
  </div>
)

}
export default App
