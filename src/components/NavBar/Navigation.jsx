import React, { useContext, useState } from "react";
import "./NavBar.css";
import { CartContext } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import Search from "./SearchBox/Search";
import MenuIcon from "@mui/icons-material/Menu";

import { auth } from "../../firebase";

import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";

const NavBar = () => {
  const [phone, setPhone] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const { item, size, increment, log, user, setUser } = useContext(CartContext);
  const navigate = useNavigate();

  console.log("userCheck", user);

  const cartClick = () => {
    navigate(`/checkout`);
  };

  const amazonLogoClick = () => {
    navigate(`/`);
  };

  const signInClick = () => {
    navigate("/log-In");
  };

  const feedbackClick = () => {
    navigate("/userFeedback-page");
  };
  // console.log(log);
  const staticData = [
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy6.jpg?updatedAt=1690388454263",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy9.jpg?updatedAt=1690388454232",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy7.jpg?updatedAt=1690388454334",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy11.jpg?updatedAt=1690388454331",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy12.gif?updatedAt=1690388510895",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy18.jpg?updatedAt=1690388572418",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy8.jpg?updatedAt=1690388454266",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b3.jpg?updatedAt=1690729810880",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy15.jpg?updatedAt=1690388695828",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy14.jpg?updatedAt=1690388623134",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/b12.jpg?updatedAt=1690730091457",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b13.jpg?updatedAt=1690730091483",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy13.jpg?updatedAt=1690388572074",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/dummy16.jpg?updatedAt=1690388695845",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/b5.jpg?updatedAt=1690729810818",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b4.jpg?updatedAt=1690729810873",
    },
    {
      img1: "https://ik.imagekit.io/amazonzlone15/amazon-image/b1.jpg?updatedAt=1690729810855",
      img2: "https://ik.imagekit.io/amazonzlone15/amazon-image/b6.jpg?updatedAt=1690729810847",
      img3: "https://ik.imagekit.io/amazonzlone15/amazon-image/b5.jpg?updatedAt=1690729810818",
      img4: "https://ik.imagekit.io/amazonzlone15/amazon-image/b5.jpg?updatedAt=1690729810818",
    },
  ];

  const onNavFooterClick = (e) => {
    const value = e.target.getAttribute("value");
    navigate("/static-pages", { state: staticData[value] });
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        console.log("User logged out successfully!");
        // Clearing user data from the global state by setting user to null
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <>
      <div className="navbar__component">
        <div className="navbar__logo" onClick={amazonLogoClick}></div>
        <div className="navbar__locator">
          <div className="navbar__locatorImage"></div>
          <select className="navbar_location">
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Noida</option>
            <option>Goa</option>
            <option>Chennai</option>
            <option>Kanpur</option>
          </select>
        </div>
        {/* Search buttton*/}
        <Search />
        {/* language bar */}
        <div className="navbar__language">
          <img src="https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/languageImg.png?updatedAt=1689665190653" />

          <select className="navbar__language__select">
            <option value="ENG">ENG</option>
            <option value="HINDI">HINDI</option>
            <option value="MARATHI">MARATHI</option>
            <option value="PUNJABI">PUNJABI</option>
            <option value="TELUGU">TELUGU</option>
            <option value="BANGALI">BANGALI</option>
          </select>
        </div>

        {/* Text after searchbar */}
        <div className="navbar__text navbar__signin">
          {user ? (
            <div onClick={handleClick}>
              <div style={{ fontSize: "14px" }}>Hello, {user.name}</div>
              <div style={{ fontWeight: "bold" }}>Account & Lists</div>
            </div>
          ) : (
            <div onClick={handleClick}>
              <div style={{ fontSize: "14px" }} onClick={signInClick}>
                Hello, Sign In
              </div>
              <div style={{ fontWeight: "bold" }}>Account & Lists</div>
            </div>
          )}
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            style={{ zIndex: "2" }}
            onClick={handleLogout}
          >
            <Box sx={{ p: 1 }} className="navbar_logoutButton">
              Logout
            </Box>
          </Popper>
        </div>
        {/* <button onClick={handleLogout}>logout</button> */}
        <div className="navbar__text navbar__returns">
          <div
            style={{ fontSize: "14px", cursor: "pointer" }}
            onClick={feedbackClick}
          >
            Feedback
          </div>
          <div style={{ fontWeight: "bold" }}>& Comment</div>
        </div>
        <div className="navbar__text navbar__cart" onClick={cartClick}>
          <div className="cart__image"></div>
          <div className="cart__item">{size}</div>
          <div className="navbar__text__cart">Cart</div>
        </div>
        <div className="hamburger">
          <MenuIcon
            onClick={() => {
              setPhone(!phone);
            }}
          />
        </div>
      </div>
      {/* navbar footer */}
      <div className="navbar__footer">
        <div className="navbar_footer_elems">
          <div
            className="navbar__footer__text"
            value="0"
            onClick={onNavFooterClick}
          >
            Specials
          </div>
          <div
            className="navbar__footer__text"
            value="1"
            onClick={onNavFooterClick}
          >
            Movers and Shakers
          </div>
          <div
            className="navbar__footer__text"
            value="2"
            onClick={onNavFooterClick}
          >
            Best Sellers
          </div>
          <div
            className="navbar__footer__text"
            value="3"
            onClick={onNavFooterClick}
          >
            Today's Deals
          </div>
          <div
            className="navbar__footer__text"
            value="0"
            onClick={onNavFooterClick}
          >
            Mobiles
          </div>
          <div
            className="navbar__footer__text"
            value="1"
            onClick={onNavFooterClick}
          >
            New Releases
          </div>
          <div
            className="navbar__footer__text"
            value="2"
            onClick={onNavFooterClick}
          >
            Prime
          </div>
          <div
            className="navbar__footer__text"
            value="3"
            onClick={onNavFooterClick}
          >
            Fire TV
          </div>
          <div
            className="navbar__footer__text"
            value="0"
            onClick={onNavFooterClick}
          >
            Computers
          </div>
          <div
            className="navbar__footer__text"
            value="1"
            onClick={onNavFooterClick}
          >
            Home & Kitchen
          </div>
        </div>

        <div className="navbar__footer__image">
          <img src="https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/navbarFooterImage.jpg?updatedAt=1689669737431" />
        </div>
      </div>

      {phone && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "160px",
            width: "auto",
            backgroundColor: "#131921",
            color: "white",
            zIndex: "0",
          }}
        >
          <div className="navbar__language2">
            <img src="https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/languageImg.png?updatedAt=1689665190653" />
            <div>
              <select className="navbar__language__select2">
                <option value="ENG">ENG</option>
                <option value="HINDI">HINDI</option>
                <option value="MARATHI">MARATHI</option>
                <option value="PUNJABI">PUNJABI</option>
                <option value="TELUGU">TELUGU</option>
                <option value="BANGALI">BANGALI</option>
              </select>
            </div>
          </div>

          {/* Text after searchbar */}
          <div className="navbar__text navbar__signin2">
            {user ? (
              <div style={{ fontSize: "14px" }} onClick={handleClick}>
                Hello, {user.name}
              </div>
            ) : (
              <div style={{ fontSize: "14px" }} onClick={signInClick}>
                Hello, Sign In
              </div>
            )}
            <Popper
              id={id}
              open={open}
              anchorEl={anchorEl}
              style={{ zIndex: "2" }}
              onClick={handleLogout}
            >
              <Box sx={{ p: 1 }} className="navbar_logoutButton">
                Logout
              </Box>
            </Popper>
            <div style={{ fontWeight: "bold" }}>Account & Lists</div>
          </div>
          <div className="navbar__text navbar__returns2">
            <div style={{ fontSize: "14px" }}>Feedback</div>
            <div style={{ fontWeight: "bold" }}>& Comment</div>
          </div>
          <div className="navbar__text navbar__cart2" onClick={cartClick}>
            <div className="cart__image2"></div>
            <div className="cart__item2">{size}</div>
            <div className="navbar__text__cart2">Cart</div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
