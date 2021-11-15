import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import {useAuthDispatch} from "../../../../Context/AuthContext"
import axios from "axios";
import "./style.css";

function Index() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const AuthDispatch = useAuthDispatch();
  

  const authenticate= ()=>{
    axios.post("http://localhost:8080/api/v1/authenticate",{"password":password})
    .then(res=>{
      
      // set to the local storage
      window.localStorage.setItem("token",res.data.jwt);
      // redirect to add-book page
      navigate("/admin/add-book");
      AuthDispatch("LOG_IN", window.localStorage.getItem("token"))
    })
    .catch(err=>console.log(err))
  }
  useEffect(() => {

   
    
  }, [])

  return (
    <div className="main-admin">
      <div className="login-card">
        {/* admin login text */}
        <h1>Admin Login</h1>

        {/* password field */}
        <input className='password' placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        {/* submit button */}
        <button className="login-btn" onClick={authenticate}>Login</button>
      </div>
    </div>
  );
}

export default Index;
