import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop/>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
