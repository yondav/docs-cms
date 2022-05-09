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

  const deformSlug = slug => {
    return slug
      .split('-')
      .map(word => word[0].toUpperCase() + word.substr(1).toLowerCase())
      .join(' ');
  };

  return (
    <div tw='min-h-screen w-screen flex flex-col justify-between transition-all duration-300 ease-in-out flex flex-col'>
      <Nav ref={navRef} />
      <main tw='w-full flex relative' style={{ height: mainHeight }}>
        {sideBar && <SideBar />}
        <section tw='w-full px-3'>
          <span tw='text-primary text-xs'>
            {page && (
              <>
                <Link to={`/${page}`}>{deformSlug(page)}</Link>
                <span tw='mx-1'>&bull;</span>
              </>
            )}
            {section && (
              <>
                <Link to={`/${page}/${section}`}>{deformSlug(section)}</Link>
                <span tw='mx-1'>&bull;</span>
              </>
            )}
            {subsection && <Link to={`/${page}/${section}/${subsection}`}>{deformSlug(subsection)}</Link>}
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
