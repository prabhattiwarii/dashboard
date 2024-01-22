import React from "react";
import "./Content.css";
import ContentTop from "../../components/contenttop/ContentTop";
import ContentMain from "../../components/contentmain/ContentMain";

const Content = () => {
  return (
    <div className='main-content'>
        <ContentTop/>
        <ContentMain/>
    </div>
  )
}

export default Content