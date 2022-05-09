import React, { useContext } from 'react';
import { motion, useCycle } from 'framer-motion';
import { ThemeContext } from '../../context/theme';

const Theme = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const [icon, toggleIcon] = useCycle(false, true);

  const toggle = () => {
    toggleIcon();
    toggleDark && toggleDark();
  };

  return (
    <div
      tw='relative flex justify-center items-center border border-neutral-300 rounded-md h-[36px] w-[36px] cursor-pointer lg:mx-3'
      onClick={toggle}
    >
      <svg width='20' height='20' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <motion.path
          initial={dark}
          animate={icon ? 'light' : 'dark'}
          variants={{
            dark: {
              d: 'M7.5,0C3.4,0,0,3.4,0,7.5C0,11.6,3.4,15,7.5,15c4.1,0,7.5-3.4,7.5-7.5c0-0.4,0-0.8-0.1-1.1c-0.8,1.1-2.2,1.9-3.7,1.9c-2.5,0-4.5-2-4.5-4.5c0-1.5,0.7-2.8,1.9-3.7C8.3,0,7.9,0,7.5,0z',
              transition: { duration: 0.3, delay: 0.2 },
              opacity: 1,
            },
            light: {
              d: 'M7.5,4.1c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4c1.9,0,3.4-1.5,3.4-3.4C10.9,5.6,9.4,4.1,7.5,4.1zM6.8,0v2.7h1.4V0H6.8z M6.8,12.3V15h1.4v-2.7H6.8z M15,6.8h-2.7v1.4H15V6.8z M2.7,6.8H0v1.4h2.7V6.8z M10.4,11.4l1.7,1.7l1-1l-1.7-1.7L10.4,11.4z M2,2.9l1.7,1.7l1-1L2.9,2L2,2.9z M3.6,10.4L2,12.1l1,1l1.7-1.7L3.6,10.4z M12.1,2l-1.7,1.7l1,1L13,2.9L12.1,2z',
              transition: { duration: 0.3, delay: 0.2 },
              opacity: 1,
            },
          }}
          fill='currentColor'
        />
      </svg>
    </div>
  );
};

export default Theme;
