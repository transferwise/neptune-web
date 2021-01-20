import React from 'react';
import '@testing-library/jest-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { render, waitFor, cleanup, screen } from '@testing-library/react';

import Provider from '.';
import closeButtonMessages from '../common/CloseButton/CloseButton.messages';

describe('Provider', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.error = () => {};
    // eslint-disable-next-line no-console
    console.warn = () => {};
  });
  beforeEach(cleanup);

  it('does not add any elements in the DOM', async () => {
    const locale = 'en';
    const messages = await import(`../../i18n/${locale}.json`);
    const { container } = render(<Provider i18n={{ locale, messages }} />);

    expect(container).toBeEmptyDOMElement();
  });

  test.each([
    ['zh-HK', 'zh-HK'],
    ['ru', 'ru'],
    ['en', 'en'],
    ['en-US', 'en'],
    ['en_US', 'en'],
    ['en_GB', 'en'],
    ['lol', 'en'],
  ])('check locale value "%s"', (locale, expectedValue) => {
    const messages = {};
    const TestComponent = () => {
      const intl = useIntl();
      return <>locale: {intl.locale}</>;
    };
    const { container } = render(
      <Provider i18n={{ locale, messages }}>
        <TestComponent />
      </Provider>,
    );

    expect(container).toHaveTextContent(`locale: ${expectedValue}`);
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
