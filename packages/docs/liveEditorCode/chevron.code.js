() => {
  const [isTop, setIsTop] = React.useState(true);
  return (
    <>
      <Chevron
        orientation={isTop ? Chevron.Orientation.TOP : Chevron.Orientation.BOTTOM}
        size={Chevron.Size.MEDIUM}
        flip
        animate
      />
      <Checkbox
        label="Check me to flip the chevron!"
        onChange={() => setIsTop(!isTop)}
        checked={isTop}
      />
    </>
  );
};
