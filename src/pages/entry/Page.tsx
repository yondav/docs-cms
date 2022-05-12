import React, { useCallback } from 'react';
import { useParams, Outlet, useOutletContext } from 'react-router-dom';
import Entry from '../../components/entry';

const Page = () => {
  const entry = useOutletContext();
  const { section } = useParams();

  const renderEntry = useCallback(() => {
    if (!entry) return null;
    return (
      <>
        <Entry entry={entry} />
        {section && <Outlet context={entry} />}
      </>
    );
  }, [section]);

  return <>{renderEntry()}</>;
};

export default Page;
