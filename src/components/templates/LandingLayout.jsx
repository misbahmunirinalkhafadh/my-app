import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar, Footer } from "../organisms";

export default function LandingLayout() {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
