import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from "themeprovider-storybook";
import * as colors from '../src/constants/colors';

const themes = [
  {
		name: 'Light', // Required it's used for displaying the button label,
		backgroundColor: 'white',
		colors: {...colors.light}
  },
  {
		name: 'Dark', 
		backgroundColor: 'black',
    colors: {...colors.dark}
  }
]
addDecorator(withThemesProvider(themes));
