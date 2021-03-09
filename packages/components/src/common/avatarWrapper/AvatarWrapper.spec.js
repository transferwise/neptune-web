import React from 'react';
import { render } from '../../test-utils';

import Avatar from '.';

describe('FlowNavigationAvatar', () => {
  it('renders as BUSINESS profile type', async () => {
    const { container } = render(<Avatar url="https://wise.com" profileType="BUSINESS" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as BUSINESS profile type with an icon', async () => {
    const { container } = render(<Avatar url="" profileType="BUSINESS" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as PERSONAL profile type', async () => {
    const { container } = render(<Avatar url="https://wise.com" profileType="PERSONAL" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders as PERSONAL profile type with an icon', async () => {
    const { container } = render(<Avatar profileType="PERSONAL" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
