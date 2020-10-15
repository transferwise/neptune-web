() => {
  const [checked, setCheck] = React.useState(false);

  return (
    <>
      <label id="labelID" htmlFor="switchId">
        A switch with a label
      </label>
      <Switch
        checked={checked}
        className="a-class-name"
        onClick={() => setCheck(!checked)}
        aria-labelledby="labelID"
        id="switchId"
      />
    </>
  );
};
