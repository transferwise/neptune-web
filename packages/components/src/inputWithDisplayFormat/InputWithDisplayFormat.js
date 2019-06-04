import React from 'react';
import Types from 'prop-types';
import WithDisplayFormat from '../withDisplayFormat';

const InputWithDisplayFormat = props => (
  <WithDisplayFormat {...props} render={renderProps => <input {...renderProps} />} />
);

InputWithDisplayFormat.propTypes = {
  displayPattern: Types.string.isRequired,
  onChange: Types.func.isRequired,
};

export default InputWithDisplayFormat;
