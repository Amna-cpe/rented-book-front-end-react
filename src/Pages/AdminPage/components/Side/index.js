import React, { useRef, useEffect } from "react";
import "./style.css";
import logo from "./LOGO.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import {useAuthDispatch, useAuthState} from "../../../../Context/AuthContext"

function Index() {
  const location = useLocation();
  const navigate = useNavigate();
  const {authenticated} = useAuthState();
  const AuthDispatch = useAuthDispatch();

  const addRef = useRef();
  const removeRef = useRef();

  const logout = () => {
    window.localStorage.setItem("token", "");
    navigate('/admin', { replace: true })
    AuthDispatch("LOG_OUT");   
  };

  useEffect(() => {
    console.log("change?");
    if (location.pathname === "/admin/add-book" && addRef.current && removeRef.current) {
      addRef.current.id += "active";
      removeRef.current.id = "";
    } else if (location.pathname === "/admin/remove-book"&& addRef.current && removeRef.current) {
      removeRef.current.id = "active";
      addRef.current.id = "";
    }
  }, [location]);

  return (
    <div className="side-admin">
      {/* logo */}
      <img src={logo} className="logo" alt="img" />
      {/* Add Text */}
      {authenticated && (
        <div className="side-controllers-admin">
          <div className="side-text" ref={addRef}>
            <Link to="/admin/add-book">
              <p>Add Book</p>
            </Link>
          </div>
          {/* Remove Book Text */}
          <div className="side-text" ref={removeRef}>
            <Link to="/admin/remove-book">
              <p>Remove Book</p>
            </Link>
          </div>
          <div className="side-text" onClick={logout}>
            <p>Log out</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;
