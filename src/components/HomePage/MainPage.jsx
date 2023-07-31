import React from "react";
import "./MainPage.css";

import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import AdvertisementFour from "./AdvertisementFour/AdvertisementFour";
import AdvertisementBelt from "./AdvertisementBelt/AdvertisementBelt";
import ImageSlider from "./ImageSlider";

const MainPage = () => {
  const content = [
    {
      header: "Up to 70% off | Styles for men",
      image1:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/menClothing1.jpg?updatedAt=1689756576773",
      image2:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/menClothing2.jpg?updatedAt=1689756576754",
      image3:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/menClothing3.jpg?updatedAt=1689756576783",
      image4:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/menClothing4.jpg?updatedAt=1689756576471",
    },

    {
      header: "Up to 70% off | Styles for women",
      image1:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/womenClothing1.jpg?updatedAt=1689758174413",
      image2:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/womenClothing2.jpg?updatedAt=1689758174537",
      image3:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/womenClothing3.jpg?updatedAt=1689758174422",
      image4:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/womenClothing4_.jpg?updatedAt=1689758174380",
    },

    {
      header: "Appliances for your home | Up to 55% off",
      image1:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/Appliances2.jpg?updatedAt=1689759776873",
      image2:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/Appliances3.jpg?updatedAt=1689759776910",
      image3:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/Appliances4.jpg?updatedAt=1689759776910",
      image4:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/Appliances1.jpg?updatedAt=1689759777220",
    },

    {
      header: "Offers on travel tickets",
      image1:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/travel1.jpg?updatedAt=1689760782642",
      image2:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/travel2.jpg?updatedAt=1689760782495",
      image3:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/travel3.jpg?updatedAt=1689760782475",
      image4:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/travel4.jpg?updatedAt=1689760782344",
    },
  ];

  const singleContent = [
    {
      header: "Up to 70% off | Electronics Clearance store",
      image:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/laptopImage.jpg?updatedAt=1689756114709",
    },

    {
      header: "Up to 50% off | Laptops",
      image:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/laptopImage1.jpg?updatedAt=1689758748274",
    },

    {
      header: "Up to 80% off | Home & Kitchen",
      image:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/box2_2.jpg?updatedAt=1689420278596",
    },
    {
      header: "50% off on selling fee*",
      image:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/sellingfee.jpg?updatedAt=1689761290037",
    },
  ];

  return (
    <div className="mainpage">
      <ImageSlider />;
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          top: "-350px",
        }}
      >
        <AdvertisementOne singleContent={singleContent[0]} />
        <AdvertisementFour content={content[0]} />
        <AdvertisementOne singleContent={singleContent[1]} />
        <AdvertisementFour content={content[1]} />
        <AdvertisementOne singleContent={singleContent[2]} />
        <AdvertisementFour content={content[2]} />
        <AdvertisementFour content={content[3]} />
        <AdvertisementOne singleContent={singleContent[3]} />
        <AdvertisementBelt />
      </div>
    </div>
  );
};

export default MainPage;
