import React, { useContext, useState } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { CartContext } from "../../CartContext";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";

const SignUp = () => {
  const { setLog } = useContext(CartContext);
  const navigate = useNavigate();
  const app = initializeApp(firebaseConfig);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Signed in
        if (auth) {
          setLog(auth);
          setOpen(true);
        }
      })

      .catch((error) => alert(error.message));
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
        <h1>Create Account</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            register();
          }}
        >
          <h5>Your name</h5>
          <input
            type="text"
            className="text_color"
            placeholder="First and last name"
            required
          />
          <h5>Email</h5>
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
          <p style={{ fontSize: "14px", marginTop: "-5px" }}>
            <i>Passwords must be at least 6 characters.</i>
          </p>
          <button type="submit" className="login_signinbutton">
            Continue
          </button>
          <div>
            {/* <Button variant="outlined" onClick={handleOpen}>
            Open Dialog
          </Button> */}
            <Dialog open={open} onClose={handleClose}>
              <Box component="span" sx={{ p: 2 }} className="box_container">
                <img
                  src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif"
                  height="250"
                />
                <h1>Account Created Successfully!</h1>
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
        </form>

        <p>
          Already have an account? <Link to="/log-In">Sign in</Link>
        </p>
        <p>
          By creating an account or logging in, you agree to Amazon's Conditions
          of Use and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
