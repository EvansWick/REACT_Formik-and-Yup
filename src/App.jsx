import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

import Registration from "./Pages/Registration";
import LogIn from "./Pages/LogIn";

import "./App.css";
import LayoutPage from "./Pages/LayoutPage";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
