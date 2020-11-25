import React, { useRef } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import { Breakpoint } from '../common';
import useClientWidth from './hooks';

const Layout = { COLUMN: 'COLUMN' };

const SizeSwapper = ({ items }) => {
  if (!items || !items.length) {
    return null;
  }
  const ref = useRef(null);
  const [clientWidth] = useClientWidth({ ref });

  // If all breakpoints are specified and clientWidth never > breakpoint itemsToRender can be undefined.
  // Do not use deconstruct here to get items and layout.
  const itemsToRender = items
    .filter(({ breakpoint = 0 }) => clientWidth >= breakpoint)
    .slice(-1)[0];

  // Always return parent container even if there are no items to display to
  // keep the ref on DOM and let clientWidth be calculated properly.
  return (
    <div
      className={classNames('np-size-swapper d-flex', {
        'flex-column': itemsToRender && itemsToRender.layout === Layout.COLUMN,
      })}
      ref={ref}
    >
      {itemsToRender && itemsToRender.items}
    </div>
  );
};

SizeSwapper.Breakpoint = Breakpoint;
SizeSwapper.Layout = Layout;

SizeSwapper.propTypes = {
  /** List of items that will appear at the specified breakpoint and presented in row or columns depending on layout  */
  items: Types.arrayOf(
    Types.shape({
      items: Types.arrayOf(Types.element),
      breakpoint: Types.number,
      layout: Types.oneOf([SizeSwapper.Layout.COLUMN]),
    }),
  ).isRequired,
};

export default SizeSwapper;
