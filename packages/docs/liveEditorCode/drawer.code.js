() => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button
        onClick={() => setDimmerState(true)}
        disabled={false}
        block={false}
        onClick={() => setOpen(true)}
      >
        Open drawer
      </Button>
      <Drawer
        open={open}
        position="right"
        onClose={() => setOpen(false)}
        footerContent={
          <Button onClick={() => setOpen(false)} block>
            Action
          </Button>
        }
        headerTitle="A title"
      >
        <input type="text" className="form-control" />
        <p className="m-t-3">Cat ipsum dolor sit amet, purr when being pet.</p>
      </Drawer>
    </>
  );
};
