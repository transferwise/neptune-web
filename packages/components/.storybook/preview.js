import React, { StrictMode } from 'react';
import { addParameters } from '@storybook/react';

import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/icons/lib/styles/main.min.css';
import 'currency-flags/dist/currency-flags.min.css';

import './storybook.css';

// Set up Axe to run in the console
if (process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  const context = {
    include: [['#root']],
  };
  axe(React, ReactDOM, 1000, {}, context);
}

export const parameters = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
  options: {
    panelPosition: 'right',
  },
};

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '80px',
  minHeight: '100vh',
  width: '100vw',
};

const StrictModeDecorator = (storyFn) => <StrictMode>{storyFn()}</StrictMode>;

const CenterDecorator = (storyFn) => (
  <div style={style}>
    <div style={{ width: '100%' }}>{storyFn()}</div>
  </div>
);

export const decorators = [StrictModeDecorator, CenterDecorator];
