() => {
  const [value, setValue] = React.useState('a value');
  return (
    <Field
      value={value}
      errorMessage=""
      warningMessage=""
      label="label"
      name="text"
      field={{
        control: 'text',
        type: 'string',
        displayPattern: '',
        help: {
          message: '',
          image: '',
          list: [],
          do: ['good', 'much better'],
          dont: ['not so good', 'erm no!'],
        },
        options: [
          { label: 'Mars', value: 'mars' },
          { label: 'Earth', value: 'earth' },
        ],
        label: 'a label',
        required: false,
        disabled: false,
        hidden: false,
        readOnly: false,
        autoComplete: false,
        placeholder: 'a placeholder',
        searchPlaceholder: 'search',
        minLength: null,
        maxLength: null,
        minimum: 10,
        maximum: 99,
        validationMessages: {
          required: 'Number is required',
          minimum: 'Must be 10 or greater',
          maximum: 'Must be 99 or less',
        },
      }}
      onChange={(value) => setValue(value)}
    />
  );
};
