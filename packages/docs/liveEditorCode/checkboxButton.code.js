() => {
  const [checked, setChecked] = React.useState(true);
  return (
    <CheckboxButton
      onChange={newState => setChecked(newState)}
      checked={checked}
      disabled={false}
    />
  );
};
