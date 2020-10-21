/** @jsx jsx */
/* eslint-disable */
import { jsx } from '@emotion/core';
import Types from 'prop-types';

import { Size, JustifyContent, AlignItems, Breakpoint, Spacer } from '../common';

const mediaQueries = Object.values(Breakpoint).map(bp => `@media (min-width: ${bp}px)`);

const Box = props => {
  const {
    as: Element,
    size,
    justifyContent,
    alignItems,
    children,
    className,
    marginX,
    paddingX,
    marginY,
    paddingY,
    customMediaQueries,
  } = props;

  const getFlex = breakpoint => {
    const style = { flex: 0, display: 'none' };
    if (size && size[breakpoint]) {
      style.flex =
        size[breakpoint] <= 1 ? `0 1 ${size[breakpoint] * 100}%` : `0 0 ${size[breakpoint]}px`;
      style.display = 'flex';
    }
    return style;
  };

  const style = {
    ...getFlex(Box.Size.SMALLEST),

    [customMediaQueries[0]]: {
      ...getFlex(Box.Size.EXTRA_SMALL),
    },
    [customMediaQueries[1]]: {
      ...getFlex(Box.Size.SMALL),
    },
    [customMediaQueries[2]]: {
      ...getFlex(Box.Size.MEDIUM),
    },
    [customMediaQueries[3]]: {
      ...getFlex(Box.Size.LARGE),
    },
    [customMediaQueries[4]]: {
      ...getFlex(Box.Size.EXTRA_LARGE),
    },
  };

  if (justifyContent) {
    style.justifyContent = justifyContent;
  }
  if (alignItems) {
    style.alignItems = alignItems;
  }

  style.margin = `${Spacer * marginY}px  ${Spacer * marginX}px`;
  style.padding = `${Spacer * paddingY}px  ${Spacer * paddingX}px`;

  return size ? (
    <Element className={className} css={style}>
      {children}
    </Element>
  ) : null;
};

Box.Size = { ...Size, SMALLEST: 'default' };

Box.propTypes = {
  alignItems: Types.oneOf(Object.values(AlignItems)),
  children: Types.oneOfType([Types.arrayOf(Types.node), Types.node]),
  className: Types.string,
  justifyContent: Types.oneOf(Object.values(JustifyContent)),
  marginX: Types.number,
  marginY: Types.number,
  paddingX: Types.number,
  paddingY: Types.number,
  as: Types.elementType,
  size: Types.shape({
    [Box.Size.EXTRA_LARGE]: Types.number,
    [Box.Size.LARGE]: Types.number,
    [Box.Size.MEDIUM]: Types.number,
    [Box.Size.SMALL]: Types.number,
    [Box.Size.EXTRA_SMALL]: Types.number,
    [Box.Size.SMALLEST]: Types.number,
  }).isRequired,
  customMediaQueries: Types.arrayOf(Types.string),
};

Box.defaultProps = {
  justifyContent: null,
  alignItems: null,
  children: null,
  className: '',
  paddingX: 0,
  marginX: 0,
  paddingY: 0,
  marginY: 0,
  as: 'div',
  customMediaQueries: mediaQueries,
};

export default Box;
