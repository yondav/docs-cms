import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
:root {
  --font-primary: 'Montserrat', sans-serif;
}

.dark {}

.Toastify__progress-bar {}

html {
  ${tw`min-w-[350px] text-base`}
}

body {
  ${tw`font-primary font-normal bg-gray-900 text-gray-100`}
}

h1 {
  ${tw`font-bold	text-5xl	leading-10`}
}

h2 {
  ${tw`font-bold	text-4xl	leading-9`}
}

h3 {
  ${tw`font-semibold	text-3xl	leading-8`}
}

p {}

a {
  ${tw`text-purple-500 hover:text-yellow-500 transition-all duration-300 ease-in`}
  text-decoration: none;
}
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
