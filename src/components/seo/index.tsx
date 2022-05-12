import React from 'react';
import { Helmet } from 'react-helmet';
import { IPage } from '../../types';

const SEO: React.FC<{ activePage: IPage; meta?: []; description?: string; image?: string; url?: string }> = ({
  activePage,
}) => {
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={activePage.title}
      titleTemplate={`FETA | ${activePage.title}`}
      meta={[
        // open graph
        // {
        //   name: 'description',
        //   content: metaDescription,
        // },
        {
          property: 'og:title',
          content: activePage.title,
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
          content: activePage.title,
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
