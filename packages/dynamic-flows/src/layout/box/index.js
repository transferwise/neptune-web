import React from 'react';
import Types from 'prop-types';

import { marginModel } from '../models';
import { getMarginBottom } from '../utils';

import DynamicLayout from '../index';

const DynamicBox = (props) => {
  const box = props.component;

  const getBorderClass = (border) => {
    return border ? ' well p-b-0' : '';
  };

  const getBoxWidthClasses = (component) => {
    switch (component.width) {
      case 'xs':
        return ' col-md-4 col-md-offset-4';
      case 'sm':
        return ' col-md-6 col-md-offset-3';
      case 'md':
        return ' col-md-8 col-md-offset-2';
      case 'lg':
        return ' col-md-10 col-md-offset-1';
      case 'xl':
      default:
        return ' col-xs-12';
    }
  };

  if (!box.width || box.width === 'xl') {
    return (
      <div className={getMarginBottom(box.margin || 'lg') + getBorderClass(box.border)}>
        <DynamicLayout
          components={box.components}
          onModelChange={props.onModelChange}
          onAction={props.onAction}
          submitted={props.submitted}
          errors={props.errors}
        />
      </div>
    );
  }

  return (
    <div className="row">
      <div className={getMarginBottom(box.margin || 'lg') + getBoxWidthClasses(box)}>
        <div className={getBorderClass(box.border)}>
          <DynamicLayout
            components={box.components}
            onModelChange={props.onModelChange}
            onAction={props.onAction}
            submitted={props.submitted}
            errors={props.errors}
          />
        </div>
      </div>
    </div>
  );
};

DynamicBox.propTypes = {
  onAction: Types.func.isRequired,
  onModelChange: Types.func.isRequired,
  component: Types.shape({
    components: Types.arrayOf(Types.shape({})),
    margin: marginModel,
    border: Types.bool,
    width: Types.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  }).isRequired,
  submitted: Types.bool.isRequired,
  errors: Types.oneOfType([Types.string, Types.number, Types.object, Types.array, Types.bool]),
};

DynamicBox.defaultProps = {
  errors: null,
};

export default DynamicBox;
