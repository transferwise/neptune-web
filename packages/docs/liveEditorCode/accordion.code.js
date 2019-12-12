<Accordion
  indexOpen={1}
  items={[
    {
      title: 'Item 1',
      content: 'I can be text',
    },
    {
      title: <h5>Item 2</h5>,
      content: <i>Or italic</i>,
    },
    {
      title: 'Item 3',
      content: 'text',
    },
    {
      title: 'Item 4',
      content: (
        <ul>
          <li>This</li>
          <li>is</li>
          <li>a</li>
          <li>list</li>
        </ul>
      ),
    },
  ]}
/>;
