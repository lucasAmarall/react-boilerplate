import React from "react";
import * as colors from "./constants/colors.js";
import {  ThemeProvider } from "styled-components";
import Home from "./components/pages/Home/index.jsx";
import "./sass/main.sass";

const App = () => {
	const styleSettings = {
		colors: colors["light"]
	};

	return(
		<ThemeProvider theme={styleSettings}>
			<>
				<Home />
			</>
		</ThemeProvider>
	);
};

export default App;