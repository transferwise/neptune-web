/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import Types from 'prop-types';

import { Size, JustifyContent, AlignItems, Breakpoint } from '../common';

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
    [customMediaQueries[0]]: {
      ...getFlex(Size.EXTRA_SMALL),
    },
    [customMediaQueries[1]]: {
      ...getFlex(Size.SMALL),
    },
    [customMediaQueries[2]]: {
      ...getFlex(Size.MEDIUM),
    },
    [customMediaQueries[3]]: {
      ...getFlex(Size.LARGE),
    },
    [customMediaQueries[4]]: {
      ...getFlex(Size.EXTRA_LARGE),
    },
  };

  return size ? (
    <Element
      className={classNames(
        {
          [`justify-content-${justifyContent}`]: justifyContent,
          [`align-items-${alignItems}`]: alignItems,
          [`m-x-${marginX}`]: marginX !== null,
          [`p-x-${paddingX}`]: paddingX !== null,
          [`m-y-${marginY}`]: marginY !== null,
          [`p-y-${paddingY}`]: paddingY !== null,
        },
        className,
      )}
      css={style}
    >
      {children}
    </Element>
  ) : null;
};

Box.propTypes = {
  alignItems: Types.oneOf([...Object.values(AlignItems)]),
  children: Types.oneOfType([Types.arrayOf(Types.node), Types.node]),
  className: Types.string,
  justifyContent: Types.oneOf([...Object.values(JustifyContent)]),
  marginX: Types.number,
  marginY: Types.number,
  paddingX: Types.number,
  paddingY: Types.number,
  as: Types.elementType,
  size: Types.shape({
    lg: Types.number,
    md: Types.number,
    sm: Types.number,
    xl: Types.number,
    xs: Types.number,
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
