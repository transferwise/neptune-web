() => {
  const [checked, setChecked] = React.useState(false);
  return (
    <CheckboxOption
      id="checkbox-option"
      checked={checked}
      name="checkbox-option"
      title="Checkbox option"
      content="Normally, the button and icon are vertically centered."
      onChange={() => setChecked(!checked)}
      media={<FastFlagIcon size={24} />}
    />
  );
};
