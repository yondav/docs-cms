import React, { forwardRef, useContext } from 'react';
import * as Mobile from './mobile';
import Theme from '../svg/icon.theme';
import Logo from '../svg/logo';
import { ThemeContext } from '../../context/theme';
import { Link } from 'react-router-dom';

const Nav = forwardRef<HTMLElement>((props, navRef) => {
  const { sideBar, toggleSideBar } = useContext(ThemeContext);

  return (
    <nav
      ref={navRef}
      tw='w-full px-6 py-4 flex justify-between items-center border-b border-neutral-300 lg:z-20 bg-neutral-200'
    >
      <Link to='/' tw='w-20 text-neutral-800 mr-auto flex items-center lg:items-end'>
        <Logo />
      </Link>
      <div tw='flex items-center justify-between w-24 ml-auto'>
        <Theme />
        <div tw='h-full cursor-pointer relative' onClick={toggleSideBar} tabIndex={-1}>
          <div tw='cursor-pointer'>
            <Mobile.Burger active={sideBar} />
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Nav;
