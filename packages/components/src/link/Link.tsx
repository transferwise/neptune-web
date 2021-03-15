import React, { ReactNode, ReactElement } from 'react';

type LinkProps = {
  href: string;
  children: ReactNode;
};

export default function Link({ href, children }: LinkProps): ReactElement {
  return <a href={process.env.ASSET_PREFIX + href}>{children}</a>;
}
