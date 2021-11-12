import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import NotifyModal from "../NotifyModal"

function AddBook() {
  const [name, setName] = useState("");
  const [image, setImg] = useState(null);
  const [price, setPrice] = useState(null);
  const [Id, setId] = useState(null);
  const [success, setSuccess] = useState(false)
  const [msg, setMsg] = useState("")
  const [sent, setSent] = useState(false);
  const [some, setSome] = useState(false);

  const disapear = () => {
    setTimeout(() => setSome(true), 400);
  };

  const uploadImage = (e) => {
    const img = e.target.files[0];
    setImg(img);
  };

  const submit = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("id", Id);

    axios
      .post("http://localhost:8080/api/v1/add-book", formData)
      .then((res) => {
        console.log(res.data);
        console.log("uploaded succefully");
        setSuccess(true);
        setMsg("Book has been added Succefully");
      })
      .catch((error) => {
        console.log("*****  " + error);
        setMsg("Simething went wrong");

        
      });

    setName("");
    setPrice(null);
    setImg(null);
    setId(null);

    setSent(true);

    setTimeout(() => {
      setSome(true);
    }, 6000);
  };

  return (
    <div className="main-add-book">
      <div className="login-card">
        {/* admin login text */}
        <h1>Add Book</h1>

        {/* password field */}
        <input
          className="input"
          placeholder="Book Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="file" className="input" onChange={uploadImage} />
        <input
          className="input"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="input"
          placeholder="ID"
          value={Id}
          onChange={(e) => setId(e.target.value)}
        />

        {/* submit button */}
        <button className="login-btn" onClick={submit}>
          Add
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

export default AddBook;
