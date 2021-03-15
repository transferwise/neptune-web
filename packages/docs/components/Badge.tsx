import React, { ReactNode, ReactElement } from 'react';
import classNames from 'classnames';
import { isExpired } from '../utils/pageUtils';

type BadgeProps = {
  children: ReactNode;
  expiryDate?: Date;
  className?: string;
};

export default function Badge({
  children,
  expiryDate = undefined,
  className = undefined,
}: BadgeProps): ReactElement {
  if (expiryDate !== undefined && isExpired(expiryDate)) {
    // eslint-disable-next-line no-console
    console.warn(`Please delete expired ('${expiryDate}') and redundant badge!`);
    return <></>;
  }
  return <span className={classNames('badge', 'badge-success', className)}>{children}</span>;
}
