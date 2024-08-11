import { createTheme } from '@mui/material/styles';

export const modeLight = createTheme({
  palette: {
    mode: 'light',  // Asegura que el modo sea explícitamente "light"
    primary: {
      main: '#00bca3',
    },
    secondary: {
      main: '#ce93d8',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#ce93d8',
      secondary: '#ce93d8',
      disabled: '#ce93d8',
    },
    background: {
      default: '#5f928f',
      paper: '#5f928f',
    }
  }
});

export const modeDark = createTheme({
  palette: {
    mode: 'dark',  // Asegura que el modo sea explícitamente "dark"
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#00bca3',
      contrastText: '#000000',
    },
    text: {
      primary: '#00897b',
      secondary: '#00897b',
      disabled: '#00897b',
    },
    background: {
      default: '#000000',
      paper: '#ffffff',  
    },
  },
});
