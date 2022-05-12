import React, { useCallback } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Entry from '../../components/entry';
import SEO from '../../components/seo';
import { IPage } from '../../types';

const Page = () => {
  const { page, section } = useParams();
  const { loading, error, data } = useQuery(GET_PAGE, { variables: { page } });

  const renderEntry = useCallback(() => {
    if (!data) return null;
    const entry = data.page;
    return (
      <>
        <SEO activePage={entry as IPage} />
        <Entry entry={entry} />
        {section && <Outlet context={entry} />}
      </>
    );
  }, [data, section]);

  return <>{renderEntry()}</>;
};

export default Page;

const GET_PAGE = gql`
  query GetPage($page: String!) {
    page(where: { slug: $page }) {
      id
      slug
      title
      description {
        raw
      }
      sections {
        id
        slug
        title
        description {
          raw
        }
        subSections {
          id
          slug
          title
          description {
            raw
          }
        }
      }
    }
  }
`;
