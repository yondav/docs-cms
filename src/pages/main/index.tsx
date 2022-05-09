import React, { useContext, useRef, useState, useEffect } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';

import { ThemeContext } from '../../context/theme';
import { StoreContext } from '../../context/store/store.context';

import Nav from '../../components/nav';
import SideBar from '../../components/sidebar';
import Footer from '../../components/footer';

const Main = () => {
  const footerRef = useRef(null);
  const navRef = useRef(null);
  const [mainHeight, setMainHeight] = useState<string>('');
  const { sideBar } = useContext(ThemeContext);
  const { loading, error } = useContext(StoreContext);
  const { page, section, subsection } = useParams();

  useEffect(() => {
    const unsubscribe = () => {
      if (footerRef.current && navRef.current)
        // @ts-ignore
        return setMainHeight(`calc(100vh - ${footerRef?.current?.offsetHeight + navRef?.current?.offsetHeight}px)`);
    };
    unsubscribe();
  }, [footerRef, navRef]);

  return (
    <div tw='min-h-screen w-screen flex flex-col justify-between transition-all duration-300 ease-in-out flex flex-col'>
      <Nav ref={navRef} />
      <main tw='w-full flex relative' style={{ height: mainHeight }}>
        {sideBar && <SideBar />}
        <section tw='w-full px-3'>
          <span tw='text-primary text-xs'>
            {page && <Link to={`/${page}`}>/{page}</Link>}
            {section && <Link to={`/${page}/${section}`}>/{section}</Link>}
            {subsection && <Link to={`/${page}/${section}/${subsection}`}>/{subsection}</Link>}
          </span>
          <section tw='overflow-y-scroll max-h-[95%]'>
            <Outlet />
          </section>
        </section>
      </main>
      <Footer ref={footerRef} />
    </div>
  );
};

export default Main;
