<DefinitionList
  layout={DefinitionList.Layout.VERTICAL_TWO_COLUMN}
  muted={false}
  definitions={[
    {
      title: <span>First title</span>,
      value: <span>first value</span>,
      key: 'first',
    },
    {
      title: 'Second title',
      value: 'second value happenstobereallylongtodemonstratethewordbreak',
      key: 'second',
    },
    {
      title: <>Third title</>,
      value: <>third value</>,
      key: 'third',
    },
  ]}
/>;
