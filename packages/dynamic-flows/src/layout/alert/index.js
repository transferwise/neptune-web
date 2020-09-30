import React from 'react';
import Types from 'prop-types';

import { Alert, Markdown } from '@transferwise/components';
import { sizeModel, marginModel, contextModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicAlert = (props) => {
  const alert = props.component;

  const getAlertSize = (size) => {
    switch (size) {
      case 'xs':
      case 'sm':
        return 'sm';
      case 'lg':
      case 'xl':
        return 'lg';
      default:
        return '';
    }
  };

  const alertProps = {
    type: alert.context ? alert.context : 'info',
  };

  const size = getAlertSize(alert.size);
  if (size) {
    alertProps.size = size;
  }

  return (
    <Alert {...alertProps} className={getMarginBottom(alert.margin)}>
      <Markdown>{alert.markdown}</Markdown>
    </Alert>
  );
};

DynamicAlert.propTypes = {
  component: Types.shape({
    markdown: Types.string.isRequired,
    size: sizeModel,
    context: contextModel,
    margin: marginModel,
  }).isRequired,
};

export default DynamicAlert;
