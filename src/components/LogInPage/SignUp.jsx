import React, { useContext, useState } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import db from "../../firebase";
import { auth } from "../../firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false); // State to control the success modal
  const [errorModalOpen, setErrorModalOpen] = useState(false); // State to control the error modal
  const [errorMessage, setErrorMessage] = useState(""); // State to store the error message

  const handleClose = () => {
    setOpen(false);
    setErrorModalOpen(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        db.collection("users")
          .doc(user.uid)
          .set({
            name: name,
            email: email,
          })
          .then(() => {
            // Handle successful signup
            console.log("User signed up successfully!");
            setOpen(true); // Show success modal
          })
          .catch((error) => {
            // Handle Firestore save error
            console.error("Error saving user data to Firestore:", error);
            setErrorMessage("Error saving user data. Please try again.");
            setErrorModalOpen(true); // Show error modal
          });
      })
      .catch((error) => {
        // Handle signup error
        console.error("Error creating user:", error);
        setErrorMessage(error.message); // Set the error message
        setErrorModalOpen(true); // Show error modal
      });
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
        <form>
          <h5>Your name</h5>
          <input
            type="text"
            className="text_color"
            placeholder="First and last name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            minLength={6}
          />
          <p style={{ fontSize: "14px", marginTop: "-5px" }}>
            <i>Passwords must be at least 6 characters.</i>
          </p>
          <button
            type="submit"
            className="login_signinbutton"
            onClick={handleSignup}
          >
            Continue
          </button>
        </form>
        <p>
          Already have an account? <Link to="/log-In">Sign in</Link>
        </p>
        <p>
          By creating an account or logging in, you agree to Amazon's Conditions
          of Use and Privacy Policy.
        </p>
      </div>

      {/* Success Modal */}
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

      {/* Error Modal */}
      <Dialog open={errorModalOpen} onClose={handleClose}>
        <Box component="span" sx={{ p: 2 }} className="box_container">
          {/* Error modal content */}
          <img
            src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
            height="250"
          />
          <h1>Error Signing Up</h1>
          <p>{errorMessage}</p>
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
        </Box>
      </Dialog>
    </div>
  );
};

export default SignUp;
