import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import OverlayHeader from '.';
import Logo from '../common/logo';
import Avatar from '../avatar';

describe('OverlayHeader', () => {
  const props = {
    avatar: (
      <Avatar type={Avatar.Type.INITIALS} size={Avatar.Size.MEDIUM}>
        TM
      </Avatar>
    ),
    logo: <Logo />,
    onClose: jest.fn(),
  };
  it('renders as expected', () => {
    expect(render(<OverlayHeader {...props} />).container).toMatchSnapshot();
  });

  it('renders separator only if avatar and onClose are provided', () => {
    const { container } = render(<OverlayHeader {...props} />);
    expect(container.querySelector('.separator')).toBeInTheDocument();
  });

  it("doesn't render separator if avatar or onClose are not provided", () => {
    const { container, rerender } = render(<OverlayHeader {...props} onClose={null} />);
    expect(container.querySelector('.separator')).not.toBeInTheDocument();
    rerender(<OverlayHeader {...props} avatar={null} />);
    expect(container.querySelector('.separator')).not.toBeInTheDocument();
  });
});
