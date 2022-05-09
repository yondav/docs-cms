import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { StoreProvider } from './context/store/store.context';
import { ThemeProvider } from './context/theme';
import GlobalStyles from './styles';
import App from './App';

const client = new ApolloClient({
  uri: process.env.GRAPH,
  cache: new InMemoryCache(),
});

render(
  <BrowserRouter>
    <ThemeProvider>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ApolloProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
