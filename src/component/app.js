import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home.js";
import PageNav from "../pages/pageNav.js";
import "./app.css";

const App = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    <PageNav />
  </>
);

export default App;
