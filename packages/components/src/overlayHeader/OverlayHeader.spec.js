import React from 'react';
import { render } from '../test-utils';

import OverlayHeader from '.';

import Avatar from '../avatar';

describe('OverlayHeader', () => {
  const props = {
    avatar: (
      <Avatar type={Avatar.Type.INITIALS} size={Avatar.Size.MEDIUM}>
        TM
      </Avatar>
    ),
    logo: <img alt="logo_desktop" src="img_desktop" width="138" height="24" />,
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
