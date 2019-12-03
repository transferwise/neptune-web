const code = `() => {
const [check, setCheck] = React.useState(false);
return <RadioOption
  media={ <FastFlagIcon /> }
  title="Radio option"
  content='text'
  id="id"
  name="radio-option"
  checked={check}
  onChange={() => setCheck(!check)}
  complex={false}
  disabled={false}
  value="value"
/>
}`;

export default code;
