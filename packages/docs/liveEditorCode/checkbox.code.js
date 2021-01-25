() => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      label="I agree to the terms and conditions"
      onChange={(newState) => setChecked(newState)}
      checked={checked}
      required
      disabled={false}
    />
  );
};
