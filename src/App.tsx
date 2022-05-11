import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/theme';
import Router from './router';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
