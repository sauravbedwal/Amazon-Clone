import React, { useContext, useState } from "react";
import "./UserFeedback.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";

const UserFeedback = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const onSubmitFeedback = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <h1>Feedback</h1>
        <form onSubmit={onSubmitFeedback}>
          <h5>Name</h5>
          <input
            type="text"
            className="text_color"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h5>E-mail</h5>
          <input
            type="text"
            className="text_color"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h5>Comments</h5>
          <input
            type="text"
            className="text_color"
            placeholder="Enter your comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
          />
          <button type="submit" className="login_signinbutton">
            Submit
          </button>
        </form>
        <p>We appreciate your feedback. Thank you.</p>
        <div>
          <Dialog open={open} onClose={handleClose}>
            <Box component="span" sx={{ p: 2 }} className="box_container">
              <img
                src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif"
                height="250"
              />
              <h1>Feedback submitted successfully</h1>
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

export default UserFeedback;
