import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define your brand colors
const theme = createTheme({
  palette: {
    background: {
      default: '#F5F5DC', // Beige
    },
    text: {
      primary: '#8FBC8F', // Sage green
    },
    primary: {
      main: '#8FBC8F',
    },
  },
  typography: {
    fontFamily: 'Fredoka One, sans-serif',
    allVariants: {
      color: '#8FBC8F', // applies to most text elements
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
