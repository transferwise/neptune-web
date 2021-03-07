import React from 'react';
import Types from 'prop-types';

import { Button } from '@transferwise/components';
import { actionModel, sizeModel, alignModel, marginModel, contextModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicButton = (props) => {
  const { component, onAction } = props;

  const getActionClasses = (action) => {
    return getMarginBottom(action.margin || 'md') + (action.primary ? ' btn-primary' : '');
  };

  const getButtonSize = (size) => {
    switch (size) {
      case 'xs':
      case 'sm':
        return Button.Size.SMALL;
      case 'lg':
      case 'xl':
        return Button.Size.LARGE;
      case 'md':
      default:
        return Button.Size.MEDIUM;
    }
  };

  const getButtonType = (context) => {
    switch (context) {
      case 'primary':
        return Button.Type.PRIMARY;
      case 'success':
        return Button.Type.PAY;
      case 'failure':
      case 'warning':
        return Button.Type.DANGER;
      default:
        return Button.Type.SECONDARY;
    }
  };

  return (
    <Button
      size={getButtonSize(component.size)}
      type={getButtonType(component.context)}
      block
      className={getActionClasses(component.action)}
      onClick={() => onAction(component.action)}
      disabled={component.action.disabled}
    >
      {component.action.label}
    </Button>
  );
};

DynamicButton.propTypes = {
  onAction: Types.func.isRequired,
  component: Types.shape({
    action: actionModel.isRequired,
    size: sizeModel,
    align: alignModel,
    context: contextModel,
    margin: marginModel,
  }).isRequired,
};

export default DynamicButton;
