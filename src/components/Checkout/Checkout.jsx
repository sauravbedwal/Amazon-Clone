import React from "react";
import "./Checkout.css";
import { Grid } from "@mui/material";
import CheckoutItems from "./CheckoutItems";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";

const Checkout = () => {
  const navigate = useNavigate();
  const { item, size, increment, price, setPrice, qty, qtyId, log, user } =
    useContext(CartContext);

  const cartValue = () => {
    let total = 0;
    for (let i = 0; i < item.length; i++) {
      for (let j = 1; j < qty; j++) {
        if (parseFloat(item[i].id) == qtyId) {
          total += parseFloat(item[i].price);
        }
      }
      total += parseFloat(item[i].price);

      // total += parseFloat(item[i].price * 1.10);
    }
    // const Formattedtotal = total.toFixed(2);
    // setPrice((Formattedtotal));
    setPrice(total);
    return price;
  };

  // console.log("item", item);
  const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const onBuyClick = () => {
    if (size !== 0) {
      if (user) {
        navigate("/address-page");
      } else {
        setOpen(true);
      }
    } else {
      return;
    }
  };

  return (
    <div className="checkout__body">
      <Grid container>
        <Grid item={10}>
          <div className="checkout__container">
            <div
              style={{
                fontSize: "30px",
                fontWeight: "500",
                padding: "20px 0px 0px 20px",
              }}
            >
              Shopping Cart
            </div>
            <div>
              {item.length > 0 ? (
                item.map((product) => <CheckoutItems product={product} />)
              ) : (
                <div>
                  <h1 style={{ textAlign: "center", padding: "10px" }}>
                    Your Amazon Cart is empty
                  </h1>
                  <img src="https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/emptyPage.svg?updatedAt=1690178215114" />
                </div>
              )}
            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <div className="proceedToBuyBox">
            <div style={{ fontSize: "26px" }}>
              Subtotal ({size} items): <strong>{cartValue()}</strong>
              {/* <div style={{fontSize: "20px", marginTop: "5px"}}>GST tax: 10%</div> */}
            </div>
            <div className="placeorder__div">
              <button className="placeorder__button" onClick={onBuyClick}>
                Proceed to Buy
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <Box component="span" sx={{ p: 2 }} className="box_container">
            <img
              src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
              height="200"
            />
            <h1>Login Error</h1>
            <br />
            <h3>You need to login first</h3>
            <br />
            <br />
            <button
              className="login_signinbutton"
              onClick={() => {
                handleClose();
                navigate("/log-In");
              }}
              autoFocus
            >
              Continue to Login
            </button>
          </Box>
        </Dialog>
      </div>
    </div>
  );
};

export default Checkout;
