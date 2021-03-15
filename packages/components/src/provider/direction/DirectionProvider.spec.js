import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDirection } from '../../common/hooks';

import { DirectionProvider } from '.';

describe('DirectionProvider', () => {
  test.each([
    ['zh-HK', 'ltr'],
    ['ru', 'ltr'],
    ['he-IL', 'rtl'],
  ])('returns correct direction for %s', (locale, expectedValue) => {
    const TestComponent = () => JSON.stringify(useDirection());
    render(
      <DirectionProvider locale={locale}>
        <TestComponent />
      </DirectionProvider>,
    );

    expect(
      screen.queryByText(`{"direction":"${expectedValue}","isRTL":${expectedValue === 'rtl'}}`),
    ).toBeInTheDocument();
  });
});
