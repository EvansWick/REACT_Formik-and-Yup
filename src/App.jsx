import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

import Registration from "./Pages/Registration";
import LogIn from "./Pages/LogIn";

import LayoutPage from "./Pages/LayoutPage";
import Home from "./Pages/Home";
import UndefinedPage from "./Pages/UndefinedPage";

import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route
            index
            element={
              isAuth || localStorage.getItem("login") ? (
                <Home />
              ) : (
                <Navigate to="/registration" />
              )
            }
          ></Route>
        </Route>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LogIn setIsAuth={setIsAuth} />} />
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
