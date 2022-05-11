import React from 'react';
import { motion } from 'framer-motion';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { fadeBounceDown, transitions } from '../../styles/framerVariants';

const Entry = (props: { entry }) => (
  <>
    {props.entry && (
      <motion.article
        variants={fadeBounceDown}
        initial='hidden'
        whileInView='visible'
        transition={transitions.smooth}
        tw='mx-auto w-3/4 p-4 bg-neutral-200 rounded-lg'
      >
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
      </motion.article>
    )}
  </>
);

export default Entry;
