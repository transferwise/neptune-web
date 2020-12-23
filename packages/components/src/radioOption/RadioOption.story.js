import React from 'react';

import { FastFlag as FastFlagIcon } from '@transferwise/icons';

import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RadioOption from './RadioOption';

export default {
  component: RadioOption,
  title: 'RadioOption',
};

export const basic = () => {
  const checked = boolean('checked', true);
  const title = text('title', 'title');
  const content = text('content', 'content');
  return (
    <RadioOption
      media={<FastFlagIcon />}
      title={title}
      content={content}
      id="id"
      name="radio-option"
      checked={checked}
      onChange={action('checked')}
      complex={false}
      disabled={false}
      value="value"
    />
  );
};

export const tile = () => {
  const checked = boolean('checked', true);
  const title = text('title', 'title');
  const content = text('content', 'content');
  return (
    <RadioOption
      media={
        <img
          src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
          alt=""
        />
      }
      presentation={RadioOption.presentation.TILE}
      title={title}
      content={content}
      id="id"
      name="radio-option"
      checked={checked}
      onChange={action('checked')}
      complex
      disabled={false}
      value="value"
    />
  );
};
