import React from 'react';
import { Helmet } from 'react-helmet';

const SEO: React.FC<{ activePage: string }> = ({ activePage }) => {
  return (
    <></>
    // <Helmet
    //   htmlAttributes={{ lang }}
    //   title={toTitle(title)}
    //   titleTemplate={`%s | ${site.siteMetadata.title}`}
    //   meta={[
    //     // open graph
    //     {
    //       name: 'description',
    //       content: metaDescription,
    //     },
    //     {
    //       property: 'og:title',
    //       content: toTitle(title),
    //     },
    //     {
    //       property: 'og:description',
    //       content: metaDescription,
    //     },
    //     {
    //       property: 'og:type',
    //       content: 'website',
    //     },
    //     {
    //       property: 'og:url',
    //       content: metaUrl,
    //     },
    //     {
    //       property: 'og:image',
    //       content: metaImage.url,
    //     },
    //     // twitter card
    //     {
    //       name: 'twitter:card',
    //       content: 'summary',
    //     },
    //     {
    //       name: 'twitter:title',
    //       content: toTitle(title),
    //     },
    //     {
    //       name: 'twitter:description',
    //       content: metaDescription,
    //     },
    //     {
    //       name: 'twitter:image',
    //       content: metaImage.url,
    //     },
    //     {
    //       name: 'twitter:image:alt',
    //       content: metaImage.alt,
    //     },
    //   ].concat(meta)}
    // />
  );
};

export default SEO;
