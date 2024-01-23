import React, {useContext,useState,useEffect} from "react";
import "./SideBar.css";
import {personsImgs} from "../../assets/images/images";
import {navigationLinks} from "../../data/Data"
import {SidebarContext} from "../../context/sidebarContext";

const SideBar = () => {
    const [activeLinkIdx] = useState(1);
    const [sidebarClass,setSidebarClass] = useState("");
    const {isSideBarOpen} =useContext(SidebarContext);
    useEffect(() => {
        if(isSideBarOpen){
          setSidebarClass('sidebar-change');
        } else {
          setSidebarClass('');
        }
      }, [isSideBarOpen]);
    return (
        <div className={`sidebar ${sidebarClass}`}>
            <div className="user-info">
                <div className="info-img img-fit-cover">
                    <img src={personsImgs.person_two} alt=""/>
                </div>
                <span className="info-name">UserName</span>
            </div>
            <div className="navigation">
                <ul className="nav-list">
                    {navigationLinks.map((navigation) => (
                        <li className="nav-item" key={navigation.id}>
                            <a href="/" className={`nav-link ${navigation.id === activeLinkIdx ? "active" : ""}`}>{navigation.icon({width:22,height:22,fill:"#000"})}<span className="nav-link-text">{navigation.title}</span></a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar
