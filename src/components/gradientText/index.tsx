import React, { createElement } from 'react';

const elements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  a: 'a',
};

const GradientText: React.FC<{ type: string }> = ({ type, children, ...props }) => {
  return createElement(elements[type] || elements.h1, { ...props, className: 'grdTxt' }, children);
};

export default GradientText;
