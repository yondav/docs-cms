import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const paths = ({ isMobile, isTablet, isDesktop }) => {
  const viewPortPosTop = (num: number) => {
    if (isMobile) return num - 168;
    if (isTablet) return num - 190;
    if (isDesktop) return num;
  };

  const viewPortPosLeft = (num: number) => {
    if (isMobile) return num + 17;
    if (isTablet) return num;
    if (isDesktop) return num;
  };
  return [
    {
      d: 'M17.72,0q4.08,0,6.89,4.79t2.8,12.42q0,8.26-3,13c-2,3.17-4.34,4.76-7,4.76s-4.88-1.54-6.86-4.62S7.59,23.1,7.59,17.81s1-9.59,2.92-12.88S14.88,0,17.72,0Zm5.19,16.68q0-15.28-5.36-15.28Q12,1.4,12,16.68ZM12,18.18q0,7.91,1.47,11.67c1,2.5,2.31,3.75,4,3.75q5.39,0,5.43-15.42Z',
      fill: 'var(--yellow-secondary)',
      style: { left: '96%', top: `${viewPortPosTop(85)}%`, width: '1.5rem', height: '1.5rem' },
    },
    {
      d: 'M10.9,35H6.56a30.62,30.62,0,0,0,.94-8.82V11.89q0-6.06,3.42-9A11.4,11.4,0,0,1,18.48,0,9.18,9.18,0,0,1,25.7,3.09a11.68,11.68,0,0,1,2.74,8.06A14.15,14.15,0,0,1,25,20.6q-3.39,4-7.76,4a9.59,9.59,0,0,1-5.6-1.88v3.32A43.63,43.63,0,0,1,10.9,35Zm.78-18.15a6.31,6.31,0,0,0,1.63,4.69,5.61,5.61,0,0,0,4.13,1.6,6,6,0,0,0,4.94-2.54,10.64,10.64,0,0,0,2-6.74c0-3.53-.9-6.32-2.71-8.39a7.94,7.94,0,0,0-6-3.09A3.35,3.35,0,0,0,12.52,3.8a9.25,9.25,0,0,0-.84,4.56Z',
      fill: 'var(--yellow-secondary)',
      style: { left: '10.09%', top: `${viewPortPosTop(18)}%`, width: '1.1rem', height: '1.1rem' },
    },
    {
      d: 'M19.37,0,3.22,33.05l3.27,1.59L20.5,6l7.76,29,3.52-.93L22.76.32Z',
      fill: 'var(--orange-primary)',
      style: { left: `${viewPortPosLeft(39.87)}%`, top: `${viewPortPosTop(48)}%`, width: '1rem', height: '1rem' },
    },
    {
      d: 'M31.23,0l.12,8.18h-1a7.91,7.91,0,0,0-1-4A4.11,4.11,0,0,0,27,2.31a14.5,14.5,0,0,0-3.92-.4H13.48V28.62c0,2.31.29,3.77.88,4.39s1.93,1,4,1v1H3.65V34c2.13-.06,3.49-.41,4.08-1s.89-2.08.89-4.39V6.38c0-2.31-.3-3.77-.89-4.39S5.78,1,3.65,1V0Z',
      fill: 'var(--red-secondary)',
      style: {
        left: '23.68%',
        top: `${viewPortPosTop(95)}%`,
        width: '1rem',
        height: '1rem',
      },
    },
    {
      d: 'M33.86,35,17.71,0h-.47L1.14,35Zm-6.55-1.77H4.21L15.89,8.46Z',
      fill: 'var(--red-secondary)',
      style: { left: '88.8%', top: `${viewPortPosTop(13)}%`, width: '2rem', height: '2rem' },
    },
  ];
};

const Greek: React.FC<{
  d: string;
  fill: string;
  style: any;
}> = ({ d, fill, style }) => {
  const ref = useRef<HTMLDivElement>(null);
  const viewBox = Math.floor(Math.random() * (32 - 14 + 1) + 14);
  const transformArr = [Math.floor(Math.random() * -10), Math.floor(Math.random() * 10)];

  const vals = {
    x: useMotionValue(0),
    y: useMotionValue(0),
    skew: useMotionValue(0),
    rotate: useMotionValue(0),
  };

  const transformVals = {
    x: useTransform(vals.x, [0, viewBox], transformArr),
    y: useTransform(vals.y, [0, viewBox], transformArr),
    skew: useTransform(vals.x, [0, viewBox], transformArr),
    rotate: useTransform(vals.rotate, [0, viewBox], transformArr),
  };

  useEffect(() => {
    const handleMouseMove = e => {
      const rect = ref.current?.getBoundingClientRect();

      if (rect) {
        vals.x.set(e.clientX - rect.top);
        vals.y.set(e.clientY - rect.top);
        vals.skew.set(e.clientX - rect.top);
        vals.rotate.set(e.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [vals.rotate, vals.skew, vals.x, vals.y]);

  return (
    <motion.div
      tw='transition-all duration-300 ease-in-out'
      ref={ref}
      style={{
        ...style,
        position: 'absolute',
        rotate: transformVals.rotate,
        skew: transformVals.skew,
        y: transformVals.y,
        x: transformVals.x,
        zIndex: -10,
      }}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 35' tw='absolute z-0'>
        <path d={d} fill={fill} />
      </svg>
    </motion.div>
  );
};

export default Greek;
