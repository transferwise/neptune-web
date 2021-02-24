import React from 'react';
import Types from 'prop-types';

import { marginModel } from '../models';
import { getMarginBottom } from '../utils';

import DynamicLayout from '../index';

const DynamicColumns = (props) => {
  const columns = props.component;

  let leftWidth = 'col-md-6';
  let rightWidth = 'col-md-6';

  if (columns.bias === 'left') {
    leftWidth = 'col-md-8';
    rightWidth = 'col-md-4';
  }
  if (columns.bias === 'right') {
    leftWidth = 'col-md-4';
    rightWidth = 'col-md-8';
  }

  return (
    <div className={`${getMarginBottom(columns.margin || 'lg')} row`}>
      <div className={leftWidth}>
        <DynamicLayout
          components={columns.left}
          onModelChange={props.onModelChange}
          onAction={props.onAction}
          submitted={props.submitted}
          errors={props.errors}
          model={props.model}
          onPersistAsync={props.onPersistAsync}
        />
      </div>
      <div className={rightWidth}>
        <DynamicLayout
          components={columns.right}
          onModelChange={props.onModelChange}
          onAction={props.onAction}
          submitted={props.submitted}
          errors={props.errors}
          model={props.model}
          onPersistAsync={props.onPersistAsync}
        />
      </div>
    </div>
  );
};

DynamicColumns.propTypes = {
  onAction: Types.func.isRequired,
  onModelChange: Types.func.isRequired,
  component: Types.shape({
    left: Types.arrayOf(Types.shape),
    right: Types.arrayOf(Types.shape),
    margin: marginModel,
    bias: Types.oneOf(['left', 'right']),
  }).isRequired,
  submitted: Types.bool.isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.object, Types.array, Types.bool]),
  errors: Types.oneOfType([Types.string, Types.object, Types.array]),
  onPersistAsync: Types.func.isRequired,
};

DynamicColumns.defaultProps = {
  model: null,
  errors: null,
};

export default DynamicColumns;
