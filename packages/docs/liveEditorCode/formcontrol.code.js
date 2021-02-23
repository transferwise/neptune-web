<FormControl
  autoComplete={false}
  id="form-control-id"
  name="form-control-name"
  placeholder="Search placeholder"
  displayPattern={null}
  label="label"
  type={FormControl.Type.TEXT}
  step={1}
  options={[
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three', secondary: 'secondary text' },
  ]}
  disabled={false}
  readOnly={false}
  required={false}
  onChange={value => console.log(value)}
  onBlur={value => console.log(value)}
  onFocus={value => console.log(value)}
  minLength={null}
  maxLength={null}
  min={null}
  max={null}
  minDate={null}
  maxDate={null}
  mode={FormControl.DateMode.DAY_MONTH_YEAR}
  monthFormat={FormControl.MonthFormat.LONG}
  value="a value"
  searchPlaceholder="placeholder"
  size={FormControl.Size.MEDIUM}
  uploadProps={{ usDisabled: false, size: 'md' }}
/>;
