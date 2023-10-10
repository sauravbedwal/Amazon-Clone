import React, { useContext } from "react";
import "./Checkout.css";
import { CartContext } from "../../CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutItems = ({ product }) => {
  const { decrement, qtyId, quantityItem, qtyInfo } = useContext(CartContext);

  // const onDeleteItem = (value) => {
  //   decrement(value);
  // };

  const itemQtyInfo = qtyInfo.find((info) => info.id === product.id);

  const qty = itemQtyInfo ? itemQtyInfo.qty : 1;

  const onDeleteItem = (value) => {
    decrement(value);
  };

  const onSelectClick = (e) => {
    const selectedQuantity = parseInt(e.target.value);
    quantityItem(product.id, selectedQuantity);
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid #E7E7E7",
          width: "95%",
          height: "250px",
          margin: "25px",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "25px",
            height: "200px",
            width: "250px",
          }}
        >
          <img
            src={product.image}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ fontSize: "20px" }} className="textgap">
            {product.title}
          </div>
          <div style={{ fontWeight: "bold" }} className="textgap">
            ₹ {product.price}
          </div>
          <div className="textgap" style={{ color: "green" }}>
            In Stock
          </div>
          <div className="textgap delivery_item">
            <img
              src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
              height="30px"
            />
            <p style={{ fontSize: "12px", color: "gray" }}>Amazon Delivered</p>
          </div>
          <div style={{ fontSize: "12px" }} className="textgap delivery_item">
            Eligible for <b style={{ margin: "0 4px 0 4px" }}>FREE</b> Shipping
          </div>

          <div className="textgap dropdown_items" style={{ marginTop: "10px" }}>
            <select
              placeholder="Qty."
              className="checkout_dropdown"
              onChange={onSelectClick}
              value={qty}
            >
              <option value={1}>Qty : 1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
            <span style={{ marginLeft: "15px" }}>|</span>
            <button
              className="checkout_buttons"
              onClick={() => {
                onDeleteItem(product);
              }}
            >
              Delete
            </button>
            <span style={{ marginLeft: "10px" }}>|</span>
            <button className="checkout_buttons">See more like this</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
