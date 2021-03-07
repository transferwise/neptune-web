/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Types from 'prop-types';
import { Size, FlexDirection, Breakpoint } from '../common';

const mediaQueries = Object.values(Breakpoint).map((bp) => `@media (min-width: ${bp}px)`);

const Flex = (props) => {
  const {
    as: Element,
    direction,
    children,
    marginX,
    paddingX,
    marginY,
    paddingY,
    customMediaQueries,
    className,
  } = props;

  const getFlexDirection = (breakpoint) => {
    return direction && direction[breakpoint] && FlexDirection.indexOf(direction[breakpoint]) > -1
      ? direction[breakpoint]
      : 'row';
  };

  const style = {
    flexDirection: getFlexDirection(Flex.Size.SMALLEST),

    [customMediaQueries[0]]: {
      flexDirection: getFlexDirection(Flex.Size.EXTRA_SMALL),
    },
    [customMediaQueries[1]]: {
      flexDirection: getFlexDirection(Flex.Size.SMALL),
    },
    [customMediaQueries[2]]: {
      flexDirection: getFlexDirection(Flex.Size.MEDIUM),
    },
    [customMediaQueries[3]]: {
      flexDirection: getFlexDirection(Flex.Size.LARGE),
    },
    [customMediaQueries[4]]: {
      flexDirection: getFlexDirection(Flex.Size.EXTRA_LARGE),
    },
  };

  style.display = 'flex';

  return (
    <Element className={className} css={style}>
      {React.Children.map(children, (child) => {
        if (child && child.type && child.type.name === 'Box') {
          const childrenProps = { ...child.props, marginX, paddingX, marginY, paddingY };
          return React.cloneElement(child, childrenProps);
        }
        return child;
      })}
    </Element>
  );
};

Flex.Size = { ...Size, SMALLEST: 'default' };

Flex.propTypes = {
  direction: Types.shape({
    [Flex.Size.SMALLEST]: Types.oneOf(FlexDirection),
    [Flex.Size.EXTRA_SMALL]: Types.oneOf(FlexDirection),
    [Flex.Size.SMALL]: Types.oneOf(FlexDirection),
    [Flex.Size.MEDIUM]: Types.oneOf(FlexDirection),
    [Flex.Size.LARGE]: Types.oneOf(FlexDirection),
    [Flex.Size.EXTRA_LARGE]: Types.oneOf(FlexDirection),
  }).isRequired,
  children: Types.oneOfType([Types.arrayOf(Types.node), Types.node]),
  marginX: Types.number,
  paddingX: Types.number,
  marginY: Types.number,
  paddingY: Types.number,
  customMediaQueries: Types.arrayOf(Types.string),
  as: Types.elementType,
  className: Types.string,
};

Flex.defaultProps = {
  as: 'div',
  children: null,
  marginX: 0,
  paddingX: 0,
  marginY: 0,
  paddingY: 0,
  customMediaQueries: mediaQueries,
  className: '',
};

export default Flex;
