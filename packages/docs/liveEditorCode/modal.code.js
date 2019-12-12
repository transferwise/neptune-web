() => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        body="Lorem Ipsum is simply dummy text of the printing 1500s, when an"
        footer={<Button label="Action" block />}
        open={open}
        onClose={() => setOpen(false)}
        size="md"
        title="title"
        className=""
        footer={
          <Button block onClick={() => alert('clicked')}>
            Action
          </Button>
        }
        closeOnClick
      />
    </>
  );
};
