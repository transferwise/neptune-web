<>
  <label htmlFor="money-input">Money input label</label>
  <MoneyInput
    id="money-input"
    amount={1000}
    locale="en-GB"
    size="lg"
    onAmountChange={() => console.log('amount changed')}
    onCurrencyChange={() => alert('currency changed')}
    addon={null}
    searchPlaceholder="Type a currency or country"
    onCustomAction={() => alert('Custom action')}
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
</>;
