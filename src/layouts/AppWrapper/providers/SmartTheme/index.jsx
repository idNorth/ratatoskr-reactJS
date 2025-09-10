import { ThemeProvider  } from 'styled-components';

// constants
import { theme } from './constants/theme';

export const SmartTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider >
}