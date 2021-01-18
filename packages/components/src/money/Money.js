import React from 'react';
import { useIntl } from 'react-intl';
import Types from 'prop-types';
import { formatMoney } from '@transferwise/formatting';

const Money = ({ amount, currency }) => {
  const { locale } = useIntl();
  return <>{formatMoney(amount, currency, locale)}</>;
};

Money.propTypes = {
  amount: Types.number.isRequired,
  currency: Types.string.isRequired,
};

export default Money;
