() => {
  const [checked, setChecked] = React.useState(true);
  return (
    <CheckboxButton
      aria-label="Toggle email updates"
      onChange={() => setChecked(!checked)}
      checked={checked}
      disabled={false}
    />
  );
};
