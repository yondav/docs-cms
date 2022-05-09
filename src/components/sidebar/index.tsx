import React, { useContext, useEffect, useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { StoreContext } from '../../context/store/store.context';
import { IPage, ISection } from '../../types/store';
import { IActiveSIdeBar } from '../../types/ui';
import { sidebar, transition } from '../../styles/framerVariants';

const SideBar = (props: { height: string }) => {
  const { data } = useContext(StoreContext);
  const { page, section, subsection } = useParams();
  const [active, setActive] = useState({ page, section, subsection });

  useEffect(() => {
    const activeSetter = () => {
      setActive(prev => ({ ...prev, page, section, subsection }));
    };
    activeSetter();
  }, [page, section, subsection]);

  return (
    <Container
      variants={sidebar}
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={transition}
      style={{ height: props.height }}
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

const Pages = (props: { active: IActiveSIdeBar; pages: [IPage] | undefined }) => (
  <>
    {!!props.pages &&
      props.pages.length > 0 &&
      props.pages.map((pg, i) => (
        <React.Fragment key={i}>
          <Link to={pg.slug}>
            <Button active={props.active.page === pg.slug}>{pg.title}</Button>
          </Link>
          <Sections active={props.active} page={pg} />
        </React.Fragment>
      ))}
  </>
);

const Sections = (props: { active: IActiveSIdeBar; page: IPage }) => (
  <>
    {props.active.page === props.page.slug && !!props.page.sections && props.page.sections.length > 0 && (
      <ul tw='my-2 mx-auto w-[fit-content] bg-neutral-200 p-3 rounded-md'>
        {props.page.sections.map((sect, i) => (
          <li
            key={i}
            tw='mt-2'
            style={{ color: props.active.section === sect.slug && !props.active.subsection ? 'var(--primary)' : '' }}
          >
            <Link to={`${props.page.slug}/${sect.slug}`}>{sect.title}</Link>
            <SubSections active={props.active} page={props.page} section={sect} />
          </li>
        ))}
      </ul>
    )}
  </>
);

const SubSections = (props: { active: IActiveSIdeBar; page: IPage; section: ISection }) => (
  <>
    {props.active.section === props.section.slug &&
      !!props.section.subSections &&
      props.section.subSections.length > 0 && (
        <ul tw='mt-4 text-neutral-800'>
          {props.section.subSections.map((sub, i) => (
            <li key={i} tw='mt-2' style={{ color: props.active.subsection === sub.slug ? 'var(--primary)' : '' }}>
              <Link to={`${props.page.slug}/${props.section.slug}/${sub.slug}`}>{sub.title}</Link>
            </li>
          ))}
        </ul>
      )}
  </>
);
