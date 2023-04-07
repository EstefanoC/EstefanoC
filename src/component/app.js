import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home.js";
import PageNav from "../pages/pageNav.js";
import "./app.css";

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
    <PageNav />
  </>
);

export default App;
