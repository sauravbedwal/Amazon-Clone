import React from "react";
import "./AdvertisementOne.css";
import { useNavigate } from "react-router-dom";

const AdvertisementOne = ({ singleContent }) => {
  const navigate = useNavigate();

  const cardClick = () => {
    navigate(`/display-content`);
  };

  return (
    <div className="AdvertisementOne__main" onClick={cardClick}>
      <div className="AdvertisementOne__header">{singleContent?.header}</div>
      <div className="AdvertisementOne__body">
        <img src={singleContent?.image} width="100%" />
      </div>
      <div className="AdvertisementOne__footer">See more</div>
    </div>
  );
};

export default AdvertisementOne;
