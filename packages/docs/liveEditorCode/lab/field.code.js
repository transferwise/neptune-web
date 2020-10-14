() => {
  return (
    <Field
      error={null}
      help="Please fill this form with a value length between 3 and 10"
      id="id"
      initValue="Neptune is cool"
      onChange={(val) => console.log(val)}
      submitted={false}
      label="Input type text"
      type="string"
      validation={{
        maxLength: { value: 10, message: 'The value should be shorter than 10 characters' },
        minLength: { value: 3, message: 'The value should be longer than 3 characters' },
        pattern: { value: '^[a-z]+$', message: 'Only lowercase allowed' },
        required: { value: true, message: 'This field is required' },
      }}
    >
      <input type="text" className="form-control" />
    </Field>
  );
};
