import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import About from "@pages/About";
import Home from "@pages/Home";

const RouterContainer = () => {
  return(
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Router>
  );
};

export default RouterContainer;