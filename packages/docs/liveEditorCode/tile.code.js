() => (
  <Tile
    description="Click here to be redirected to transferflow."
    media={
      <img
        src="https://wise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
        alt="illustration"
        style={{ width: '100%' }}
      />
    }
    onClick={() => alert('onClick')}
    size={Tile.Size.MEDIUM}
    title="Send money"
    disabled={false}
  />
);
