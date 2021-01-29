import React from 'react';
import '@testing-library/jest-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { render, waitFor, cleanup, screen } from '@testing-library/react';

import Provider from '.';
import closeButtonMessages from '../common/closeButton/CloseButton.messages';

describe('Provider', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.error = jest.fn();
    jest.spyOn(console, 'error').mockImplementation(() => {});
    // eslint-disable-next-line no-console
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });
  afterAll(() => {
    jest.restoreAllMocks();
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
    ['en-GB', 'en-GB'],
    ['en-US', 'en-US'],
    ['en_US', 'en-US'],
    ['en_GB', 'en-GB'],
    ['ja', 'ja'],
    ['ja-JP', 'ja-JP'],
    ['', 'en-GB'],
    [' ', 'en-GB'],
    [null, 'en-GB'],
    [undefined, 'en-GB'],
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
