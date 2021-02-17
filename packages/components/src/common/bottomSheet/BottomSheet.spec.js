import React from 'react';
import { render } from '../../test-utils';

import BottomSheet from './BottomSheet';

jest.mock('../../dimmer', () => {
  // eslint-disable-next-line react/prop-types
  return ({ open, children }) => {
    return open ? <div className="dimmer">{children}</div> : null;
  };
});

jest.mock('../../slidingPanel', () => {
  // eslint-disable-next-line react/prop-types
  return ({ open, children }) => (open ? <div className="sliding-panel">{children}</div> : null);
});

describe('BottomSheet', () => {
  it('renders content when open', async () => {
    const { container } = render(<BottomSheet open>content</BottomSheet>);
    expect(container).toMatchSnapshot();
  });

  it("doesn't renders content when closed", async () => {
    const { container } = render(<BottomSheet>content</BottomSheet>);

    expect(container).toMatchSnapshot();
  });
});
