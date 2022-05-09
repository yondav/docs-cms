import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

const NavLink = styled(Link)`
  ${tw`px-4 text-sm font-semibold text-center mx-2 transition-all duration-300`}
`;

export default NavLink;
