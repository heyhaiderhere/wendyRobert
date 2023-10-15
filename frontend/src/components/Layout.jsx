import React from "react";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import usePageTitle from "../hooks/usePageTitle";
const Layout = () => {
  usePageTitle("services");
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      {/* <ConsultationPlaner /> */}
    </div>
  );
};

export default Layout;
