() => {
  const [open, setOpen] = React.useState(false);
  return (
    <Tabs
      className="tabs-custom-class"
      name="tabs-docs"
      tabs={[
        {
          title: 'Title 1',
          disabled: false,
          content: (
            <Alert message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique" />
          ),
        },
        {
          title: 'Title 2',
          disabled: false,
          content: (
            <Alert
              type="warning"
              message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique"
            />
          ),
        },
        {
          title: 'Title 3',
          disabled: true,
          content: (
            <Alert
              type="negative"
              message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique"
            />
          ),
        },
      ]}
      selected={open}
      onTabSelect={(index) => setOpen(index)}
    />
  );
};
