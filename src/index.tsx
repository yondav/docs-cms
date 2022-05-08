import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import GlobalStyles from './styles';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/theme';
import App from './App';

render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
