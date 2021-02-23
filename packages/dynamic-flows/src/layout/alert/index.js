import React from 'react';
import Types from 'prop-types';

import { Alert } from '@transferwise/components';
import { marginModel, contextModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicAlert = (props) => {
  const alert = props.component;

  const alertProps = {
    type: alert.context ? alert.context : 'neutral',
  };

  return (
    <Alert {...alertProps} className={getMarginBottom(alert.margin)} message={alert.markdown} />
  );
};

DynamicAlert.propTypes = {
  component: Types.shape({
    markdown: Types.string.isRequired,
    context: contextModel,
    margin: marginModel,
  }).isRequired,
};

export default DynamicAlert;
