import React from 'react';
import { render } from '../../test-utils';
import Panel from './Panel';

describe('Panel', () => {
  const props = {
    arrow: true,
    children: <div>children</div>,
    open: false,
    position: Panel.Position.TOP,
    anchorRef: {},
  };

  it('renders', () => {
    const { container } = render(<Panel {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('renders arrow', () => {
    const { rerender } = render(<Panel {...props} arrow={false} />);

    expect(getArrow()).not.toBeInTheDocument();

    rerender(<Panel {...props} />);

    expect(getArrow()).toBeInTheDocument();
  });

  it('opens/closes Panel based on open', async () => {
    const { rerender } = render(<Panel {...props} open={false} />);

    expect(getPanel()).not.toBeInTheDocument();

    rerender(<Panel {...props} open />);

    expect(getPanel()).toBeInTheDocument();
  });

  const getPanel = () => document.querySelector('.np-panel--open');
  const getArrow = () => document.querySelector('.np-panel__arrow');
});
