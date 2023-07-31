import React, { useContext, useEffect, useState } from "react";
import "./Search.css";
import { CartContext } from "../../../CartContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const { searchProducts } = useContext(CartContext);

  const [element, setElement] = useState([]);

  const [type, setType] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`
      );
      const data = await response.json();
      setElement(data);
    })();
  }, []);

  const onInputChange = (e) => {
    setType(e.target.value);
    searchProducts(element, type);
  };

  const onClickChange = () => {
    navigate("/display-content");
    searchProducts(element, type);
  };

  return (
    <div className="navbar__searchcomponent">
      <div className="dropdown-div">
        <select className="nav__dropdown">
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
          type="text"
          className="navbar__searchox"
          placeholder="  Search Amazon.in"
          value={type}
          onChange={onInputChange}
          onClick={onClickChange}
        />
      </div>
      <div className="navbar__searchboxdiv">
        <div className="navbar__searchicon" onClick={onClickChange}></div>
      </div>
    </div>
  );
};

export default Search;
