import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import logo from "./LOGO.png";

import { Link, useLocation } from "react-router-dom";

function Index() {
  const location = useLocation();
  console.log(location);

  const addRef = useRef();
  const removeRef = useRef();

  useEffect(() => {
    console.log("change?");
    if (location.pathname === "/admin/add-book") {
      addRef.current.id += "active";
      removeRef.current.id = "";
    } else if (location.pathname === "/admin/remove-book") {
      removeRef.current.id = "active";
      addRef.current.id = "";
    }
  }, [location]);
  
  return (
    <div className="side-admin">
      {/* logo */}
      <img src={logo} className="logo" />
      {/* Add Text */}
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
        <div className="side-text">
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
