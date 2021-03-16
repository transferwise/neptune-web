({ icon }) => {
  return (
    <Accordion
      indexOpen={1}
      items={[
        {
          title: 'Item 1',
          content: 'I can be text',
        },
        {
          title: 'Item 2 with icon',
          content: <span>I can be a node</span>,
          icon,
        },
        {
          title: 'Item 3',
          content: 'I can be text',
        },
      ]}
    />
  );
};
