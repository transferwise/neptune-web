const code = `
<DynamicFieldDefinitionList
  title="This is an awesome component"
  layout="VERTICAL_TWO_COLUMN"
  locale="en-GB"
  model={
    {
      text: 'helloworld',
      number: 123456,
      select: '1',
      date: '2000-12-20T00:00:00.000Z',
      checkbox: true,
      radio: '2',
      password: 'qwerty',
      telephone: '+441234567890',
      textarea:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    }
  }
  fields={
    {text: {
        title: 'Text',
        type: 'text',
        displayFormat: '***** - *****||*-*-*',
        width: 'md',
        refreshRequirementsOnChange: true,
        tagClassName: {
          h3: true,
        },
      },
      number: {
        title: 'Number',
        type: 'number',
        width: 'md',
        refreshRequirementsOnChange: true,
      },
      select: {
        title: 'Select',
        type: 'string',
        control: 'select',
        width: 'md',
        refreshRequirementsOnChange: true,
        values: [
          {
            key: '1',
            name: 'One',
          },
          {
            key: '2',
            name: 'Two',
          },
        ],
      },
      password: {
        title: 'Password',
        type: 'string',
        control: 'password',
        width: 'md',
        refreshRequirementsOnChange: true,
      },
      date: {
        title: 'Date',
        type: 'string',
        format: 'date',
        refreshRequirementsOnChange: true,
      },
      telephone: {
        title: 'Telephone',
        type: 'string',
        control: 'tel',
        placeholder: 'Enter...',
      },
      radio: {
        title: 'Radio',
        type: 'string',
        control: 'radio',
        width: 'md',
        refreshRequirementsOnChange: true,
        values: [
          {
            key: '1',
            name: 'One',
          },
          {
            key: '2',
            name: 'Two',
          },
        ],
      },
      checkbox: {
        title: 'Checkbox',
        type: 'boolean',
        placeholder: 'Label',
        width: 'md',
        refreshRequirementsOnChange: true,
      },
      textarea: {
        title: 'Textarea',
        type: 'string',
        control: 'textarea',
        refreshRequirementsOnChange: true,
      },
      file: {
        title: 'File',
        type: 'string',
        format: 'base64url',
        refreshRequirementsOnChange: true,
      },
      hidden: {
        type: 'string',
        hidden: true,
        default: 'hidden-value',
      },
    }}
/>`;

export default code;
