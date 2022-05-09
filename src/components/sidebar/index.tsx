import React, { useContext, useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StoreContext } from '../../context/store/store.context';
import Logo from '../svg/logo';

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

const SideBar = () => {
  const { data, loading, error } = useContext(StoreContext);
  const [active, setActive] = useState({ page: '', section: '', subSection: '' });

  const setter = (model, slug) => {
    switch (model) {
      case 'page':
        return setActive({ ...active, page: slug });
      case 'section':
        return setActive({ ...active, section: slug });
      case 'subSection':
        return setActive({ ...active, subSection: slug });
      default:
        break;
    }
  };

  return (
    <Container>
      <div tw='lg:hidden w-32 text-neutral-800 mr-auto px-6 py-4'>
        <Logo />
      </div>
      {!!data?.pages &&
        data?.pages.length > 0 &&
        data?.pages.map((pg, i) => (
          <React.Fragment key={i}>
            <Link to={pg.slug}>
              <Button onClick={() => setter('page', pg.slug)}>{pg.title}</Button>
            </Link>
            {active.page === pg.slug && !!pg.sections && pg.sections.length > 0 && (
              <ul tw='mt-4'>
                {pg.sections.map((sect, i) => (
                  <li key={i} onClick={() => setter('section', sect.slug)} tw='mt-2'>
                    <Link to={`${pg.slug}/${sect.slug}`}>{sect.title}</Link>
                    {active.section === sect.slug && !!sect.subSections && sect.subSections.length > 0 && (
                      <ul tw='mt-4'>
                        {sect.subSections.map((sub, i) => (
                          <li key={i} tw='mt-2' onClick={() => setter('subSection', sub.slug)}>
                            <Link to={`${pg.slug}/${sect.slug}/${sub.slug}`}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
    </Container>
  );
};

export default SideBar;
