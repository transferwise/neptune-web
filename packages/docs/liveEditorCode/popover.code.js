() => {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover
      onClose={() => setOpen(false)}
      content="You’ll get this rate as long as we receive your 10 EUR within the next 51 hours"
      open={open}
      position={position}
      title="Guaranteed rate"
    >
      <Button type={Button.Type.PRIMARY} onClick={() => setOpen(!open)}>
        Click here to Open Popover!
      </Button>
    </Popover>
  );
};
