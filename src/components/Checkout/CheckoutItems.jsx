import React, { useContext } from "react";
import "./Checkout.css";
import { CartContext } from "../../CartContext";

const CheckoutItems = ({ product }) => {
  const { decrement, quantityItem } = useContext(CartContext);

  const onDeleteItem = () => {
    decrement(product);
  };

  const onSelectClick = (e) => {
    const number = e.target.value;
    quantityItem(product.id, number);
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid #E7E7E7",
          width: "95%",
          height: "280px",
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
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              display: "block",
              margin: "0 auto",
            }}
            src={product.image}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <div style={{ fontSize: "20px" }} className="textgap">
            {product.title}
          </div>
          <div style={{ fontWeight: "bold" }} className="textgap">
            ₹{product.price}
          </div>
          <div
            className="textgap"
            style={{ color: "#007600", fontSize: "20px" }}
          >
            In Stock
          </div>
          <div className="delivery_item">
            <img
              src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
              height="30px"
            />
            <p style={{ fontSize: "12px" }}>Free Delivery</p>
          </div>
          <div className="textgap delivery_item" style={{ fontSize: "13px" }}>
            <b>FREE</b> Delivery by Amazon
          </div>
          <div className="textgap dropdown_items" style={{ marginTop: "20px" }}>
            <select className="checkout_dropdown" onClick={onSelectClick}>
              <option>Qty: 1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10+</option>
            </select>
            <span style={{ marginLeft: "15px" }}>|</span>
            <button
              className="checkout__buttons"
              onClick={() => {
                onDeleteItem(product);
              }}
            >
              Delete
            </button>
            <span style={{ marginLeft: "10px" }}>|</span>
            <button className="checkout__buttons">See more like this</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
