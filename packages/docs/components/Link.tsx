import React, { ReactNode, ReactElement } from 'react';
import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: ReactNode;
};

export default function Link({ href, children }: LinkProps): ReactElement {
  return (
    <NextLink href={process.env.ASSET_PREFIX + href} prefetch={false}>
      {children}
    </NextLink>
  );
}
