() => {
  const [checked, setCheck] = React.useState(false);

  return <Switch checked={checked} onClick={() => setCheck(!checked)} />;
};
