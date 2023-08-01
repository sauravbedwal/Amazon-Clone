import React, { useState, useContext, useEffect } from "react";
import "./Search.css";
import { CartContext } from "../../../CartContext";
import { useNavigate } from "react-router-dom";
import { List, ListItem } from "@mui/material";

const Search = () => {
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const [element, setElement] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch(
        `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`
      );
      const data = await res.json();
      setElement(data);
    })();
  }, []);

  const onInputChange = (e) => {
    setType(e.target.value);
    // searchProducts(element, type);
  };
  const onClickChange = (product) => {
    navigate(`/place-order/${product.id}`);
    setType("");
    // searchProducts(element, type);
  };
  const onIconClick = () => {
    navigate("/display-content");
  };

  return (
    <div className="search-component">
      <div className="dropdown-div">
        <select className="dropdown">
          <option value="All">All</option>
          <option value="Alexa">Alexa</option>
          <option value="Books">Books</option>
          <option value="Baby">Baby</option>
          <option value="Beauty">Beauty</option>
          <option value="Clothes">Clothes</option>
        </select>
      </div>

      <div>
        <input
          type="search"
          placeholder="Search amazon.in"
          className="searchBox"
          value={type}
          onChange={onInputChange}
          // onClick={onClickChange}
        />
        {type && (
          <List className="listy">
            {element
              .filter((product) => product.title.toLowerCase().includes(type))
              .map((product) => (
                <ListItem
                  key={product.id}
                  onClick={() => onClickChange(product)}
                >
                  <div>{product.title}</div>
                </ListItem>
              ))}
          </List>
        )}
      </div>

      <div className="searchbox-div">
        <div className="searchIcon" onClick={onIconClick}></div>
      </div>
    </div>
  );
};

export default Search;
