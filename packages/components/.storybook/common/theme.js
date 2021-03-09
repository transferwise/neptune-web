import { create } from '@storybook/theming';

import Logo from './wise_logo.svg';

export default create({
  base: 'light',

  colorPrimary: '#37517e',
  colorSecondary: '#00b9ff',

  // UI
  appBg: '#f2f5f7',
  appContentBg: '#f2f5f7',
  appBorderColor: '#e2e6e8',
  appBorderRadius: 3,

  // Typography
  // fontBase: '"Averta", "Avenir W02", "Avenir", Helvetica, Arial, sans-serif',
  // fontCode: 'monospace',

  // Text colors
  textColor: '#4a5860',
  textInverseColor: 'rgba(255, 255, 255, 0.9)',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#00b9ff',
  barBg: '#253655',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e2e6e8',
  inputTextColor: '#2e4369',
  inputBorderRadius: 3,

  brandTitle: 'Wise',
  brandUrl: 'https://wise.com',
  brandImage: Logo,

  showSearchBox: false,
});
