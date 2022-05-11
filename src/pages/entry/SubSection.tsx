import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/store/store.context';
import Entry from '../../components/entry';
import { ISubSection } from '../../types';

const SubSection = () => {
  const [currSub, setCurrSub] = useState<ISubSection | undefined>(undefined);
  const { data } = useContext(StoreContext);
  const { page, section, subsection } = useParams();

  useEffect(() => {
    const unsubscribe = () => {
      if (!page || !section || !subsection || !data) return;
      if (!!data?.pages && data?.pages.length > 0)
        setCurrSub(
          data?.pages
            .find(pg => pg.slug === page)
            ?.sections.find(sect => sect.slug === section)
            ?.subSections.find(sub => sub.slug === subsection)
        );
    };
    unsubscribe();
  }, [data, page, section, subsection]);
  return <Entry entry={currSub} />;
};

export default SubSection;
