import React, { useState ,useEffect } from "react";
import "./style.css";
import BookComponent from "../BookComponent";
import { Scrollbar } from "react-scrollbars-custom";
import axios from "axios";

function DisplayBlock() {
  const [books,setBooks] = useState([])
  
  // const { data:books, error, revalidate } = useSWR('/books' );
  console.log("the books are",books)

  const f = async()=>{
  
    const res = await axios.get("http://localhost:8080/api/v1/books");
    setBooks(res.data)

  }
  useEffect(() => {
   f();
  }, [])
  return (
    <div className="main">
      <Scrollbar style={{ width: "80vw", height: "90vh" }}>
        <div className="display-block">
          {/* the book component */}

          {
            books?.map(()=><BookComponent />)
          }
         
         
        </div>
      </Scrollbar>
    </div>
  );
}

export default DisplayBlock;
