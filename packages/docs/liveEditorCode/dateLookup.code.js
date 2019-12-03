const code = `()=> {
const [date, setDate] = React.useState(new Date());
return (
  <DateLookup
    value={date}
    min={null }
    max={null }
    size={'md'}
    locale={'en-GB'}
    placeholder={'I m a placeholder'}
    label={'label'}
    monthFormat={'long'}
    disabled={false}
    onChange={(v)=> setDate(v)}
  />
)}`;

export default code;
