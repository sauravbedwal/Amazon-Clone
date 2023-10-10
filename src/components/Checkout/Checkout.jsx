import React from "react";
import "./Checkout.css";
import { Grid } from "@mui/material";
import CheckoutItems from "./CheckoutItems";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";

const Checkout = () => {
  const navigate = useNavigate();
  const {
    item,
    size,
    increment,
    price,
    setPrice,
    qty,
    qtyId,
    log,
    setItem,
    qtyInfo,
    quantityItem,
    user,
    setQtyInfo,
  } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cartValue = () => {
    let total = 0;
    for (let i = 0; i < item.length; i++) {
      const itemQtyInfo = qtyInfo.find((info) => info.id === item[i].id);

      const quantity = itemQtyInfo ? itemQtyInfo.qty : 1;
      total += parseFloat(item[i].price) * quantity;
    }
    setPrice(total.toFixed(2));
    return total.toFixed(2);
  };

  useEffect(() => {
    const storedQtyInfo = JSON.parse(localStorage.getItem("qtyInfo")) || [];
    setQtyInfo(storedQtyInfo);
  }, [setQtyInfo]);

  // console.log("total", price);
  // console.log("id", qtyId);
  // console.log("qty", qty);
  // console.log("item", item.id);
  // console.log("item", item);

  const onProceedClick = () => {
    if (size !== 0) {
      if (user) {
        navigate("/address-info");
      } else {
        setOpen(true);
      }
    } else {
      return;
    }
  };

  const onDeleteAllClick = () => {
    setItem([]);
  };
  return (
    <div className="body">
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
                  <img src="https://ik.imagekit.io/amazonzlone15/amazon-image/empty.svg?updatedAt=1690177984467" />
                </div>
              )}
            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <div className="proceedToBuyBox">
            <div style={{ fontSize: "26px", textAlign: "initial" }}>
              <span style={{ display: "flex", alignItems: "center" }}>
                {" "}
                Subtotal - {size} items
              </span>
              <span
                style={{
                  marginTop: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* {localStorage.getItem("setPrice")} */}
                <span style={{ fontSize: "medium" }}>Total Amount - </span>
                <strong style={{ marginLeft: "5px" }}>₹ {cartValue()}</strong>
              </span>
            </div>
            <div style={{ paddingTop: "25px" }}>
              {/* <Link to="/address-info"> */}
              <button className="placeorder__button" onClick={onProceedClick}>
                Proceed to Buy
              </button>
              {/* </Link> */}
              <button className="placeorder__button" onClick={onDeleteAllClick}>
                Clear All
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
      <div>
        {/* <Button variant="outlined" onClick={handleOpen}>
            Open Dialog
          </Button> */}
        <Dialog open={open} onClose={handleClose}>
          <Box
            component="span"
            sx={{
              p: 2,
            }}
            className="box_container"
          >
            <img
              src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
              height="300px"
            />
            <h1>You need to Login first</h1>
            <br />
            <br />
            <button
              className="login_signinbutton"
              onClick={() => {
                handleClose();
                navigate("/log-In");
              }}
              autoFocus
              sx={{ fontSize: "30px" }}
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
