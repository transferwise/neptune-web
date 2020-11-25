import React from 'react';
import { render } from '@testing-library/react';
import Summary from './Summary';

describe('Summary', () => {
  it('renders minimal component', () => {
    const { asFragment } = render(<Summary icon={<strong>icon</strong>} title="Hello world" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders full component', () => {
    const { asFragment } = render(
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
        }}
        icon={<strong>icon</strong>}
        status={Summary.Status.DONE}
        title="title"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
