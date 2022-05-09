import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../pages/main';
import Page from '../pages/entry/Page';
import Section from '../pages/entry/Section';
import SubSection from '../pages/entry/SubSection';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path=':page/' element={<Page />}>
          <Route path=':section' element={<Section />}>
            <Route path=':subsection' element={<SubSection />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
