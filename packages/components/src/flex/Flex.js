/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Types from 'prop-types';
import { Sizes, flexDirection, mediaQueries } from '../common';

const Flex = props => {
  const { direction, children, marginX, paddingX, marginY, paddingY, customMediaQueries } = props;

  const getFlexDirection = breakpoint => {
    return direction && direction[breakpoint] && flexDirection.indexOf(direction[breakpoint]) > -1
      ? direction[breakpoint]
      : 'row';
  };

  const style = {
    [customMediaQueries[0]]: {
      flexDirection: getFlexDirection(Sizes.EXTRA_SMALL),
    },
    [customMediaQueries[1]]: {
      flexDirection: getFlexDirection(Sizes.SMALL),
    },
    [customMediaQueries[2]]: {
      flexDirection: getFlexDirection(Sizes.MEDIUM),
    },
    [customMediaQueries[3]]: {
      flexDirection: getFlexDirection(Sizes.LARGE),
    },
    [customMediaQueries[4]]: {
      flexDirection: getFlexDirection(Sizes.EXTRA_LARGE),
    },
  };

  return (
    <div className="d-flex" css={style}>
      {React.Children.map(children, child => {
        if (child) {
          const childrenProps = { ...childrenProps, marginX, paddingX, marginY, paddingY };
          return React.cloneElement(child, childrenProps);
        }
        return child;
      })}
    </div>
  );
};

Flex.propTypes = {
  direction: Types.shape({
    xs: Types.oneOf(flexDirection),
    sm: Types.oneOf(flexDirection),
    md: Types.oneOf(flexDirection),
    lg: Types.oneOf(flexDirection),
    xl: Types.oneOf(flexDirection),
  }).isRequired,
  children: Types.oneOfType([Types.arrayOf(Types.node), Types.node]),
  marginX: Types.number,
  paddingX: Types.number,
  marginY: Types.number,
  paddingY: Types.number,
  customMediaQueries: Types.arrayOf(Types.string),
};

Flex.defaultProps = {
  children: null,
  marginX: 0,
  paddingX: 0,
  marginY: 0,
  paddingY: 0,
  customMediaQueries: mediaQueries,
};

export default Flex;
