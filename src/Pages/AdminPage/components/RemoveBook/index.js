import React, { useState } from "react";
import axios from "axios";
import NotifyModal from "../NotifyModal";

import "./style.css";

function RemoveBook() {
  const [id, setId] = useState("");
  const [sent, setSent] = useState(false);
  const [some, setSome] = useState(false);
  const [msg, setMsg] = useState("")
  const [success, setSuccess] = useState(false)

  const disapear = () => {
    setTimeout(() => setSome(true), 400);
  };

  const removeBook = async () => {
    axios
      .delete(`http://localhost:8080/api/v1/books/${id}`)
      .then((res) => {
        console.log(res.data);
        console.log("deleted succefully");
        setMsg("Book has been removed Succefully")
        setSuccess(true)
      })
      .catch((error) => {
        setMsg("Something went wrong!")
      });

      setId(null);

      setSent(true);

      setTimeout(() => {
        setSome(true);
      }, 6000);
  };
  return (
    <div className="main-remove-book">
      <div className="login-card">
        {/* admin login text */}
        <h1>Remove Book</h1>

        {/*  field */}
        <input
          className="input"
          placeholder="Id of the book"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        {/* submit button */}
        <button className="login-btn" onClick={removeBook}>
          Remove
        </button>

        <NotifyModal
          message={msg}
          sent={sent}
          some={some}
          disapear={disapear}
          success={success}
        />
      </div>
    </div>
  );
}

export default RemoveBook;
