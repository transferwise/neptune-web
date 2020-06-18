import React, { StrictMode } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';

import theme from './common/theme';
import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/icons/lib/styles/main.min.css';
import 'currency-flags/dist/currency-flags.min.css';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '80px',
  minHeight: '100vh',
  width: '100vw',
};

if (process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom');
  const axe = require('react-axe');
  const context = {
    include: [['#story-root']],
  };
  axe(React, ReactDOM, 1000, undefined, context);
}

const StrictModeDecorator = (storyFn) => <StrictMode>{storyFn()}</StrictMode>;

const CenterDecorator = (storyFn) => (
  <div style={style}>
    <div style={{ width: '100%' }}>{storyFn()}</div>
  </div>
);

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(
  withInfo({
    header: false,
    inline: true,
  }),
);
addDecorator(CenterDecorator);
addDecorator(StrictModeDecorator);
addParameters({
  options: {
    theme,
    panelPosition: 'right',
  },
});

configure(require.context('../src', true, /\.story\.js$/), module);
