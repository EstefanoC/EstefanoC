import { useState } from "react";

// Dependencies
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import Home from "../pages/home.js";
import About from "../pages/about.js";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Error404 from "../pages/Error404.js";
import Contact from "../pages/contact.js";
import Portfolio from "../pages/portfolio.js";

// Style
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  return (
    <div className={`grid-main ${darkMode ? "dark" : ""}`}>
      {!location.pathname.includes("EstefanoC") && (
        <Navbar
          setDarkMode={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
        />
      )}
      <AnimatePresence mode="sync">
        <Routes location={location} key={location.pathname}>
          <Route path="/EstefanoC" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/Portfolio" exact element={<Portfolio />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AnimatePresence>
      {!location.pathname.includes("EstefanoC") && <Footer />}
    </div>
  );
};

export default App;
