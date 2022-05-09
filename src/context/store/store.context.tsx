import React, { createContext, useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { IPage } from '../../types/store';

interface IStoreContext {
  loading: boolean;
  error: any;
  data: { pages: [IPage] } | null;
}

const defaultState = {
  loading: true,
  error: false,
  data: null,
};

export const StoreContext = createContext<IStoreContext>(defaultState);

export const StoreProvider: React.FC = ({ children }) => {
  const { loading, error, data } = useQuery(getAll);
  const [store, setStore] = useState<IStoreContext>(defaultState);

  useEffect(() => {
    const unsubscribe = () => {
      // @ts-ignore
      setStore({ loading, error, data });
    };
    unsubscribe();
  }, [loading, error, data]);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

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
