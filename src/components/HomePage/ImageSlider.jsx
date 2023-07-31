import React, { useState, useEffect } from "react";
import "./ImageSlider.css"; // Assuming you have the CSS styles in a separate file
import { useNavigate } from "react-router-dom";

const ImageSlider = () => {
  const navigate = useNavigate();
  const slides = [
    "https://ik.imagekit.io/amazonzlone15/amazon-image/banner32.jpg?updatedAt=1690730509333",
    "https://ik.imagekit.io/amazonzlone15/amazon-image/banner8.jpg?updatedAt=1689677537988",
    "https://ik.imagekit.io/amazonzlone15/amazon-image/banner6.jpg?updatedAt=1689677400640",
    "https://ik.imagekit.io/amazonzlone15/amazon-image/bbt.jpg?updatedAt=1690788986120",
    "https://ik.imagekit.io/amazonzlone15/amazon-image/banner21.jpg?updatedAt=1690731066400",
    "https://ik.imagekit.io/amazonzlone15/amazon-image/bigimage4.jpg?updatedAt=1689420703232",
    "https://ik.imagekit.io/amazonzlone15/amazon-image/bbr4.jpg?updatedAt=1690788985828",
    "https://ik.imagekit.io/amazonzlone15/amazon-image/banner98.jpg?updatedAt=1690730509185",
    "https://ik.imagekit.io/amazonzlone15/amazon-image/bigimage2.jpg?updatedAt=1689420703188",
    "https://ik.imagekit.io/amazonzlone15/amazon-image/banner23.jpg?updatedAt=1690730581978",
    "https://ik.imagekit.io/amazonzlone15/amazon-image/bbr1.jpg?updatedAt=1690788985989",
  ];

  const staticData = [
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy6.jpg?updatedAt=1690388454263",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy9.jpg?updatedAt=1690388454232",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy7.jpg?updatedAt=1690388454334",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy11.jpg?updatedAt=1690388454331",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy12.gif?updatedAt=1690388510895",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy18.jpg?updatedAt=1690388572418",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy8.jpg?updatedAt=1690388454266",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b3.jpg?updatedAt=1690729810880",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy15.jpg?updatedAt=1690388695828",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy14.jpg?updatedAt=1690388623134",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/b12.jpg?updatedAt=1690730091457",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b13.jpg?updatedAt=1690730091483",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy13.jpg?updatedAt=1690388572074",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy16.jpg?updatedAt=1690388695845",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/b5.jpg?updatedAt=1690729810818",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b4.jpg?updatedAt=1690729810873",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/b1.jpg?updatedAt=1690729810855",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/b6.jpg?updatedAt=1690729810847",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/b5.jpg?updatedAt=1690729810818",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b5.jpg?updatedAt=1690729810818",
    },
  ];
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const slideClick = () => {
    navigate("/static-pages", {
      state: staticData[Math.floor(Math.random() * 4)],
    });
  };
  return (
    <div className="slider-container">
      <div className="main">
        {slides.map((slide, index) => (
          <div
            onClick={slideClick}
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${slide})`,
              transform: `translateX(${(index - counter) * 100}%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
