import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = lazy(() => import('../pages/main'));
const Page = lazy(() => import('../pages/entry/Page'));
const Section = lazy(() => import('../pages/entry/Section'));
const SubSection = lazy(() => import('../pages/entry/SubSection'));

const Router = () => {
  return (
    <Suspense fallback=''>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<p>some form of landing content, redirect back to feta.market perhaps.</p>} />
          <Route path=':page/' element={<Page />}>
            <Route path=':section' element={<Section />}>
              <Route path=':subsection' element={<SubSection />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
