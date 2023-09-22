import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import Grid from "@mui/material/Grid";
import { Paper, Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../CartContext";
import Loader from "../Loader/Loader";

const PlaceOrder = (props) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const { item, size, increment } = useContext(CartContext);
  const [productInfo, setProductInfo] = useState({});
  const params = useParams();
  // console.log(params);                   //taking the id from url by using useParams

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${params.id}`
        );

        if (!response.ok) {
          throw new Error(`API failed status : ${response.status}`);
        }
        const data = await response.json();
        // console.log(data);
        setProductInfo(data);
      } catch (e) {
        setError(e.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  const desc = productInfo?.description;
  // console.log(desc);
  const partsArray = desc ? desc.split(`, `) : [];
  // console.log(partsArray);

  const addToCart = () => {
    if (item.includes(productInfo)) {
      return;
    } else {
      increment(productInfo);
    }
  };

  if (loading) {
    //useState loading
    return <Loader />;
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <img className="placeorder__image" src={productInfo.image} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="placeorder__description">
            <div
              style={{
                fontSize: "24px",
                lineHeight: "32px",
                fontWeight: "500",
              }}
            >
              {productInfo?.title}
            </div>

            <div
              style={{
                margin: "10px 0px",
              }}
            >
              <Rating
                name="read-only"
                value={Math.floor(productInfo?.rating?.rate)}
                readOnly
                style={{ fontSize: "20px" }}
              />
              {productInfo?.rating?.count} ratings 1000+ answered questions
            </div>
            <hr></hr>
            <div>
              <div className="textgap">
                <span className="pricetag">Price: ₹{productInfo?.price}</span>
              </div>
              <div
                className="textgap"
                style={{ fontSize: "14px", color: "gray" }}
              >
                Inclusive of all taxes
              </div>
              <div className="textgap">
                FREE delivery: <strong>Wednesday, Aug 18</strong>
              </div>
              <div className="textgap">
                EMI starts at 2,401. No Cost EMI available
              </div>
              <div
                style={{ color: "#007600", fontSize: "20px" }}
                className="textgap"
              >
                In stock
              </div>
              <div className="textgap">
                Sold in <strong>{productInfo?.category}</strong> and Fulfilled
                by Amazon.
              </div>
            </div>
            <hr></hr>
            <div className="placeorder_icons">
              <span>
                <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" />
                <p>Free Delivery</p>
              </span>
              <span>
                <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" />
                <p>7 days </p>
                <p>Replacement</p>
              </span>
              <span>
                <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png" />
                <p>Top Brand</p>
              </span>
              <span>
                <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" />
                <p>Warranty Policy</p>
              </span>
              <span>
                <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png" />
                <p>Secure </p>
                <p>Transaction</p>
              </span>
            </div>
            <hr></hr>

            <div>
              <br></br>
              <div
                style={{
                  fontSize: "24px",
                  margin: "10px 0px",
                  fontWeight: "600",
                }}
              >
                About this item
              </div>
              <div style={{ marginBottom: "70px" }}>
                <ul className="placeorder__list">
                  {partsArray != undefined ? (
                    partsArray.map((item) => <li>{item}</li>)
                  ) : (
                    <span></span>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Paper variant="outlined" className="placeorder__order">
            <div>
              <div>
                <strong>Price per Item</strong>
              </div>
              <div style={{ lineHeight: "25px" }}>{productInfo?.price}</div>
              <div style={{ marginTop: "10px" }}>
                <strong>Category</strong>
              </div>
              <div>
                <div style={{ lineHeight: "25px" }}>
                  {productInfo?.category}
                </div>
              </div>
              <div>
                <button
                  className="placeorder__button addtocart"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
                <Link to="/checkout">
                  <button
                    className="placeorder__button buynow"
                    onClick={addToCart}
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlaceOrder;
