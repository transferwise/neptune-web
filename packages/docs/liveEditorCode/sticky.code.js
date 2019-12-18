() => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open Sticky</Button>
      <Sticky open={open} position={'bottom'} fullParentWidth={true}>
        <div className={'d-flex justify-content-start align-items-start flex-wrap p-x-4 p-y-4'}>
          <Button onClick={() => setOpen(!open)}>Close Sticky</Button>
        </div>
      </Sticky>
    </>
  );
};
