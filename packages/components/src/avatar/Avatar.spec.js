import React from 'react';
import { render } from '@testing-library/react';

import Avatar from '.';

describe('Avatar', () => {
  it('renders a medium sized thumbnail Avatar with NO outline', () => {
    const { getByText } = render(
      <Avatar size={Avatar.Size.MEDIUM}>
        <span role="img" aria-label="Person with sunglasses emoji">
          😎
        </span>
      </Avatar>,
    );

    expect(getByText('😎').parentElement.parentElement).toHaveClass(
      'tw-avatar tw-avatar--thumbnail tw-avatar--md',
    );
  });

  it('renders a small sized emoji Avatar with outline', () => {
    const { getByText } = render(
      <Avatar type={Avatar.Type.EMOJI} size={Avatar.Size.SMALL} outlined>
        <span role="img" aria-label="Money bag emoji">
          💰
        </span>
      </Avatar>,
    );

    expect(getByText('💰').parentElement.parentElement).toHaveClass(
      'tw-avatar tw-avatar--emoji tw-avatar--sm tw-avatar--outlined',
    );
  });
});
