import React from 'react';
import * as components from './components';
import Alert from '../../src/alert';

export default {
  component: 'Neptune css test',
  title: 'Neptune css test',
};

export const basic = () => (
  <>
    <Alert
      type="negative"
      message="This page is used only for visual regression testing. We DO NOT guarantee support for the
      elements used on this page. Please DO NOT use as reference."
    />
    <div className="m-t-5" dangerouslySetInnerHTML={{ __html: Object.values(components) }} />
  </>
);
