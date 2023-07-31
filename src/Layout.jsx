import React from "react";
import NavBar from "./components/NavBar/Navigation";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
