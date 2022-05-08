import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../context/theme';
import Nav from '../../components/nav';

const MainWrapper = () => {
  const { sideBar } = useContext(ThemeContext);

  return (
    <>
      <Nav />
      <main tw='w-full flex min-h-[1000px]'>
        {sideBar && (
          <div tw='border-r border-neutral-300' style={{ flexBasis: '30%' }}>
            <div tw='m-3 p-5 border border-neutral-300 rounded-lg'>Getting Started</div>
          </div>
        )}
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default MainWrapper;
