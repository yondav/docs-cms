import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainWrapper from './mainWrapper';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainWrapper />}>
        <Route path=':page/' element={<div>PAGE</div>}>
          <Route path=':section' element={<div>SECTION</div>}>
            <Route path=':subsection' element={<div>SUBSECTION</div>} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
