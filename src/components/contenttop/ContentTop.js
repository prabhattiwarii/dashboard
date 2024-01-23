import React,{useContext} from "react";
import "./ContentTop.css";
import {SidebarContext} from "../../context/sidebarContext";
import {menuIcon,bellIcon,serachIcon} from "../../helpers/Icon"
const ContentTop = () => {
    const {toggleSidebar} = useContext(SidebarContext);
  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar()}>{menuIcon({width:20,height:22})}</button>
            <h3 className="content-top-title">Home</h3>
        </div>
        <div className="content-top-btns">
            <button type="button" className="search-btn content-top-btn">
            {serachIcon({width:20,height:22})}
            </button>
            <button className="notification-btn content-top-btn">
            {bellIcon({width:20,height:22})}
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
  )
}

export default ContentTop