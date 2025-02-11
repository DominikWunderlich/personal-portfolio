import React from 'react';
import Portfolio from './components/Portfolio';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  // You can customize your theme here
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;