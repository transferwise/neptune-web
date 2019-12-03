const code = `() => {
const [open, setOpen] = React.useState(false);
return (
  <>
    <Button onClick={() => setOpen(true)} >
      Open dimmer
    </Button>
    <Dimmer
      open={open}
      onClose={() => setOpen(false)}
      fadeContentOnExit={true}
      fadeContentOnEnter={true}
    />
  </>
)}`;

export default code;
