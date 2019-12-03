const code = `
<FormControl
  autoComplete={false}
  id='form-control-id'
  locale='en'
  name='form-control-name'
  placeholder= 'Search placeholder'
  displayPattern= {null}
  label={'label'}
  type={'text'}
  step={1}
  options={[
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three', secondary: 'This is a secondary text' },
    ]}
  disabled={false}
  readOnly={false}
  required={false}
  onChange={(value)=>console.log(value)}
  onBlur={(value)=>console.log(value)}
  onFocus={(value)=>console.log(value)}
  minLength={null}
  maxLength={null}
  min={null}
  max={null}
  minDate={null}
  maxDate={null}
  mode='day-month-year'
  monthFormat='long'
  value='a value'
  searchPlaceholder='placeholder'
  size='md'
  uploadProps={{ usDisabled: false, size: 'md' }}
/>`;

export default code;
