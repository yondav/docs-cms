import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { StoreProvider } from './context/store/store.context';
import GlobalStyles from './styles';
import App from './App';

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/cl2w1iu661jfs01z38wxcf432/master',
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <StoreProvider>
      <GlobalStyles />
      <App />
    </StoreProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
