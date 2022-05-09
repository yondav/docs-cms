import React, { useContext, useEffect, useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StoreContext } from '../../context/store/store.context';
import Logo from '../svg/logo';
import { IPage, ISection } from '../../types/store';
import { IActiveSIdeBar } from '../../types/ui';

const SideBar = () => {
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
    <Container>
      <div tw='lg:hidden w-32 text-neutral-800 mr-auto px-6 py-4'>
        <Logo />
      </div>
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
    ${tw`border-r border-neutral-300 absolute w-full h-full bg-neutral-200 top-0 left-0 md:relative`}
  `}
`;

const Button = styled(motion.div)((props: { active?: boolean }) => [
  tw`m-3 p-5 border border-neutral-300 rounded-lg`,
  props.active && tw`border-neutral-500`,
]);

const Pages = (props: { active: IActiveSIdeBar; pages: [IPage] | undefined }) => (
  <>
    {!!props.pages &&
      props.pages.length > 0 &&
      props.pages.map((pg, i) => (
        <React.Fragment key={i}>
          <Link to={pg.slug}>
            <Button>{pg.title}</Button>
          </Link>
          <Sections active={props.active} page={pg} />
        </React.Fragment>
      ))}
  </>
);

const Sections = (props: { active: IActiveSIdeBar; page: IPage }) => (
  <>
    {props.active.page === props.page.slug && !!props.page.sections && props.page.sections.length > 0 && (
      <ul tw='mt-4'>
        {props.page.sections.map((sect, i) => (
          <li key={i} tw='mt-2'>
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
        <ul tw='mt-4'>
          {props.section.subSections.map((sub, i) => (
            <li key={i} tw='mt-2'>
              <Link to={`${props.page.slug}/${props.section.slug}/${sub.slug}`}>{sub.title}</Link>
            </li>
          ))}
        </ul>
      )}
  </>
);
