import React from 'react';
import Types from 'prop-types';

import { NavigationOption } from '@transferwise/components';
import { marginModel, actionModel } from '../models';
import { getMarginBottom } from '../utils';

import DynamicIcon from '../icon';

const DynamicDecision = (props) => {
  const decision = props.component;

  const renderDecisionOption = (option, onAction) => {
    return (
      <NavigationOption
        key={JSON.stringify(option)}
        title={option.action.label}
        content={option.text}
        onClick={() => onAction(option.action)}
        disabled={option.action.disabled}
        media={<DynamicIcon type={option.icon} />}
      />
    );
  };

  return (
    <div className={getMarginBottom(decision.margin)}>
      {decision.options.map((option) => renderDecisionOption(option, props.onAction))}
    </div>
  );
};

DynamicDecision.propTypes = {
  onAction: Types.func.isRequired,
  component: Types.shape({
    options: Types.arrayOf(
      Types.shape({
        text: Types.string,
        action: actionModel.isRequired,
        icon: Types.string,
      }),
    ).isRequired,
    margin: marginModel,
  }).isRequired,
};

export default DynamicDecision;
