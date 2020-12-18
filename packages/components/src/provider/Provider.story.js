import React from 'react';
import { FormattedMessage } from 'react-intl';

import Provider from './Provider';
import closeButtonMessages from '../common/CloseButton/CloseButton.messages';

export default {
  component: Provider,
  title: 'Provider',
};

export const basic = () => {
  return (
    <>
      Translated message: <FormattedMessage {...closeButtonMessages.ariaLabel} />
    </>
  );
};
