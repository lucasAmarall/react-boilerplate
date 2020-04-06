import React from 'react';
import * as colors from './constants/colors.js';
import {  ThemeProvider } from 'styled-components';
import Home from './components/pages/Home/index.jsx';
import './sass/main.sass'

const styleSettings = {
	colors: colors['Light']
};

const App = () => (
	<ThemeProvider theme={styleSettings}>
		<>
			<Home />
		</>
	</ThemeProvider>
);

export default App