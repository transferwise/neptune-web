import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { isExpired } from '../utils/pageUtils';

export default function Badge({ children, expiryDate, className }) {
  if (expiryDate !== null && isExpired(expiryDate)) {
    // eslint-disable-next-line no-console
    console.log(`Please delete expired ('${expiryDate}') and redundant badge!`);
    return null;
  }
  return <span className={classNames('badge', 'badge-success', className)}>{children}</span>;
}

Badge.propTypes = {
  children: Types.node.isRequired,
  expiryDate: Types.instanceOf(Date).isRequired,
  className: Types.string,
};

Badge.defaultProps = {
  className: undefined,
};
