import React, { useRef } from "react";
import "./style.css";
import logo from "./LOGO.png";
import WHATSAPP_LOGO from "./whatsapp.png";

function Index() {
  const removeRef = useRef();
  const topRef = useRef();


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
        <img src={logo} className="logo" alt="img" />
        <h3>Bookq8</h3>
        <h1 onClick={loadTopNav} ref={removeRef}>
          |||
        </h1>
      </div>
      {/* Add Text */}
      <div className="side-controllers" ref={topRef}>
        <div className="side-text-home">
          <p>Capture what you want and contact me via whatsapp</p>
        </div>

        <div className="side-text-home">
          <a href="https://wa.me/96566721117" target="_blank" rel="noreferrer">
            <img src={WHATSAPP_LOGO} alt="whatsapp" className="img" />
          </a>
        </div>
      </div>
      <footer className="footer">
        <small>Created By Amna Jasser </small>
      </footer>
    </div>
  );
}

export default Index;
