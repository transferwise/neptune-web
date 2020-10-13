import React from 'react';
import * as components from './components';
import Alert from '../alert';

export default {
  component: 'Neptune css test',
  title: 'Neptune css test',
};

export const basic = () => (
  <>
    <Alert type="warning">Please use only for visual regression testing</Alert>
    <div className="m-t-5" dangerouslySetInnerHTML={{ __html: Object.values(components) }} />
  </>
);
