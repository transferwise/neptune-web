import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Loader from '.';

describe('Loader', () => {
  afterEach(cleanup);

  it('tests default state', () => {
    const { container } = render(<Loader />);
    expect(container.querySelectorAll('div.tw-loader--xl')).toHaveLength(1);
    expect(container.querySelector('div[data-testid]')).toBe(null);
  });

  it('has data-testid prop', () => {
    const dataTestId = 'test-loader';
    const { getByTestId } = render(<Loader data-testid={dataTestId} />);
    expect(getByTestId(dataTestId)).not.toBe(null);
  });

  it('shows a small loader if that property is set', () => {
    const { container } = render(<Loader {...{ small: true }} />);
    expect(container.querySelectorAll('div.tw-loader--xs')).toHaveLength(1);
  });
});
