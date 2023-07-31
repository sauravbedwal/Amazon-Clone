import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const existingCart =
    localStorage.getItem("myCart") != undefined
      ? JSON.parse(localStorage.getItem("myCart"))
      : [];

  const cardAmount = existingCart.length;

  const [item, setItem] = useState(existingCart);

  const [size, setSize] = useState(cardAmount);

  const [result, setResult] = useState([]);

  const [searchFilter, setSearchFilter] = useState([]);

  const [log, setLog] = useState([]);

  const [price, setPrice] = useState(0);

  const [itemCount, setItemCount] = useState(1);

  const [qty, setQty] = useState(1);

  const [qtyId, setQtyId] = useState(0);

  const increment = (value) => {
    setItem((prevItem) => [...prevItem, value]);
  };

  useEffect(() => {
    saveToLocalStorage();
    setSize(item.length);
  }, [item]);

  const decrement = (value) => {
    const removeItem = item.filter((input) => {
      return input !== value;
    });
    setItem(removeItem);
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("myCart", JSON.stringify(item));
  };

  const filterProducts = (arr, value, field, field2 = "") => {
    const filteredProducts = arr.filter((input) => {
      return field2 == ""
        ? input[field] === value
        : Math.floor(input[field][field2]) === value;
    });
    setResult(filteredProducts);
  };

  const searchProducts = (arr, value) => {
    const searchArr = arr.filter((input) => {
      return (
        input?.title?.toLowerCase().includes(value) ||
        input?.description?.toLowerCase().includes(value)
      );
    });
    setSearchFilter(searchArr);
  };

  const quantityItem = (product, number) => {
    setQtyId(product);
    setQty(number);
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          item,
          size,
          increment,
          filterProducts,
          result,
          searchProducts,
          searchFilter,
          log,
          setLog,
          price,
          setPrice,
          decrement,
          quantityItem,
          qty,
          qtyId,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
