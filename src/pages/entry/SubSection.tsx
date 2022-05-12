import React, { useContext, useState, useEffect } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { StoreContext } from '../../context/store/store.context';
import Entry from '../../components/entry';
import { ISection, ISubSection } from '../../types';

const SubSection = () => {
  const { page, section, subsection } = useParams();
  const currSect = useOutletContext();
  const { data } = useContext(StoreContext);
  const [currSub, setCurrSub] = useState<ISubSection | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = () => {
      if (!page || !section || !subsection || !data) return;
      setCurrSub((currSect as ISection).subSections.find(sub => sub.slug === subsection));
    };
    unsubscribe();
  }, [data, page, section, subsection, currSect]);
  return <Entry entry={currSub} />;
};

export default SubSection;
