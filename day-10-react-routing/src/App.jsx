
import './App.css'
import {Routes,Route} from "react-router-dom"
import {About} from "./components/About";
import {Home} from "./components/Home"
import {Navbar} from "./components/Navbar"
import { UserList } from './components/UsersList';
import { UserDetails } from './components/UserDetails';
import { PrivateComponent } from './components/PrivateComponent';
import {Login} from "./components/Login"

function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="users/:id"
        element={
          <PrivateComponent><UserDetails/></PrivateComponent>
        }>
        </Route>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/users" element={<UserList/>}> </Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/users/:id" element={<UserDetails/>}> </Route> */}
      </Routes>

    </div>
  )
}

export default App
