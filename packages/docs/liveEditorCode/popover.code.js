<Popover
  content="You’ll get this rate as long as we receive your 10 EUR within the next 51 hours."
  preferredPlacement={Popover.Placement.BOTTOM}
  title="Guaranteed rate"
>
  <Button type={Button.Type.PRIMARY} onClick={() => console.log(`I'm also triggered`)}>
    Click here to Open Popover!
  </Button>
</Popover>;
