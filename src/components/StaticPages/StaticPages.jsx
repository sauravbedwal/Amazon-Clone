import React from "react";
import "./StaticPages.css";
import { useLocation } from "react-router-dom";

const StaticPages = () => {
  const location = useLocation();
  const img1 = location.state?.img1;
  const img2 = location.state?.img2;
  const img3 = location.state?.img3;
  const img4 = location.state?.img4;
  return (
    <div className="staticPages_container">
      <div className="staticPages_imagebox">
        <img src={img1} height="100%" width="100%" />
      </div>
      <div className="staticPages_imagebox">
        <img src={img2} height="100%" width="100%" />
      </div>
      <div className="staticPages_imagebox">
        <img src={img3} height="100%" width="100%" />
      </div>
      <div className="staticPages_imagebox">
        <img src={img4} height="100%" width="100%" />
      </div>
    </div>
  );
};

export default StaticPages;
