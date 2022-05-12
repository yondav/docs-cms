import React from 'react';
import tw, { styled } from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';

const SideNav = styled(motion.div)(() => [
  tw`w-[50vw] h-full fixed`,

  tw`focus:outline-none border-r border-t border-neutral-300 bg-neutral-200 py-4 left-0 top-0 fixed rounded-tr-lg shadow-xl z-20`,
]);

const Container: React.FC<{ active: boolean }> = ({ active, children }) => {
  return (
    <AnimatePresence>
      {active && (
        <SideNav
          tabIndex={-1}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '' }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.3, ease: 'linear' }}
        >
          <div tw='flex flex-col w-full'>{children}</div>
        </SideNav>
      )}
    </AnimatePresence>
  );
};

export default Container;
