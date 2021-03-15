import React, { forwardRef, useRef } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import { Breakpoint } from '../common';
import { useClientWidth } from '../common/hooks';

const Layout = { COLUMN: 'COLUMN' };

const SizeSwapper = forwardRef(({ items }, ref) => {
  if (!items || !items.length) {
    return null;
  }

  const parentRef = useRef(null);

  const [clientWidth] = useClientWidth({ ref: ref || parentRef });

  // If all breakpoints are specified and clientWidth never > breakpoint itemsToRender can be undefined.
  // Do not use deconstruct here to get items and layout.
  let itemsToRender = [];

  if (clientWidth) {
    // eslint-disable-next-line
    itemsToRender = items.filter(({ breakpoint = 0 }) => clientWidth >= breakpoint).pop();
  } else {
    // On SSR environments useClientWidth returns null because ref is undefined so we render
    // all elements by default.
    // If there's no SSR and on first Hydration only the right elements are going to be rendered.
    // If clientWidth is null or zero all elements render like a responsive technique would do.
    // eslint-disable-next-line
    itemsToRender.items = items.map(({ items }) => Object.values(items));
  }

  // Always return parent container even if there are no items to display to
  // keep the ref on DOM and let clientWidth be calculated properly.
  return (
    <div
      className={classNames('np-size-swapper d-flex', {
        'flex-column': itemsToRender && itemsToRender.layout === Layout.COLUMN,
      })}
      style={{ visibility: clientWidth ? 'visible' : 'hidden' }}
      ref={parentRef}
    >
      {itemsToRender && itemsToRender.items}
    </div>
  );
});

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
