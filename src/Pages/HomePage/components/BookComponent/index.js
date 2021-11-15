import React from "react";
import "./style.css";

export default function BookComponent() {
  return (
    <div className="BookCard">
      <div className="bookImgDiv">
        <img alt='img' className="BookImg" src={"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg"} />
      </div>

      <div className="BookDetails">
        {/* title */}
        <div className="BookName">{"the midnight library"}</div>
        {/* price */}
        <div>
          <h3 className="price">12 KD.</h3>
        </div>
      </div>
    </div>
  );
}
