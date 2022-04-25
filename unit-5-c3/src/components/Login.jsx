
import axios from "axios"
import { AuthContext } from "./contexts/AuthContext";
import { useContext ,useState } from "react";
import { useNavigate } from "react-router-dom"; 
export const Login = () => {
    //  use reqres to log user in.
    const {handleAuth} =useContext(AuthContext)
    const navigate =useNavigate()

    const [regUser,setUser] =useState("")


    const getData =(res)=>{
      console.log(res)
      setUser(res.data.token)
      handleAuth(true);
      navigate(-1,{replace:true});

    }
    

    const handleSubmit=(e)=>{
      e.preventDefault();
      const payload={
        email:"eve.holt@reqres.in",
        password: "cityslicka",
       
     };
       axios.post("https://reqres.in/api/login",payload).then((res)=>{ getData(res)
     })
    }
   

    return (
      <form className="loginform" onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <input type="submit" value="SIGN IN" className="login_submit" />
      </form>
    );
  };