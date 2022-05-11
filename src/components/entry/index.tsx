import React from 'react';
import tw, { styled } from 'twin.macro';
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
          {entry?.description.raw && (
            <RichText
              content={entry?.description?.raw}
              renderers={{
                h1: ({ children, ...props }) => <copy.H1 {...props}>{children}</copy.H1>,
                h2: ({ children, ...props }) => <copy.H2 {...props}>{children}</copy.H2>,
                h3: ({ children, ...props }) => <copy.H3 {...props}>{children}</copy.H3>,
                h4: ({ children, ...props }) => <copy.H4 {...props}>{children}</copy.H4>,
                h5: ({ children, ...props }) => <copy.H5 {...props}>{children}</copy.H5>,
                h6: ({ children, ...props }) => <copy.H6 {...props}>{children}</copy.H6>,
                p: ({ children, ...props }) => <copy.P {...props}>{children}</copy.P>,
                a: ({ children, ...props }) => <copy.A {...props}>{children}</copy.A>,
                ol: ({ children, ...props }) => <copy.OL {...props}>{children}</copy.OL>,
                ul: ({ children, ...props }) => <copy.UL {...props}>{children}</copy.UL>,
              }}
            />
          )}
        </motion.article>
      )}
    </>
  );
};

export default Entry;

const copy = {
  H1: styled.h1`
    ${tw`text-[1.675em] font-extrabold my-2.5`}
  `,
  H2: styled.h2`
    ${tw`text-2xl font-bold my-2.5`}
  `,
  H3: styled.h3`
    ${tw`text-xl font-semibold my-2.5`}
  `,
  H4: styled.h4`
    ${tw`text-lg font-semibold my-2.5`}
  `,
  H5: styled.h4`
    ${tw`text-lg font-medium my-2.5`}
  `,
  H6: styled.h4`
    ${tw`text-lg font-normal my-2.5`}
  `,
  P: styled.p`
    ${tw`text-base my-2.5`}
  `,
  A: styled.a`
    ${tw`text-primary`}
  `,
  OL: styled.ol`
    ${tw`list-decimal my-6`}
  `,
  UL: styled.ul`
    ${tw`list-disc my-6`}
  `,
  BlockQuote: styled.blockquote`
    ${tw`border-l-8 border-neutral-300 bg-neutral-100 px-2.5 py-2 my-6 `}
  `,
};
