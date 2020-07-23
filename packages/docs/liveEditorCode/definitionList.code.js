<DefinitionList
  layout={DefinitionList.Layout.VERTICAL_TWO_COLUMN}
  muted={false}
  definitions={[
    {
      title: 'A simple title',
      value: 'A simple value',
      key: 'first',
    },
    {
      title: <span>Use wrapper elements to style</span>,
      value: <span className="h3">89.45GBP</span>,
      key: 'second',
    },
    {
      title: 'Long strings will wrap',
      value: 'And values with long words will eventuallybreakontothenextline',
      key: 'third',
    },
  ]}
/>;
