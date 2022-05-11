import React, { useContext, useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useParams, Link } from 'react-router-dom';

import { ThemeContext } from '../../context/theme';
import useMediaQuery from '../../hooks/useMediaQuery';

import Greek, { paths } from '../../components/svg/icon.greek';
import Nav from '../../components/nav';
import SideBar from '../../components/sidebar';
import Footer from '../../components/footer';
import { IActiveSIdeBar } from '../../types';

const BreadCrumb: React.FC<{ endpoint: string; slug: string; bullet?: boolean }> = ({ endpoint, slug, bullet }) => {
  const deformSlug = slug => {
    return slug
      .split('-')
      .map(word => word[0].toUpperCase() + word.substr(1).toLowerCase())
      .join(' ');
  };

  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
      <Link to={endpoint}>{deformSlug(slug)}</Link>
      {bullet && <span tw='mx-1'>&bull;</span>}
    </motion.span>
  );
};

const Main = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const [mainHeight, setMainHeight] = useState<string>('');
  const { sideBar } = useContext(ThemeContext);
  const { page, section, subsection } = useParams();
  const { isDesktop, isTablet, isMobile, updateMedia } = useMediaQuery();
  const [active, setActive] = useState<IActiveSIdeBar>({ page, section, subsection });

  useEffect(() => {
    const activeSetter = () => {
      setActive(prev => ({ ...prev, page, section, subsection }));
    };
    activeSetter();
  }, [page, section, subsection]);

  useEffect(() => {
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    const unsubscribe = () => {
      if (footerRef.current && navRef.current)
        return setMainHeight(`calc(100vh - ${footerRef?.current?.offsetHeight + navRef?.current?.offsetHeight}px)`);
    };
    unsubscribe();
  }, [footerRef, navRef]);

  return (
    <>
      <Nav ref={navRef} />
      <main tw='w-full flex relative' style={{ height: mainHeight }}>
        <AnimatePresence>
          {sideBar && <SideBar height={`calc(100vh - ${navRef?.current?.offsetHeight}px)`} active={active} />}
        </AnimatePresence>
        <section tw='w-full px-3 mt-3'>
          <span tw='text-primary text-xs'>
            {page && <BreadCrumb endpoint={`/${page}`} slug={page} bullet={!!section} />}
            {section && <BreadCrumb endpoint={`/${page}/${section}`} slug={section} bullet={!!subsection} />}
            {subsection && <BreadCrumb endpoint={`/${page}/${section}/${subsection}`} slug={subsection} />}
          </span>
          <div tw='overflow-y-scroll max-h-[95%] my-4'>
            {paths({ isDesktop, isTablet, isMobile }).map((path, i) => (
              <Greek key={i} d={path.d} fill={path.fill} style={path.style} />
            ))}
            <Outlet />
          </div>
        </section>
      </main>
      <Footer ref={footerRef} />
    </>
  );
};

export default Main;
