import React, { useContext, useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { StoreContext } from '../../context/store/store.context';
import Entry from '../../components/entry';
import { ISection } from '../../types';

const Section = () => {
  const [currSect, setCurrSect] = useState<ISection | undefined>(undefined);
  const { data } = useContext(StoreContext);
  const { page, section } = useParams();

  useEffect(() => {
    const unsubscribe = () => {
      if (!page || !section || !data) return;
      if (!!data?.pages && data?.pages.length > 0)
        setCurrSect(data?.pages.find(pg => pg.slug === page)?.sections.find(sect => sect.slug === section));
    };
    unsubscribe();
  }, [data, page, section]);

  return (
    <>
      <Entry entry={currSect} />
      <Outlet />
    </>
  );
};

export default Section;
