import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, activeMenu }) => {
  return (
    <div>
      <Header activeMenu={activeMenu} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
