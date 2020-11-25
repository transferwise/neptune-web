import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Decision from '.';
import Avatar from '../avatar';

jest.mock('lodash.throttle', () => jest.fn((fn) => fn));

describe('Decision', () => {
  const props = {
    options: [
      {
        media: {
          list: <Avatar type="initials">HM</Avatar>,
          block: <img src="img.jpg" alt="alt" />,
        },
        href: '#href',
        title: 'title',
        description: 'description',
        onClick: jest.fn(),
      },
    ],
    presentation: Decision.Presentation.LIST_BLOCK,
    type: Decision.Type.NAVIGATION,
  };

  const originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth');
  const resetClientWidth = (width) => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: width,
    });
  };

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
  });

  let container;
  beforeEach(() => {
    resetClientWidth(500);
  });

  describe(`when presentation is ${Decision.Presentation.LIST_BLOCK}`, () => {
    beforeEach(() => {
      ({ container } = render(<Decision {...props} />));
    });

    it('renders only Navigation Option before first breakpoint', () => {
      expect(getNavigationOption()).toBeInTheDocument();
      expect(getTile()).not.toBeInTheDocument();
    });

    it('renders only Tile after first breakpoint', () => {
      resetClientWidth(900);
      fireEvent(window, new Event('resize'));

      expect(getNavigationOption()).not.toBeInTheDocument();
      expect(getTile()).toBeInTheDocument();
      expect(getTile()).not.toHaveClass('np-tile--small');
    });
  });

  describe(`when presentation is ${Decision.Presentation.LIST_BLOCK} and size is Small`, () => {
    beforeEach(() => {
      ({ container } = render(
        <Decision
          {...props}
          presentation={Decision.Presentation.LIST_BLOCK}
          size={Decision.Size.SMALL}
        />,
      ));
    });

    it('renders only Navigation Option before breakpoint', () => {
      expect(getNavigationOption()).toBeInTheDocument();
      expect(getTile()).not.toBeInTheDocument();
    });

    it('renders Small Tile after breakpoint', () => {
      resetClientWidth(900);
      fireEvent(window, new Event('resize'));

      expect(getNavigationOption()).not.toBeInTheDocument();
      expect(getTile()).toBeInTheDocument();
      expect(getTile()).toHaveClass('np-tile--small');
    });
  });

  describe(`when presentation is ${Decision.Presentation.LIST}`, () => {
    beforeEach(() => {
      ({ container } = render(<Decision {...props} presentation={Decision.Presentation.LIST} />));
    });

    it('renders Navigation Option before breakpoint', () => {
      expect(getNavigationOption()).toBeInTheDocument();
      expect(getTile()).not.toBeInTheDocument();
    });
  });

  const getNavigationOption = () => container.querySelector('.tw-navigation-option');
  const getTile = () => container.querySelector('.np-tile');
});
