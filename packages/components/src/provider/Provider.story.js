import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Provider, Money } from '..';
import closeButtonMessages from '../common/closeButton/CloseButton.messages';

export default {
  component: Provider,
  title: 'Provider',
};

export const basic = () => {
  return (
    <>
      Translated message: <FormattedMessage {...closeButtonMessages.ariaLabel} />
      <br />
      <br />
      Formatting example: <Money amount={1234.5678} currency="GBP" />
    </>
  );
};
