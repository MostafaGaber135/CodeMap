'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C346F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8A356A',
    },
    error: {
      main: '#B11C1F',
    },
    warning: {
      main: '#BBA052',
    },
    info: {
      main: '#BBA481',
    },
    success: {
      main: '#A58167',
    },
    background: {
      default: '#FDFCFB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C346F',
      secondary: '#8A356A',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
    allVariants: {
      fontFamily: 'var(--font-geist-sans)',
    },
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        code: {
          fontFamily: 'var(--font-geist-mono)',
        },
      },
    },
  },
});

export default theme;
