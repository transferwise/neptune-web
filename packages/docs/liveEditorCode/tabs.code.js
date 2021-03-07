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
            <Alert>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </Alert>
          ),
        },
        {
          title: 'Title 2',
          disabled: false,
          content: (
            <Alert type="warning">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta officia animi
              incidunt
            </Alert>
          ),
        },
        {
          title: 'Title 3',
          disabled: true,
          content: (
            <Alert type="error">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat doloribus
              nulla non
            </Alert>
          ),
        },
      ]}
      selected={open}
      onTabSelect={index => setOpen(index)}
    />
  );
};
