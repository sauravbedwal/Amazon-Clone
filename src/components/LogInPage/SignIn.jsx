import React, { useContext, useState } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { CartContext } from "../../CartContext";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import { auth } from "../../firebase";

const LogIn = () => {
  const { setLog } = useContext(CartContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const handleClose = () => {
    setSuccessModalOpen(false);
    setErrorModalOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSuccessModalOpen(true);
        console.log("User logged in successfully!");
      })
      .catch((error) => {
        setLoginError("Invalid email or password. Please try again.");
        setErrorModalOpen(true);
        console.error("Error logging in", error);
      });
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
          alt="Amazon Logo"
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
          <button
            type="submit"
            className="login_signinbutton"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to the Amazon Clone conditions of use and
          sale
        </p>
        <button className="login_registerbutton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
      <Dialog open={successModalOpen || errorModalOpen} onClose={handleClose}>
        <Box component="span" sx={{ p: 2 }} className="box_container">
          {successModalOpen && (
            <>
              <img
                src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif"
                height="250"
                alt="Success GIF"
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
            </>
          )}
          {errorModalOpen && (
            <>
              {/* Error modal content */}
              <img
                src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
                height="250"
              />
              <h1>Error Logging In</h1>
              <p>{loginError}</p>
              <br />
              <button
                className="login_signinbutton"
                onClick={() => {
                  handleClose();
                }}
                autoFocus
              >
                OK
              </button>
            </>
          )}
        </Box>
      </Dialog>
    </div>
  );
};

export default LogIn;
