import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainWrapper from './mainWrapper';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainWrapper />} />
    </Routes>
  );
};

export default Router;
