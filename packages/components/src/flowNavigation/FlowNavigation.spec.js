import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '../test-utils';

import FlowNavigation from '.';
import { Breakpoint } from '../common';
import Logo from '../common/logo';
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
jest.mock('../common/logo', () => {
  // eslint-disable-next-line react/prop-types
  const mockedLogo = ({ className, type }) => <div className={className}>Logo {type}</div>;
  mockedLogo.Type = { FULL: 'FULL', FLAG: 'FLAG' };
  return mockedLogo;
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
    logo: <Logo type={Logo.Type.FULL} />,
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

    it(`renders Logo ${Logo.Type.FLAG} if onGoBack is not provided and activeStep = 0`, () => {
      const { rerender } = render(<FlowNavigation {...props} />);

      expect(logoFlag().parentElement).toHaveClass('visible-xs');
      expect(logoFlag()).toHaveClass('np-flow-navigation--logo__display');

      rerender(<FlowNavigation {...props} activeStep={1} />);

      expect(logoFlag().parentElement).toHaveClass('visible-xs');

      rerender(<FlowNavigation {...props} onGoBack={jest.fn()} activeStep={1} />);

      expect(logoFlag()).toHaveClass('np-flow-navigation--logo__hidden');
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
  const logoFlag = () => screen.getByText(`Logo ${Logo.Type.FLAG}`);
  const logoFull = () => screen.getByText(`Logo ${Logo.Type.FULL}`);
});
