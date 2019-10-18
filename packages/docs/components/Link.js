import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = ({ href, children }) => (
  <NextLink href={process.env.ASSET_PREFIX + href} prefetch={false}>
    {children}
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
