import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../context/theme';
import Nav from '../../components/nav';
import SideBar from '../../components/sidebar';

const MainWrapper = () => {
  const { sideBar } = useContext(ThemeContext);

  return (
    <>
      <Nav />
      <main tw='w-full flex min-h-[1000px]'>
        {sideBar && <SideBar />}
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default MainWrapper;
