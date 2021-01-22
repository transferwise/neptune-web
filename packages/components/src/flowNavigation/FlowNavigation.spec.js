import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '../test-utils';

import FlowNavigation from '.';
import { Breakpoint } from '../common';

import Avatar from '../avatar';

jest.mock('lodash.throttle', () => jest.fn((fn) => fn));

jest.mock('./animatedLabel', () => {
  // eslint-disable-next-line react/prop-types
  return ({ className }) => <div className={className}>AnimatedLabel</div>;
});
jest.mock('./backButton', () => {
  // eslint-disable-next-line react/prop-types
  return ({ className, label }) => <div className={className}>BackButton{label}</div>;
});

describe('FlowNavigation', () => {
  const originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth');
  const resetClientWidth = (width) => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: width,
    });
  };
  beforeEach(() => {
    resetClientWidth(Breakpoint.MEDIUM + 1);
  });

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
  });

  const props = {
    avatar: (
      <Avatar type={Avatar.Type.INITIALS} size={Avatar.Size.MEDIUM}>
        TM
      </Avatar>
    ),
    logo: {
      desktop: <img alt="logo_desktop" src="img_desktop" width="138" height="24" />,
      mobile: <img alt="logo_mobile" src="img_mobile" height="32" width="24" />,
    },
    onClose: jest.fn(),
    steps: [
      {
        label: 'label-0',
      },
      { label: 'label-1' },
    ],
    activeStep: 0,
  };

  it(`renders as expected`, () => {
    expect(render(<FlowNavigation {...props} />).container).toMatchSnapshot();
  });

  it(`renders full Logo not visible on mobile`, () => {
    render(<FlowNavigation {...props} />);
    expect(logoFull().parentElement).toHaveClass('hidden-xs');
  });

  it(`renders separator if avatar and onClose are provided`, () => {
    const { container } = render(<FlowNavigation {...props} />);

    expect(container.querySelector('.separator')).toBeInTheDocument();
  });

  it(`doesn't render separator if avatar or onClose are not provided `, () => {
    const { container, rerender } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.separator')).not.toBeInTheDocument();

    rerender(<FlowNavigation {...props} avatar={null} />);

    expect(container.querySelector('.separator')).not.toBeInTheDocument();
  });

  describe('on mobile', () => {
    beforeEach(() => {
      resetClientWidth(Breakpoint.MEDIUM - 1);
    });

    it('renders as expected', () => {
      expect(render(<FlowNavigation {...props} />).container).toMatchSnapshot();
    });

    it(`renders logo mobile if onGoBack is not provided and activeStep = 0`, () => {
      const { rerender } = render(<FlowNavigation {...props} />);
      const logoRootContainer = logoFlag().parentElement.parentElement;
      const logoContainer = logoFlag().parentElement;

      expect(logoContainer).toHaveClass('np-flow-navigation--logo__display');
      expect(logoRootContainer).toHaveClass('visible-xs');

      rerender(<FlowNavigation {...props} activeStep={1} />);

      expect(logoRootContainer).toHaveClass('visible-xs');

      rerender(<FlowNavigation {...props} onGoBack={jest.fn()} activeStep={1} />);

      expect(logoContainer).toHaveClass('np-flow-navigation--logo__hidden');
    });

    it('renders BackButton with AnimatedLabel if onGoBack is provided and activeStep > 0', () => {
      const { rerender } = render(<FlowNavigation {...props} onGoBack={jest.fn()} />);

      expect(screen.queryByText('BackButton')).toBeNull();

      rerender(<FlowNavigation {...props} activeStep={1} />);
      expect(screen.queryByText('BackButton')).toBeNull();

      rerender(<FlowNavigation {...props} onGoBack={jest.fn()} activeStep={1} />);

      expect(screen.getByText('BackButton').parentElement).toHaveClass('visible-xs');
      expect(screen.getByText('AnimatedLabel')).toBeInTheDocument();
    });
  });
  const logoFlag = () => screen.getByAltText(`logo_mobile`);
  const logoFull = () => screen.getByAltText(`logo_desktop`);
});
