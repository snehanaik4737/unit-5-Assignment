import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import {Routes,Route} from "react-router-dom"
import {Link} from "react-router-dom"
import { AuthContext } from "./contexts/AuthContext";
import { useContext, useState } from "react";

function App() {

  const {isAuth} =useContext(AuthContext);
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {isAuth? (
       
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>

        ):(
          <Link className="nav-login" to="/login">
          Login
        </Link>

        )}
        {/* Show either login or logout below */}
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
         
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
   <Route path="/orders" element={<Orders/>}> </Route>
       <Route path="/" element={<Home/>}> </Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/logout" element={<Logout/>}></Route>


      </Routes>
    </div>
  );
}

export default App;