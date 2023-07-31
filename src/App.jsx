import "./App.css";
import CartContextProvider from "./CartContext";
import Layout from "./Layout";
import AddressPage from "./components/AddressPage/AddressPage";
import Checkout from "./components/Checkout/Checkout";
import DisplayContent from "./components/DisplayContent/DisplayContent";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/HomePage/MainPage";
import LogIn from "./components/LogInPage/SignIn";
import SignUp from "./components/LogInPage/SignUp";
import NavBar from "./components/NavBar/Navigation";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaticPages from "./components/StaticPages/StaticPages";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route path="/log-In" element={<LogIn />} />
            <Route path="/sign-Up" element={<SignUp />} />
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
              path="/address-page"
              element={
                <Layout>
                  <AddressPage />
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
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
