import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./AddressPage.css";
import { CartContext } from "../../CartContext";

const AddressPage = () => {
  const { price } = useContext(CartContext);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    // console.log(amount);

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("You are offline...Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_jD2OXNNAkI0EIb",
      currency: "INR",
      amount: amount * 100,
      name: "Amazon.in",
      description: "Thanks for shopping with Amazon",
      image:
        "https://ik.imagekit.io/amazon1122/amazon-image/amazon-image/amazonLogo.jpg?updatedAt=1689924868247",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfull");
      },
      prefill: {
        name: "code with akky",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className="info">
      <Link to="/">
        <img
          className="address_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
        />
      </Link>
      <div className="address_container">
        <h1>Add a new address</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            displayRazorpay(price);
          }}
        >
          <h5>Country/Region</h5>
          <select className="text_color">
            <option>Alabama</option>
            <option>Argentina</option>
            <option>Bangladesh</option>
            <option>Bhutan</option>
            <option>China</option>
            <option>Denmark</option>
            <option>England</option>
            <option>Hungry</option>
            <option>India</option>
            <option>Italy</option>
            <option>Morocco</option>
            <option>New Zealand</option>
            <option>Turkey</option>
            <option>Zambia</option>
          </select>
          <h5>Full name (First and Last name)</h5>
          <input type="text" className="text_color" required />
          <h5>Mobile number</h5>
          <input type="number" className="text_color" required />
          <div style={{ fontSize: "12px" }}>May be used to assist delivery</div>
          <h5>Pincode</h5>
          <input type="number" className="text_color" required />
          <h5>Flat, House no., Building, Company, Apartment</h5>
          <input type="text" className="text_color" required />
          <h5>Area, Street, Sector, Village</h5>
          <input type="text" className="text_color" required />
          <h5>Landmark</h5>
          <input
            type="text"
            className="text_color"
            placeHolder="E.g. near apollo hospital"
            required
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div>
              <h5>Town/City</h5>
              <input type="text" className="text_div" required />
            </div>
            <div>
              <h5>State</h5>
              <select
                className="text_div"
                style={{ marginRight: "20px" }}
                required
              >
                <option>Alabama</option>
                <option>Argentina</option>
                <option>Bangladesh</option>
                <option>Bhutan</option>
                <option>China</option>
                <option>Denmark</option>
                <option>England</option>
                <option>Hungry</option>
                <option>India</option>
                <option>Italy</option>
                <option>Morocco</option>
                <option>New Zealand</option>
                <option>Turkey</option>
                <option>Zambia</option>
              </select>
            </div>
          </div>
          <button type="submit" className="address_signinbutton">
            Use this address
          </button>
        </form>

        <p>
          Your instructions help us deliver to this address. However, deliveries
          may not always follow all the instructions.
        </p>
      </div>
    </div>
  );
};

export default AddressPage;
