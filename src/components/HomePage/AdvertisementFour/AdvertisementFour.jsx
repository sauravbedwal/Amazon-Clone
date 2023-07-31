import React from "react";
import "./AdvertisementFour.css";
import { useNavigate } from "react-router-dom";

const AdvertisementFour = ({ content }) => {
  // console.log(content);
  const navigate = useNavigate();

  const cardClick = () => {
    navigate(`/display-content`);
  };
  return (
    <div className="AdvertisementFour__main" onClick={cardClick}>
      <div className="AdvertisementFour__header">{content.header}</div>
      <div className="AdvertisementFour__body">
        <img src={content.image1} className="add__fourImage" />
        <img src={content.image2} className="add__fourImage" />
        <img src={content.image3} className="add__fourImage" />
        <img src={content.image4} className="add__fourImage" />
      </div>
      <div className="AdvertisementFour__footer">See more</div>
    </div>
  );
};

export default AdvertisementFour;
