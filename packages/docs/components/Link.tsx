import React, { ReactNode, FC } from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ href, children }: LinkProps) => (
  <NextLink href={process.env.ASSET_PREFIX + href} prefetch={false}>
    {children}
  </NextLink>
);

export default Link;
