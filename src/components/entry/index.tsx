import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';

const Entry = (props: { entry }) => (
  <>
    {props.entry && (
      <article tw='mx-auto my-8 w-3/4 p-4 bg-neutral-200 rounded-lg'>
        {props.entry.__typename.toLowerCase() === 'page' && (
          <h1 className='grdTxt' tw='mb-5'>
            {props.entry?.title}
          </h1>
        )}
        {props.entry.__typename.toLowerCase() === 'section' && (
          <h2 className='grdTxt' tw='mb-5'>
            {props.entry?.title}
          </h2>
        )}
        {props.entry.__typename.toLowerCase() === 'subsection' && (
          <h3 className='grdTxt' tw='mb-5'>
            {props.entry?.title}
          </h3>
        )}
        {props.entry?.description.raw && <RichText content={props.entry?.description?.raw} />}
      </article>
    )}
  </>
);

export default Entry;
