import React, { useContext, useEffect } from 'react';
import { StoreContext } from './context/store/store.context';
import Router from './router';

const App = () => {
  const store = useContext(StoreContext);

  useEffect(() => console.log(store), [store]);
  return <Router />;
};

export default App;
