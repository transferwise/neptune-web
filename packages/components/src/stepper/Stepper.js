import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import './Stepper.css';
import Tooltip from '../tooltip';
import { isTouchDevice } from './deviceDetection';

function clamp(from, to, value) {
  return Math.max(Math.min(to, value), from);
}

/* eslint-disable react/no-array-index-key */
const Stepper = ({ steps, activeStep, className }) => {
  if (steps.length === 0) {
    return null;
  }

  const activeStepIndex = clamp(0, steps.length - 1, activeStep);
  const stepPercentage = 1 / (steps.length - 1);
  const percentageCompleted = activeStepIndex / (steps.length - 1);
  const filledWidth = Math.max(percentageCompleted - stepPercentage, 0);
  const endingWidth = Math.min(activeStepIndex, 1) * stepPercentage;

  const renderStep = (step, index) => {
    const active = index === activeStepIndex;
    const clickable = step.onClick && !active;

    const labelButton = (
      <button
        type="button"
        className="btn-unstyled tw-stepper__step-label"
        disabled={!clickable}
        onClick={() => clickable && step.onClick()}
      >
        <small>{step.label}</small>
      </button>
    );
    return (
      <li
        key={index}
        style={{ left: `${index * stepPercentage * 100}%` }}
        className={`
          hidden-xs
          tw-stepper__step
          ${active ? 'tw-stepper__step--active' : ''}
          ${clickable ? 'tw-stepper__step--clickable' : ''}
        `}
      >
        {step.hoverLabel && !isTouchDevice() ? (
          <Tooltip position={Tooltip.Position.BOTTOM} label={step.hoverLabel}>
            {labelButton}
          </Tooltip>
        ) : (
          labelButton
        )}
      </li>
    );
  };

  return (
    <div className={classNames('tw-stepper', className)}>
      <div className="progress">
        <div className="progress-bar-filler" style={{ width: `${filledWidth * 100}%` }} />
        <div className="progress-bar-ending" style={{ width: `${endingWidth * 100}%` }} />
      </div>
      <ul className="tw-stepper-steps p-t-1 m-b-0">{steps.map(renderStep)}</ul>
    </div>
  );
};
/* eslint-enable react/no-array-index-key */

Stepper.propTypes = {
  steps: Types.arrayOf(
    Types.shape({
      label: Types.node.isRequired,
      onClick: Types.func,
      hoverLabel: Types.node,
    }),
  ).isRequired,
  activeStep: Types.number,
  className: Types.string,
};

Stepper.defaultProps = {
  activeStep: 0,
  className: undefined,
};

export default Stepper;
