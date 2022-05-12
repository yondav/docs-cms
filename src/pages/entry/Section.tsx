import React, { useContext, useState, useEffect } from 'react';
import { useParams, Outlet, useOutletContext } from 'react-router-dom';
import { StoreContext } from '../../context/store/store.context';
import { IPage, ISection } from '../../types';
import Entry from '../../components/entry';

const Section = () => {
  const entry = useOutletContext();
  const { page, section } = useParams();
  const { data } = useContext(StoreContext);
  const [currSect, setCurrSect] = useState<ISection | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = () => {
      if (!page || !section || !data) return;
      setCurrSect((entry as IPage).sections.find(sect => sect.slug === section));
    };
    unsubscribe();
  }, [data, page, section, entry]);

  return (
    <>
      <Entry entry={currSect} />
      <Outlet context={currSect} />
    </>
  );
};

export default Section;
