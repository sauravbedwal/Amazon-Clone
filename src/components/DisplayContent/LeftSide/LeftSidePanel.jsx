import React, { useContext, useEffect, useState } from "react";
import "./LeftSide.css";
import { CartContext } from "../../../CartContext";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const LeftSidePanel = () => {
  const [error, setError] = useState("");

  const { filterProducts, searchProducts } = useContext(CartContext);
  const [element, setElement] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`
        );

        if (!response.ok) {
          throw new Error(`API failed status : ${response.status}`);
        }
        const data = await response.json();
        // console.log(data);
        setElement(data);
      } catch (e) {
        setError(e.message);
        console.log(error);
      }
    })();
  }, []);

  const getUniqueData = (element, field) => {
    let val = element?.map((elem) => {
      return elem[field];
    });
    let newVal = [...new Set(val)];
    return newVal;

    // console.log(newVal);
  };

  const categoryData = getUniqueData(element, "category");

  const ratingData = getUniqueData(element, "rating");

  const rateData = getUniqueData(ratingData, "rate");

  const uniqueNumbers = Array.from(
    new Set(rateData.map((elem) => Math.floor(elem)))
  );

  const uniqueNumber = [...uniqueNumbers, 5];
  uniqueNumber.sort().reverse();

  const boxClick = (e) => {
    filterProducts(element, e.target.innerText, "category");
  };

  const allClick = () => {
    searchProducts(element, "");
  };

  const starClick = (elem) => {
    // console.log(ratingData);
    // console.log(rateData);
    // console.log(uniqueNumber);
    // console.log(sortUniqueNumber);

    filterProducts(element, elem, "rating", "rate");
    console.log("aaja", elem);
  };

  return (
    <div className="LeftSide__main">
      <div className="LeftSide__header">Category</div>
      <div className="LeftSide__brandname">
        <div onClick={allClick}>
          <label className="brandname">
            <input type="radio" name="options" value="All" />
            All
          </label>
        </div>
        {categoryData.map((elem) => {
          return (
            <div onClick={boxClick}>
              <label className="brandname">
                <input type="radio" name="options" value={elem} /*id={elem}*/ />
                {elem}
              </label>
            </div>
          );
        })}

        <div className="LeftSide__header" style={{ marginTop: "50px" }}>
          Avg. Customer Review
        </div>
        {uniqueNumber.map((elem) => {
          return (
            <div>
              <Stack
                className="brandname"
                spacing={1}
                onClick={() => {
                  starClick(elem);
                }}
              >
                <Rating
                  className="starRatingMobile"
                  sx={{ fontSize: "20px" }}
                  name="stars"
                  defaultValue={elem}
                  // precision={0.5}
                  readOnly
                  key={elem}
                />
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSidePanel;
