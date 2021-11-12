import React from "react";
import "./style.css";

import DisplayBlock from "./components/DisplayBlock"
import Side from "./components/Side";

import axios from "axios";
import useSWR, { SWRConfig } from "swr";




export default function Index() {

  const fetchFunction = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      return data;
    } catch (error) {
      throw error.response.data;
    }
  };
  return (


    <div className="home-page">
      {/* Side To choose category from */}
      <Side />
      {/* Display blocks */}
      <DisplayBlock />
    
    </div>
   
  );
}
