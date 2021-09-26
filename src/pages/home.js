import React from "react";
import Home from "../component/home/";
import Load from "../component/Load";
import "./index.css";

const Homeless = () => (
  <>
    <Load />
    <main className="mainHome">
      <Home />
    </main>
  </>
);

export default Homeless;
