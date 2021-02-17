import React from 'react';
import { render, waitFor } from '../test-utils';
import Summary from './Summary';

describe('Summary', () => {
  it('renders minimal component', () => {
    const { asFragment } = render(<Summary icon={<strong>icon</strong>} title="Hello world" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders full component', async () => {
    let container;
    await waitFor(() => {
      ({ container } = render(
        <Summary
          action={{
            text: 'text',
            href: 'href',
            'aria-label': 'aria-label',
          }}
          description="description"
          info={{
            title: 'title',
            content: 'description',
            'aria-label': 'aria-label',
          }}
          icon={<strong>icon</strong>}
          status={Summary.Status.DONE}
          title="title"
        />,
      ));

      expect(container).toMatchSnapshot();
    });
  });
});
