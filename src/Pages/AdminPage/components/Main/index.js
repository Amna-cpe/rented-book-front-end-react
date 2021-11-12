import React, { useState } from "react";
import "./style.css";

function Index() {
  const [password, setPassword] = useState("");

  return (
    <div className="main-admin">
      <div className="login-card">
        {/* admin login text */}
        <h1>Admin Login</h1>

        {/* password field */}
        <input className='password' placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        {/* submit button */}
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Index;
