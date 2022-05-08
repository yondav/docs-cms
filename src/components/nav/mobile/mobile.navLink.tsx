import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)((props: { $active?: boolean }) => [
  tw`px-4 py-2 text-center mx-2 transition-all duration-300 hover:(bg-neutral-100)`,

  props.$active && tw`text-primary`,
]);

export default NavLink;
