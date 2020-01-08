import React from 'react';
import Flex from './Flex';
import Box from '../box';
import { select, array, object } from '@storybook/addon-knobs';
import { JustifyContent, AlignItems } from '../common';
import './Flexdocs.css';

export default {
  component: Flex,
  title: 'Flex',
};

export const basic = () => {
  // Flex Knobs
  const marginX = select('marginX', [0, 1, 2, 3, 4], 1, 'Flex Knobs');
  const marginY = select('marginY', [0, 1, 2, 3, 4], 1, 'Flex Knobs');
  const paddingY = select('paddingY', [0, 1, 2, 3, 4], 1, 'Flex Knobs');
  const paddingX = select('paddingX', [0, 1, 2, 3, 4], 1, 'Flex Knobs');
  const customMediaQueries = array('customMediaQueries', [
    '@media (min-width: 0px)',
    '@media (min-width: 576px)',
    '@media (min-width: 768px)',
    '@media (min-width: 992px)',
    '@media (min-width: 1200px)',
  ]);

  const direction = object(
    'direction',
    {
      lg: 'row',
      md: 'row',
      sm: 'row',
      xl: 'row',
      xs: 'row',
    },
    'Flex Knobs',
  );

  // Box knobs

  const size = object(
    'size',
    {
      xs: 0.25,
      sm: 0.25,
      md: 0.3333333333333333,
      lg: 0.5,
      xl: 1,
    },
    'Box Knobs',
  );

  const justifyContent = select(
    'justifyContent',
    Object.values(JustifyContent),
    'center',
    'Box Knobs',
  );
  const alignItems = select('alignItems', Object.values(AlignItems), 'center', 'Box Knobs');

  return (
    <div id="box">
      <Flex
        customMediaQueries={customMediaQueries}
        marginX={marginX}
        marginY={marginY}
        paddingX={paddingX}
        paddingY={paddingY}
        direction={direction}
        className="flex-docs"
      >
        <Box
          justifyContent={justifyContent}
          alignItems={alignItems}
          size={size}
          className="BoxDoc"
          customMediaQueries={customMediaQueries}
        >
          <div className="demo" />
        </Box>
        <Box
          justifyContent={justifyContent}
          alignItems={alignItems}
          size={size}
          className="BoxDoc"
          customMediaQueries={customMediaQueries}
        >
          <div className="demo" />
        </Box>
      </Flex>
    </div>
  );
};
