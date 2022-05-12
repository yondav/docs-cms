import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { IPage } from '../../types';

const SEO: React.FC<{
  activePage?: IPage;
  meta?: [];
  description?: string;
  image?: string;
  url?: string;
}> = ({ activePage }) => {
  const { pathname } = useLocation();
  const { page } = useParams();
  const [title, setTitle] = useState<string>(page && activePage ? activePage.title : 'Documentation');

  useEffect(() => {
    const titleSetter = () => {
      if (!page) setTitle('Documentation');
      if (page && activePage) setTitle(activePage.title);
    };
    console.log(!page);
    titleSetter();
  }, [page, activePage, pathname]);

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      titleTemplate={`FETA | ${title}`}
      meta={[
        // open graph
        // {
        //   name: 'description',
        //   content: metaDescription,
        // },
        {
          property: 'og:title',
          content: title,
        },
        // {
        //   property: 'og:description',
        //   content: metaDescription,
        // },
        {
          property: 'og:type',
          content: 'website',
        },
        // {
        //   property: 'og:url',
        //   content: metaUrl,
        // },
        // {
        //   property: 'og:image',
        //   content: metaImage.url,
        // },
        // twitter card
        // {
        //   name: 'twitter:card',
        //   content: 'summary',
        // },
        {
          name: 'twitter:title',
          content: title,
        },
        // {
        //   name: 'twitter:description',
        //   content: metaDescription,
        // },
        // {
        //   name: 'twitter:image',
        //   content: metaImage.url,
        // },
        // {
        //   name: 'twitter:image:alt',
        //   content: metaImage.alt,
        // },
      ].concat([])}
    />
  );
};

export default SEO;
