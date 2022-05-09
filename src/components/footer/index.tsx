import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import Socials from '../svg/socials';

const Footer = forwardRef<HTMLElement>((props, footerRef) => {
  return (
    <footer ref={footerRef} tw='py-4 flex flex-col justify-start items-center text-neutral-500 font-normal	text-sm'>
      <div tw='text-center mb-4'>
        <p>&#169; {new Date().getFullYear()} Feta</p>
        <div tw='flex flex-wrap justify-center md:justify-between items-center whitespace-nowrap'>
          <a href='#' tw='mx-1'>
            Community Guidelines
          </a>
          <span>&bull;</span>
          <a href='#' tw='mx-1'>
            Terms of Service
          </a>
          <span>&bull;</span>
          <a href='https://calendly.com/feta' target='_blank' rel='noopener noreferrer' tw='mx-1'>
            Calendly
          </a>
          <span>&bull;</span>
          <a
            href='https://substack.com/profile/87002130-fetamarket'
            target='_blank'
            rel='noopener noreferrer'
            tw='mx-1'
          >
            Substack
          </a>
          <span>&bull;</span>
          <Link to='/early' tw='mx-1'>
            Get in touch
          </Link>
        </div>
      </div>
      <Socials footer />
    </footer>
  );
});

export default Footer;
