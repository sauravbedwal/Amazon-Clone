import React from "react";
import "./advertisementBelt.css";
import { useNavigate } from "react-router-dom";

const AdvertisementBelt = () => {
  const navigate = useNavigate();

  const cardClick = () => {
    navigate(`/display-content`);
  };
  return (
    <div className="advertisementBelt_main" onClick={cardClick}>
      <div className="advertisementBelt_header">Grocery & Gourmet</div>
      <div className="advertisementBelt_body">
        <img src="https://ik.imagekit.io/amazonzlone15/amazon-image/gor1.jpg?updatedAt=1689761166748" />
        <img src="https://ik.imagekit.io/amazonzlone15/amazon-image/gor4.jpg?updatedAt=1689761166353" />
        <img src="https://ik.imagekit.io/amazonzlone15/amazon-image/gor2.jpg?updatedAt=1689761166760" />
        <img src="https://ik.imagekit.io/amazonzlone15/amazon-image/gor5.jpg?updatedAt=1689761166333" />
        <img src="https://ik.imagekit.io/amazonzlone15/amazon-image/gor3.jpg?updatedAt=1689761166750" />
        <img src="https://ik.imagekit.io/amazonzlone15/amazon-image/gor6.jpg?updatedAt=1689761291614" />
      </div>
    </div>
  );
};

export default AdvertisementBelt;
