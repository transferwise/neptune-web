import React from 'react';
import { render } from '@testing-library/react';

import Avatar from '.';

describe('FlowNavigationAvatar', () => {
  it('renders as BUSINESS profile type', async () => {
    const { container } = render(<Avatar url="" profileType="BUSINESS" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as PERSONAL profile type', async () => {
    const { container } = render(<Avatar url="https://transferwise.com" profileType="PERSONAL" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as PERSONAL profile type with an icon', async () => {
    const { container } = render(<Avatar profileType="PERSONAL" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
