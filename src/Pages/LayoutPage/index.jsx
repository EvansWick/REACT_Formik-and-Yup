import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";

function LayoutPage() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/registration");
    }
  }, [isAuth, navigate]);
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default LayoutPage;
