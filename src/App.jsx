import React from "react";
import {  ThemeProvider } from "styled-components";
import * as colors from "./constants/colors";
import Home from "./components/pages/Home/index";
import "./sass/main.sass";

const App = () => {
  const styleSettings = {
    colors: colors.light
  };

  return(
    <ThemeProvider theme={styleSettings}>
      <Home />
    </ThemeProvider>
  );
};

export default App;