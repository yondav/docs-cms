import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { root, dark } from './vars';

const CustomStyles = createGlobalStyle`
:root { ${root} }

.dark { ${dark} }

.Toastify__progress-bar {
  background-color: var(--primary);
  background: linear-gradient(206.1deg, var(--yellow-primary) 6.41%, var(--red-primary) 89.64%);
}

html {
  min-width: 350px;
  font-size: 16px;
  scroll-behavior: smooth;
  ${tw`transition-all duration-300 ease-in-out`}
}

@media only screen and (max-width: 640px) {
  html {
    font-size: 14px;
  }
}

body {
  ${tw`bg-neutral-200 text-neutral-800 font-primary font-normal transition-all duration-300 ease-in-out`}
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
  text-decoration: none;
}

ul {
  list-style-type: circle;
  ${tw`my-6`}
}

li {
  ${tw`ml-12`}
}
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
