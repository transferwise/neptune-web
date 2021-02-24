() => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        body={
          <>
            <DateInput onChange={console && console.log} value={new Date()} />
            <p className="m-t-4">
              I'm baby actually poke kickstarter, street art jean shorts bespoke chambray activated
              charcoal ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo, cliche lyft
              marfa ethical waistcoat poke jean shorts. Scenester readymade selvage disrupt pok pok.
              La croix stumptown try-hard chartreuse. I'm baby actually poke kickstarter, street art
              jean shorts bespoke chambray activated charcoal ramps marfa shoreditch tumeric
            </p>
          </>
        }
        open={open}
        scroll={Modal.Scroll.CONTENT}
        position={Modal.Position.TOP}
        onClose={() => setOpen(false)}
        size={Modal.Size.MEDIUM}
        title="I'm a hipster!"
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
