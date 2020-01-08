import React from 'react';
import MoneyInput from './MoneyInput';
import { select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: MoneyInput,
  title: 'MoneyInput',
};

export const basic = () => {
  const size = select('size', ['sm', 'md', 'lg'], 'md');
  const locale = select('locale', ['en-GB', 'jp-JP'], 'en-GB');
  const amount = number('amount', 1000);

  return (
    <MoneyInput
      id="money-input"
      amount={amount}
      locale={locale}
      size={size}
      onAmountChange={action('amount changed')}
      onCurrencyChange={action('currency changed')}
      addon={null}
      searchPlaceholder="Type a currency or country"
      onCustomAction={action('Custom action')}
      customActionLabel="Custom action label"
      currencies={[
        {
          header: 'Popular currencies',
        },
        {
          value: 'EUR',
          label: 'EUR',
          note: 'Euro',
          currency: 'eur',
          searchable: 'Spain, Germany, France, Austria',
        },
        {
          value: 'GBP',
          label: 'GBP',
          note: 'Great British Pound',
          currency: 'gbp',
          searchable: 'England, Scotland, Wales',
        },
      ]}
      selectedCurrency={{
        value: 'EUR',
        label: 'EUR',
        note: 'Euro',
        currency: 'eur',
        searchable: 'Spain, Germany, France, Austria',
      }}
    />
  );
};
