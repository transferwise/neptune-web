import React from 'react';
import Types from 'prop-types';
import WithDisplayFormat from '../withDisplayFormat';

const TextareaWithDisplayFormat = props => (
  <WithDisplayFormat {...props} render={renderProps => <textarea {...renderProps} />} />
);

TextareaWithDisplayFormat.propTypes = {
  displayPattern: Types.string.isRequired,
  onChange: Types.func.isRequired,
};

export default TextareaWithDisplayFormat;
