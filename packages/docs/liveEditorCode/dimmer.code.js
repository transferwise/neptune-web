() => {
  const [dimmerStatus, setDimmerStatus] = React.useState(false);
  return (
    <>
      <Button
        onClick={() => setDimmerStatus(true)}
        disabled={false}
        block={false}
        size={Button.Size.Medium}
      >
        Click here to Open dimmer!
      </Button>
      <Dimmer
        open={dimmerStatus}
        onClose={() => setDimmerStatus(false)}
        fadeContentOnExit
        fadeContentOnEnter
      />
    </>
  );
};
