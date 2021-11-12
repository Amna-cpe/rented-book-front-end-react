import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import logo from "./LOGO.png";

import { useLocation, Link } from "react-router-dom";

function Index() {
  const location = useLocation();

  const addRef = useRef();
  const removeRef = useRef();
  const topRef = useRef();

  // useEffect(() => {
  //   console.log("change?");
  //   if (location.pathname === "/admin/add-book") {
  //     addRef.current.id += "active";
  //     removeRef.current.id = "";
  //   } else if (location.pathname === "/admin/remove-book") {
  //     removeRef.current.id = "active";
  //     addRef.current.id = "";
  //   }
  // }, [location]);

  const loadTopNav = () => {
    let classes = topRef.current.className.split(" ");

    if (classes[1]) {
      topRef.current.className = "side-controllers";
    } else {
      // removeRef.current.innerHtml="X";
      topRef.current.className += " show";
    }
  };

  return (
    <div className="side">
      {/* logo */}
      <div className="logo-holder">
        <img src={logo} className="logo" />
        <h3>Bookq8</h3>
        <h1 onClick={loadTopNav} ref={removeRef}>
          |||
        </h1>
      </div>
      {/* Add Text */}
      <div className="side-controllers" ref={topRef}>
        <div className="side-text" ref={addRef}>
          <Link to={"/2"}>
            <p>فلسفه</p>
          </Link>
        </div>
        {/* Remove Book Text */}
        <div className="side-text" ref={removeRef}>
          <Link to={"/2"}>
            {" "}
            <p>تاريخ</p>
          </Link>
        </div>
        <div className="side-text">
          <Link to={"/2"}>
            {" "}
            <p>ادب روسي</p>
          </Link>
        </div>
        <div className="side-text">
          <Link to={"/2"}>
            {" "}
            <p>ادب انجليزي</p>
          </Link>
        </div>
        <div className="side-text">
          <Link to={"/2"}>
            {" "}
            <p>روايات انجليزيه</p>
          </Link>
        </div>
        <div className="side-text">
          <Link to={"/2"}>
            {" "}
            <p>روايات عربيه</p>
          </Link>
        </div>
        <div className="side-text">
          <Link to={"/2"}>
            {" "}
            <p>تاريخ</p>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <small>Created By Amna Jasser </small>
      </footer>
    </div>
  );
}

export default Index;
