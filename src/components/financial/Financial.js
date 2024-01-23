import React from "react";
import "./Financial.css"
import {plusIcon} from "../../helpers/Icon";

const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Financial Advice</h3>
            <button className="grid-c-title-icon">{plusIcon({width:20,height:20})}</button>
        </div>
        <div className="grid-c8-content">
            <p className="text text-silver-v1">Ipsum dolor sit amet consectetur, adipisicing elit.
                Iste, vitae.....</p>
        </div>
    </div>
  )
}

export default Financial