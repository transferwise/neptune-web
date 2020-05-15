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
        icon={<strong>icon</strong>}
        title="Hello world"
        content={<p>This is some content</p>}
        help={{
          title: 'Need help?',
          content: 'This is some help content',
        }}
        className="outrageous"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
