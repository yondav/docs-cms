import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import GlobalStyles from './styles';
import App from './App';

render(
  <StrictMode>
    <GlobalStyles />
        <App />
  </StrictMode>,
  document.getElementById('root')
);
