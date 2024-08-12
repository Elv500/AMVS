import { createTheme } from '@mui/material/styles';

export const modeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00bca3',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#e0f7fa',
    },
    info: {
      main: '#0288d1',
    },
  },
});

export const modeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bca3',
    },
    secondary: {
      main: '#ffffff',
    },
    info: {
      main: '#0288d1',
    },
  },
});
