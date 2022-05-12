import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BreadCrumb: React.FC<{
  endpoint: string;
  slug: string;
  bullet?: boolean;
}> = ({ endpoint, slug, bullet }) => {
  const deformSlug = slug => {
    return slug
      .split('-')
      .map(word => word[0].toUpperCase() + word.substr(1).toLowerCase())
      .join(' ');
  };

  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
      <Link to={endpoint}>{deformSlug(slug)}</Link>
      {bullet && <span tw='mx-1'>&bull;</span>}
    </motion.span>
  );
};

export default BreadCrumb;
