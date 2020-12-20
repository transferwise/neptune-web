import React from 'react';
import '@testing-library/jest-dom';
import { FormattedMessage } from 'react-intl';
import { render, waitFor, cleanup, screen } from '@testing-library/react';

import Provider from '.';
import closeButtonMessages from '../common/closeButton/CloseButton.messages';

describe('Provider', () => {
  beforeEach(cleanup);

  it('does not add any elements in the DOM', async () => {
    const locale = 'en';
    const messages = await import(`../../i18n/${locale}.json`);
    const { container } = render(<Provider i18n={{ locale, messages }} />);

    expect(container).toBeEmptyDOMElement();
  });

  test.each([
    ['ru', 'Закрыть'],
    ['en', 'Close'],
  ])('switching locale (%s)', async (locale, expectedMessage) => {
    expect(document.body).toBeEmptyDOMElement();

    const messages = await import(`../../i18n/${locale}.json`);

    render(
      <Provider i18n={{ locale, messages }}>
        <FormattedMessage {...closeButtonMessages.ariaLabel} />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText(expectedMessage)).toBeInTheDocument();
    });
  });
});
