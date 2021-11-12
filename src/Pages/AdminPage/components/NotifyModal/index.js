import React from 'react'
import classnames from "classnames";
import "./style.css"

function NotifyModal({sent,some,disapear,message,success}) {

 
    return (
       
        <div
          className={classnames("alert", { disappear: some })}
          style={{ display: sent ? "" : "none" , backgroundColor: success?"#4caf50":"#c00e0e" }}
        >
          <span className="closebtn" onClick={disapear}>
            &times;
          </span>
         <strong> {message} </strong>
        </div>
    )
}

export default NotifyModal
