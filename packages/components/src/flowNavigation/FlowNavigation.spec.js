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
    resetClientWidth(Breakpoint.LARGE + 1);
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
    logo: <img alt="logo" src="logo.svg" width="138" height="24" />,
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

  it(`doesn't render separator if done is true `, () => {
    const { container, rerender } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.separator')).not.toBeInTheDocument();

    rerender(<FlowNavigation {...props} avatar={null} done />);

    expect(container.querySelector('.separator')).not.toBeInTheDocument();
  });

  it(`renders border based on done `, () => {
    const { container, rerender } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.np-flow-navigation--border-bottom')).toBeInTheDocument();

    rerender(<FlowNavigation {...props} avatar={null} done />);

    expect(container.querySelector('.np-flow-navigation--border-bottom')).not.toBeInTheDocument();
  });

  it(`hides stepper when done is true`, () => {
    const { container, rerender } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.np-flow-navigation__stepper')).toBeInTheDocument();

    rerender(<FlowNavigation {...props} avatar={null} done />);

    expect(container.querySelector('.np-flow-navigation__stepper')).not.toBeInTheDocument();
  });

  it(`renders xs-max class`, () => {
    resetClientWidth(Breakpoint.SMALL - 1);
    const { container } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.np-flow-navigation--xs-max')).toBeInTheDocument();
  });

  it(`renders sm class`, () => {
    resetClientWidth(Breakpoint.SMALL);
    const { container } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.np-flow-navigation--sm')).toBeInTheDocument();
  });

  it(`renders lg class`, () => {
    resetClientWidth(Breakpoint.LARGE);
    const { container } = render(<FlowNavigation {...props} onClose={null} />);

    expect(container.querySelector('.np-flow-navigation--lg')).toBeInTheDocument();
  });

  describe('on mobile', () => {
    beforeEach(() => {
      resetClientWidth(Breakpoint.LARGE - 1);
    });

    it('renders as expected', () => {
      expect(render(<FlowNavigation {...props} />).container).toMatchSnapshot();
    });

    it(`renders flag if activeStep <= 0 onGoBack or is not provided`, () => {
      const { container, rerender } = render(
        <FlowNavigation {...props} activeStep={0} onGoBack={undefined} />,
      );

      const flag = container.querySelector('.np-flow-navigation--flag');

      expect(flag.parentElement).toHaveClass('visible-xs');
      expect(flag).toHaveClass('np-flow-navigation--flag__display');

      rerender(<FlowNavigation {...props} activeStep={1} onGoBack={undefined} />);

      expect(flag).toHaveClass('np-flow-navigation--flag__display');

      rerender(<FlowNavigation {...props} activeStep={0} onGoBack={jest.fn()} />);

      expect(flag).toHaveClass('np-flow-navigation--flag__display');

      rerender(<FlowNavigation {...props} onGoBack={jest.fn()} activeStep={1} />);

      expect(flag).toHaveClass('np-flow-navigation--flag__hidden');
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
  const logoFull = () => screen.getByAltText(`logo`);
});
