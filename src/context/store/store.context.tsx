import React, { createContext, useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { IStoreContext } from '../../types';

const defaultState = {
  loading: true,
  error: false,
  data: null,
};

export const StoreContext = createContext<IStoreContext>(defaultState);

export const StoreProvider: React.FC = ({ children }) => {
  const { loading, error, data } = useQuery(GET_PAGE_LIST);
  const [store, setStore] = useState<IStoreContext>(defaultState);

  useEffect(() => {
    const unsubscribe = () => {
      setStore({ loading, error, data });
    };
    unsubscribe();
  }, [loading, error, data]);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

const GET_PAGE_LIST = gql`
  query GetPageList {
    pages {
      id
      slug
      title
      sections {
        id
        slug
        title
        subSections {
          id
          slug
          title
        }
      }
    }
  }
`;

const getAll = gql`
  query MyQuery {
    pages {
      id
      slug
      createdAt
      createdBy {
        id
        name
        picture
      }
      updatedAt
      updatedBy {
        id
        name
        picture
      }
      title
      description {
        raw
      }
      sections {
        createdBy {
          id
          name
          picture
          createdAt
        }
        updatedBy {
          id
          name
          picture
        }
        updatedAt
        slug
        title
        description {
          raw
        }
        subSections {
          id
          createdAt
          createdBy {
            id
            name
            picture
          }
          updatedBy {
            id
            name
            picture
          }
          updatedAt
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
