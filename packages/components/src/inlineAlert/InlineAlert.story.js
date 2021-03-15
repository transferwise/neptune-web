import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import InlineAlert from './InlineAlert';

export default {
  component: InlineAlert,
  title: 'InlineAlert',
};

export const basic = () => {
  const type = select(
    'type',
    [
      InlineAlert.Type.SUCCESS,
      InlineAlert.Type.ERROR,
      InlineAlert.Type.INFO,
      InlineAlert.Type.WARNING,
    ],
    InlineAlert.Type.ERROR,
  );

  const message = text('message', 'Please enter a password over 5 characters');

  return <InlineAlert type={type}>{message}</InlineAlert>;
};

export const input = () => {
  const type = select(
    'type',
    [
      InlineAlert.Type.SUCCESS,
      InlineAlert.Type.ERROR,
      InlineAlert.Type.INFO,
      InlineAlert.Type.WARNING,
    ],
    InlineAlert.Type.ERROR,
  );

  const message = text('message', 'Please enter a password over 5 characters');

  const typeClass = `has-${type}`;

  return (
    <>
      <p>
        The styling for the input (the coloured border) and the visibility of the inline alert is
        controlled through the use of <code>has-***</code> classes which are applied to the{' '}
        <code>form-group</code> element. For example, to display an inline alert of type error, you
        must also apply the class <code>has-error</code> to the parent <code>form-group</code>{' '}
        element. The available classes are <code>has-error</code>, <code>has-info</code>,{' '}
        <code>has-warning</code> and <code>has-success</code>.
      </p>
      <p>Where possible consumers should use Field instead of doing this manually.</p>
      <div className={`form-group ${typeClass}`}>
        <label className="control-label" htmlFor="id">
          Input type text
        </label>
        <input type="text" className="form-control" id="id" value="Neptune is cool" />
        <InlineAlert type={type}>{message}</InlineAlert>
      </div>
    </>
  );
};
