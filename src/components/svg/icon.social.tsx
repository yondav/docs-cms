import React from 'react';

const Social = (props: { path: string; fill?: string }) => {
  return (
    <div tw='relative flex justify-center items-center h-[24px] w-[24px] cursor-pointer hover:(animate-pulse text-primary scale-110) transition-all duration-300 ease-in-out'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 35'>
        <path d={props.path} fillRule='evenodd' fill={props.fill || 'currentColor'} />
      </svg>
    </div>
  );
};

export default Social;
