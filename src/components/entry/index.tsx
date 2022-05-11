import React from 'react';
import { motion } from 'framer-motion';
import { RichText } from '@graphcms/rich-text-react-renderer';
import GradientText from '../gradientText';
import { fadeBounceDown, transitions } from '../../styles/framerVariants';

const Entry: React.FC<{ entry: any }> = ({ entry }) => {
  return (
    <>
      {entry && (
        <motion.article
          variants={fadeBounceDown}
          initial='hidden'
          whileInView='visible'
          transition={transitions.smooth}
          tw='mx-auto w-3/4 p-4 bg-neutral-200 rounded-lg'
        >
          {entry.__typename.toLowerCase() === 'page' && <GradientText type='h1'>{entry?.title}</GradientText>}
          {entry.__typename.toLowerCase() === 'section' && <GradientText type='h2'>{entry?.title}</GradientText>}
          {entry.__typename.toLowerCase() === 'subsection' && <GradientText type='h3'>{entry?.title}</GradientText>}
          {entry?.description.raw && <RichText content={entry?.description?.raw} />}
        </motion.article>
      )}
    </>
  );
};

export default Entry;
