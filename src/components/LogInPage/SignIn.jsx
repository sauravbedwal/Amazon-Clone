import React, { useContext, useState } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { CartContext } from "../../CartContext";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";

const LogIn = () => {
  const { setLog } = useContext(CartContext);
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Signed in

        if (auth) {
          setLog(auth);
          setOpen(true);
        }
      })

      .catch((error) => alert(error.message));
  };

  const register = () => {
    navigate("/sign-Up");
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            className="text_color"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            className="text_color"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_signinbutton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon Clone condition of use and sale
        </p>
        <button className="login_registerbutton" onClick={register}>
          Create your Amazon account
        </button>
        <div>
          <Dialog open={open} onClose={handleClose}>
            <Box component="span" sx={{ p: 2 }} className="box_container">
              <img
                src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif"
                height="250"
              />
              <h1>Logged In successfully</h1>
              <br />
              <br />
              <button
                className="login_signinbutton"
                onClick={() => {
                  handleClose();
                  navigate("/");
                }}
                autoFocus
              >
                Continue to Amazon
              </button>
            </Box>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
