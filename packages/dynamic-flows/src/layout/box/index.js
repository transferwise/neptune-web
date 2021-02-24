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
        return ' col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4';
      case 'md':
        return ' col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3';
      case 'lg':
        return ' col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2';
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
          model={props.model}
          onPersistAsync={props.onPersistAsync}
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
            model={props.model}
            onPersistAsync={props.onPersistAsync}
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
  model: Types.oneOfType([Types.string, Types.number, Types.object, Types.array, Types.bool]),
  errors: Types.oneOfType([Types.string, Types.object, Types.array]),
  onPersistAsync: Types.func.isRequired,
};

DynamicBox.defaultProps = {
  model: null,
  errors: null,
};

export default DynamicBox;
