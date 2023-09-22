import "./App.css";
import Layout from "./Layout";
import AddressPage from "./components/AddressPage/AddressPage";
import Checkout from "./components/Checkout/Checkout";
import DisplayContent from "./components/DisplayContent/DisplayContent";
import Error from "./components/Error/Error";
import MainPage from "./components/HomePage/MainPage";
import LogIn from "./components/LogInPage/SignIn";
import SignUp from "./components/LogInPage/SignUp";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaticPages from "./components/StaticPages/StaticPages";
import UserFeedback from "./components/UserFeedback/UserFeedback";
import { useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import db from "./firebase";
import { auth } from "./firebase";

function App() {
  const { setUser } = useContext(CartContext);
  useEffect(() => {
    const fetchUserData = async (userId) => {
      try {
        const userDoc = await db.collection("users").doc(userId).get();
        if (userDoc.exists) {
          const userData = userDoc.data();

          setUser(userData);
        } else {
          console.log('User document not found in "users" collection.');
          // setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // setUser(null);
      }
    };

    const forId = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const providerId = authUser.providerData[0].providerId;
        if (providerId === "password") {
          fetchUserData(authUser.uid);
        }
      }
    });

    return () => {
      forId();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/log-In" element={<LogIn />} />
          <Route path="/sign-Up" element={<SignUp />} />
          <Route path="/address-page" element={<AddressPage />} />
          <Route path="/userFeedback-page" element={<UserFeedback />} />
          <Route
            path="/"
            element={
              <Layout>
                <MainPage />
              </Layout>
            }
          />
          <Route
            path="/display-content"
            element={
              <Layout>
                <DisplayContent />
              </Layout>
            }
          />
          <Route
            path="/place-order/:id"
            element={
              <Layout>
                <PlaceOrder />
              </Layout>
            }
          />
          <Route
            path="/checkout"
            element={
              <Layout>
                <Checkout />
              </Layout>
            }
          />

          <Route
            path="*"
            element={
              <Layout>
                <Error />
              </Layout>
            }
          />
          <Route
            path="/static-pages"
            element={
              <Layout>
                <StaticPages />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
