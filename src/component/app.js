// Dependencies
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "../pages/home.js";
import PageNav from "../pages/pageNav.js";

// Style
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <>
    <AnimatePresence mode="wait">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
    <PageNav />
  </>
);

export default App;
