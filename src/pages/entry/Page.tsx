import React, { useContext, useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { StoreContext } from '../../context/store/store.context';
import Entry from '../../components/entry';
import { IPage } from '../../types';

const Page = () => {
  const [currPage, setCurrPage] = useState<IPage | undefined>(undefined);
  const { data } = useContext(StoreContext);
  const { page } = useParams();

  useEffect(() => {
    const unsubscribe = () => {
      if (!page || !data) return;
      if (!!data?.pages && data?.pages.length > 0) setCurrPage(data?.pages.find(pg => pg.slug === page));
    };
    unsubscribe();
  }, [data, page]);

  return (
    <>
      <Entry entry={currPage} />
      <Outlet />
    </>
  );
};

export default Page;
