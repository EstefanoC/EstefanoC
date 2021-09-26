import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "../pages/about.js";
import Portafolio from "../pages/portfolio.js";
import Contactame from "../pages/contact.js";
import Error404 from "../pages/Error404.js";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const PageNav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  return (
    <div className={`grid-main ${darkMode ? "dark" : ""}`}>
      <Navbar setDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/AboutMe" exact>
            <About />
          </Route>
          <Route path="/ContactMe" exact>
            <Contactame />
          </Route>
          <Route path="/Portfolio" exact>
            <Portafolio />
          </Route>
          <Route component={Error404} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default PageNav;
