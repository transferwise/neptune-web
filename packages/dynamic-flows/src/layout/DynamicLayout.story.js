import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import DynamicLayout from './DynamicLayout';

import allComponents from './layouts/all.json';
import reviewStep from './layouts/review.json';
import successStep from './layouts/success.json';

export default {
  component: DynamicLayout,
  title: 'DynamicLayout',
};

export const basic = () => {
  const layouts = {
    'All components': allComponents,
    'Review step': reviewStep,
    'Success step': successStep,
  };

  const components = select('layout', layouts, allComponents);
  const submitted = boolean('submitted', true);

  const onModelChange = (model, isValid, schema) => {
    console.log('onModelChange', model, isValid, schema); // eslint-disable-line
    action('onModelChange')(model);
  };

  const onAction = (actionObject) => {
    console.log('onAction', actionObject); // eslint-disable-line
    action('onAction')(actionObject);
  };

  return (
    <DynamicLayout
      components={components}
      onAction={onAction}
      onModelChange={onModelChange}
      submitted={submitted}
      errors={{ lastname: 'Last name is required' }}
    />
  );
};
