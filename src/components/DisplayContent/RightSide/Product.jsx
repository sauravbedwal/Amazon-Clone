import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  // console.log(product);
  const navigate = useNavigate();
  const cardClick = () => {
    navigate(`/place-order/${product.id}`);
  };
  return (
    <div className="product__main" onClick={cardClick}>
      {/* // <div className="product__main"> */}
      <div className="product__image">
        <img
          src={product.image}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="product__name">{product.title}</div>
      {/*.slice(0,30)use for short title*/}
      <div className="product__star">
        <Stack spacing={1}>
          <Rating
            sx={{ fontSize: "20px" }}
            name="half-rating"
            defaultValue={Math.floor(product.rating.rate)}
            // precision={0.5}
            readOnly
          />
        </Stack>
        <div className="product__rating">{product.rating.count}</div>
      </div>
      <div className="product__price">
        <CurrencyRupeeIcon sx={{ fontSize: "16px" }} />
        {product.price}
      </div>
      <div className="product__delivery">
        <span className="product__prime">prime</span>
        Get it by <b>Tomorrow,</b>
        <div style={{ padding: "1% 0px" }}>FREE Delivery by Amazon</div>
      </div>
    </div>
  );
};

export default Product;
