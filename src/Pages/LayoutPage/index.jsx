import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";

function LayoutPage() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default LayoutPage;
