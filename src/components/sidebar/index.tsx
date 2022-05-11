import React, { useContext, useEffect, useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StoreContext } from '../../context/store/store.context';
import { IPage, ISection, IActiveSIdeBar } from '../../types';
import { sidebar, fadeBounceDown, fadeBounceFromLeft, transitions } from '../../styles/framerVariants';

const SideBar: React.FC<{ height: string; active: IActiveSIdeBar }> = ({ height, active }) => {
  const { data } = useContext(StoreContext);
  // const { page, section, subsection } = useParams();
  // const [active, setActive] = useState({ page, section, subsection });

  // useEffect(() => {
  //   const activeSetter = () => {
  //     setActive(prev => ({ ...prev, page, section, subsection }));
  //   };
  //   activeSetter();
  // }, [page, section, subsection]);

  return (
    <Container
      variants={sidebar}
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={transitions.sidebar}
      style={{ height: height }}
    >
      <Pages active={active} pages={data?.pages} />
    </Container>
  );
};

export default SideBar;

const Container = styled(motion.nav)`
  ${css`
    @media (min-width: 768px) {
      flex-basis: 30%;
    }
    ${tw`border-r border-neutral-300 bg-neutral-200 absolute w-full top-0 left-0 md:relative`}
  `}
`;

const Button = styled(motion.div)((props: { active?: boolean }) => [
  tw`m-3 p-5 border border-neutral-300 bg-neutral-200 rounded-lg text-center`,
  props.active && tw`border-neutral-500`,
]);

const Pages: React.FC<{ active: IActiveSIdeBar; pages: [IPage] | undefined }> = ({ active, pages }) => (
  <>
    {!!pages &&
      pages.length > 0 &&
      pages.map((pg, i) => (
        <motion.div variants={fadeBounceFromLeft} transition={transitions.smooth} key={i}>
          <Link to={pg.slug} tw='w-full'>
            <Button active={active.page === pg.slug}>{pg.title}</Button>
          </Link>
          <Sections active={active} page={pg} />
        </motion.div>
      ))}
  </>
);

const Sections: React.FC<{ active: IActiveSIdeBar; page: IPage }> = ({ active, page }) => (
  <>
    {active.page === page.slug && !!page.sections && page.sections.length > 0 && (
      <motion.ul
        variants={fadeBounceDown}
        initial='hidden'
        animate='visible'
        transition={transitions.smooth}
        tw='my-2 mx-auto w-[fit-content] bg-neutral-200 p-3 rounded-md'
      >
        {page.sections.map((sect, i) => (
          <motion.li
            key={i}
            variants={fadeBounceDown}
            tw='mt-2'
            style={{ color: active.section === sect.slug && !active.subsection ? 'var(--primary)' : '' }}
          >
            <Link to={`${page.slug}/${sect.slug}`}>{sect.title}</Link>
            <SubSections active={active} page={page} section={sect} />
          </motion.li>
        ))}
      </motion.ul>
    )}
  </>
);

const SubSections: React.FC<{ active: IActiveSIdeBar; page: IPage; section: ISection }> = ({
  active,
  page,
  section,
}) => (
  <>
    {active.section === section.slug && !!section.subSections && section.subSections.length > 0 && (
      <motion.ul variants={fadeBounceDown} initial='hidden' animate='visible' exit='hidden' tw='mt-4 text-neutral-800'>
        {section.subSections.map((sub, i) => (
          <li key={i} tw='mt-2' style={{ color: active.subsection === sub.slug ? 'var(--primary)' : '' }}>
            <Link to={`${page.slug}/${section.slug}/${sub.slug}`}>{sub.title}</Link>
          </li>
        ))}
      </motion.ul>
    )}
  </>
);
