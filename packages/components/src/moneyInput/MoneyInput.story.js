import React from 'react';
import { select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import MoneyInput from './MoneyInput';

export default {
  component: MoneyInput,
  title: 'MoneyInput',
};

export const basic = () => {
  const size = select('size', Object.values(MoneyInput.Size), MoneyInput.Size.MEDIUM);
  const locale = select('locale', ['en-GB', 'jp-JP'], 'en-GB');
  const amount = number('amount', 1000);
  const placeholder = number('placeholder', null);

  return (
    <>
      <label htmlFor="money-input">Money input label</label>
      <MoneyInput
        id="money-input"
        amount={amount}
        locale={locale}
        size={size}
        onAmountChange={action('amount changed')}
        onCurrencyChange={action('currency changed')}
        addon={null}
        placeholder={placeholder}
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
            note: 'British pound',
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
    </>
  );
};
