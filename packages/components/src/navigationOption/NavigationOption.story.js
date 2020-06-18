import React from 'react';
import NavigationOption from './NavigationOption';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';

export default {
  component: NavigationOption,
  title: 'NavigationOption',
};

export const basic = () => {
  const href = text('href', 'http://www.transferwise.com');
  const title = text('title', 'Navigation option');
  const content = text('content', 'Button and icon are vertically centered.');
  const complex = boolean('complex', false);

  return (
    <NavigationOption
      complex={complex}
      id="navigation-option"
      name="navigation-option"
      href={href}
      title={title}
      content={content}
      onClick={action('clicked')}
      media={<FastFlagIcon />}
    />
  );
};
