import React from 'react';
import tw, { styled, css } from 'twin.macro';

const StyledBurger = styled.div((props: { $active?: boolean }) => [
  tw`h-2/3 flex flex-col items-start justify-around cursor-pointer transition-all duration-300 ease-in-out`,

  css`
    & .top-bun {
      transform-origin: 19px;
      ${tw`w-[22px] h-[2px] bg-neutral-800 transition-all duration-300 ease-in-out`}
      ${props.$active &&
      `
    transform: rotate(-45deg);
    z-index: 100;`}
    }

    & .bottom-bun {
      transform-origin: 19px;
      ${tw`w-[16px] h-[2px] bg-neutral-800 transition-all duration-300 ease-in-out`}
      ${props.$active &&
      `
      transform: rotate(45deg);
      width: 22px;
      z-index: 100;`}
    }
  `,
]);

const Burger = (props: { active: boolean }) => {
  return (
    <div tw='relative flex justify-center items-center border border-neutral-300 rounded-md h-[36px] w-[36px] cursor-pointer'>
      <StyledBurger $active={props.active}>
        <div className='top-bun' />
        <div className='bottom-bun' />
      </StyledBurger>
    </div>
  );
};

export default Burger;
