import React from 'react';
import { render } from '@testing-library/react';

import DynamicAlert from '.';

describe('Given a component for dynamically rendering alert', () => {
  let spec;

  beforeEach(() => {
    spec = {
      component: 'alert',
      markdown: '**This is a bold title** and some normal text',
    };
  });

  it('should render the markdown in an alert component', () => {
    const { container, getByText } = render(<DynamicAlert component={spec} />);

    const bolded = container.querySelector('strong');
    expect(bolded).toBeInTheDocument();
    expect(bolded.innerHTML).toBe('This is a bold title');

    expect(getByText('and some normal text')).toBeTruthy();
  });
});
