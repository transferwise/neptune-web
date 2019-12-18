<Popover
  title="I am the Popover title"
  content="Lorem ipsum dolor sit amet"
  preferredPlacement={Popover.Placement.BOTTOM}
>
  <Button
    onClick={() => console.log('clicked')}
    disabled={false}
    block={false}
    size={Button.Size.Medium}
  >
    Click here to Open Popover!
  </Button>
</Popover>;
