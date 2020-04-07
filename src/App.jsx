import React from "react";
import {  ThemeProvider } from "styled-components";
import * as colors from "./constants/colors";
import Router from "./router";
import "./sass/main.sass";

const App = () => {
  const styleSettings = {
    colors: colors.light
  };

  return(
    <ThemeProvider theme={styleSettings}>
      <Router />
    </ThemeProvider>
  );
};

export default App;