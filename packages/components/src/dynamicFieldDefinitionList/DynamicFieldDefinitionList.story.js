import React from 'react';
import { select, text, number, date } from '@storybook/addon-knobs';
import DynamicFieldDefinitionList from './DynamicFieldDefinitionList';

export default {
  component: DynamicFieldDefinitionList,
  title: 'DynamicFieldDefinitionList',
};

export const basic = () => {
  const textDF = text('textDF', 'helloworld');
  const numberDF = number('numberDF', 123456);
  const dateDF = date('dateDF', new Date());
  const passwordDF = text('passwordDF', 'password');
  const phoneDF = text('phoneDF', '+441234567890');
  const textareaDF = text('textareaDF', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit');
  const selectDF = select('selectDF', ['1', '2'], '1');
  const radioDF = select('radioDF', ['1', '2'], '1');

  return (
    <DynamicFieldDefinitionList
      title="title"
      layout={DynamicFieldDefinitionList.Layout.VERTICAL_TWO_COLUMN}
      locale="en-GB"
      model={{
        text: textDF,
        number: numberDF,
        select: selectDF,
        date: new Date(dateDF),
        checkbox: true,
        radio: radioDF,
        password: passwordDF,
        telephone: phoneDF,
        textarea: textareaDF,
      }}
      fields={{
        text: {
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
    />
  );
};
