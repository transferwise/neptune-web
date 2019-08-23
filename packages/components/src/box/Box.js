/** @jsx jsx */
import { jsx } from '@emotion/core';
import classNames from 'classnames';
import Types from 'prop-types';

import { Sizes, JustifyContent, AlignItems, mediaQueries } from '../common';

const Box = props => {
  const {
    size,
    justifyContent,
    alignItems,
    children,
    extraClassNames,
    marginX,
    paddingX,
    marginY,
    paddingY,
    tagHtml,
    customMediaQueries,
  } = props;

  const Tag = tagHtml;

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
      ...getFlex(Sizes.EXTRA_SMALL),
    },
    [customMediaQueries[1]]: {
      ...getFlex(Sizes.SMALL),
    },
    [customMediaQueries[2]]: {
      ...getFlex(Sizes.MEDIUM),
    },
    [customMediaQueries[3]]: {
      ...getFlex(Sizes.LARGE),
    },
    [customMediaQueries[4]]: {
      ...getFlex(Sizes.EXTRA_LARGE),
    },
  };

  return size ? (
    <Tag
      className={classNames(
        'flex__inner',
        {
          [`justify-content-${justifyContent}`]: justifyContent,
          [`align-items-${alignItems}`]: alignItems,
          [`m-x-${marginX}`]: marginX !== null,
          [`p-x-${paddingX}`]: paddingX !== null,
          [`m-y-${marginY}`]: marginY !== null,
          [`p-y-${paddingY}`]: paddingY !== null,
        },
        ...extraClassNames,
      )}
      css={style}
    >
      {children}
    </Tag>
  ) : null;
};

Box.propTypes = {
  alignItems: Types.oneOf([...Object.values(AlignItems)]),
  children: Types.oneOfType([Types.arrayOf(Types.node), Types.node]),
  extraClassNames: Types.arrayOf(Types.string),
  justifyContent: Types.oneOf([...Object.values(JustifyContent)]),
  marginX: Types.number,
  marginY: Types.number,
  paddingX: Types.number,
  paddingY: Types.number,
  tagHtml: Types.string,
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
  extraClassNames: [],
  paddingX: 0,
  marginX: 0,
  paddingY: 0,
  marginY: 0,
  tagHtml: 'div',
  customMediaQueries: mediaQueries,
};

export default Box;
