import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';
import colors from './colors';

const { theme } = resolveConfig(tailwindConfig);

export default theme;

export const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    secondary: colors.secondary,
  },
};
