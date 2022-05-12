import React, { useContext, useRef, useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Outlet, useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { ThemeContext } from '../../context/theme';
import useMediaQuery from '../../hooks/useMediaQuery';

import Greek, { paths } from '../../components/svg/icon.greek';
import SEO from '../../components/seo';
import Nav from '../../components/nav';
import BreadCrumb from '../../components/breadCrumb';
import SideBar from '../../components/sidebar';
import Footer from '../../components/footer';
import { IActiveSIdeBar, IPage } from '../../types';

const Main = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const [mainHeight, setMainHeight] = useState<string>('');
  const { sideBar } = useContext(ThemeContext);
  const { page, section, subsection } = useParams();
  const { loading, error, data } = useQuery(GET_PAGE, { variables: { page: page ? page : 'getting-started' } });
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

  const renderPage = useCallback(() => {
    if (!active.page || active.page === '' || !data) return <SEO />;
    // if (!data) return null;

    const entry = data.page;
    return (
      <>
        <SEO activePage={entry as IPage} />
        <Outlet context={entry} />
      </>
    );

    // return <Outlet />;
  }, [active.page, data]);

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
            {renderPage()}
          </div>
        </section>
      </main>
      <Footer ref={footerRef} />
    </>
  );
};

export default Main;

const GET_PAGE = gql`
  query GetPage($page: String!) {
    page(where: { slug: $page }) {
      id
      slug
      title
      description {
        raw
      }
      sections {
        id
        slug
        title
        description {
          raw
        }
        subSections {
          id
          slug
          title
          description {
            raw
          }
        }
      }
    }
  }
`;
