import React from 'react';
import { addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';

import { render, cleanup, waitFor } from '../test-utils';
import { Dimmer } from './Dimmer';

jest.mock('../common');

describe('Dimmer', () => {
  const props = {
    open: true,
  };

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('calls addNoScrollBodyClass on render', () => {
    expect(addNoScrollBodyClass).not.toHaveBeenCalled();

    render(<Dimmer {...props} />);

    expect(addNoScrollBodyClass).toHaveBeenCalled();
  });

  it('calls removeNoScrollBodyClass on unmount', async () => {
    expect(removeNoScrollBodyClass).not.toHaveBeenCalled();

    const { unmount } = render(<Dimmer {...props} />);

    unmount();

    await waitFor(() => {
      expect(removeNoScrollBodyClass).toHaveBeenCalledTimes(1);
    });
  });

  it('calls removeNoScrollBodyClass only once when the children is unmounted', async () => {
    const { rerender, unmount } = render(<Dimmer {...props} />);

    expect(removeNoScrollBodyClass).toHaveBeenCalledTimes(0);
    rerender(<Dimmer {...props} open={false} />);

    await waitFor(() => {
      expect(removeNoScrollBodyClass).toHaveBeenCalledTimes(1);
    });

    unmount();

    await waitFor(() => {
      expect(removeNoScrollBodyClass).toHaveBeenCalledTimes(1);
    });
  });
});
