import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Badge from '.';

describe('Badge', () => {
  const defaultProps = {
    badge: <div />,
  };
  const childText = 'badge-child';
  const child = <div>{childText}</div>;

  const renderBadge = (props = {}, children = child) => {
    return render(
      <Badge {...defaultProps} {...props}>
        {children}
      </Badge>,
    );
  };

  afterEach(cleanup);

  it('renders the badge content', () => {
    const badgeText = 'badge-text';
    const badge = <div>{badgeText}</div>;

    const { getByText } = renderBadge({ badge });

    expect(getByText(badgeText).parentElement).toHaveClass('tw-badge__content');
  });

  it('renders badge children', () => {
    const { getByText } = renderBadge();

    expect(getByText(childText).parentElement).toHaveClass('tw-badge__children');
  });
});
