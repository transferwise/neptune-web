import React, { ReactNode } from 'react';
import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: ReactNode;
};

export default function Link({ href, children }: LinkProps) {
  return (
    <NextLink href={process.env.ASSET_PREFIX + href} prefetch={false}>
      {children}
    </NextLink>
  );
}
