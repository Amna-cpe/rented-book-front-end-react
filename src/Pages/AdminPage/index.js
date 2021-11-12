import React from "react";
import "./index.css";
import Side from "./components/Side";
import Main from "./components/Main";
import AddBook from "./components/AddBook";
import RemoveBook from "./components/RemoveBook";


import { Routes, Route   } from "react-router-dom";

export default function Index() {
 
 
  return (
    <div className="admin-page">
      {/* if the path is '/admin' it is MAIN 
        if /admin/add-book add component
        if /admin/remove-book add component
        */}
      <Side />
      
      <Routes>
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/remove-book" element={<RemoveBook />} />
        {/* this should be protected if logged in redirect to add book */}
        <Route path="/" element={<Main />} />  
      </Routes>
    </div>
  );
}
