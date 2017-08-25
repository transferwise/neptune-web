import React from 'react';
import Types from 'prop-types';
import './Stepper.css';

/* eslint-disable react/no-array-index-key */
const Stepper = ({ steps, activeStep }) => {
  const activeStepIndex = Math.max(Math.min(steps.length - 1, activeStep), 0);
  const stepPercentage = 1 / (steps.length - 1);
  const percentageCompleted = activeStepIndex / (steps.length - 1);
  const filledWidth = Math.max(percentageCompleted - stepPercentage, 0);
  const endingWidth = Math.min(activeStepIndex, 1) * stepPercentage;
  return (
    <div className="p-b-4">
      <div className="progress">
        <div className="progress-bar-filler" style={{ width: `${filledWidth * 100}%` }} />
        <div className="progress-bar-ending" style={{ width: `${endingWidth * 100}%` }} />
      </div>
      <ul className="tw-stepper-steps">
        {steps.map((step, index) =>
          <li
            key={index}
            style={{ left: `${index * stepPercentage * 100}%` }}
            className={`
              tw-stepper__step
              ${index === activeStepIndex ? 'tw-stepper__step--active' : ''}
              ${index < activeStepIndex ? 'tw-stepper__step--done' : ''}
            `}
          >
            {step}
          </li>,
        )}
      </ul>
    </div>
  );
};
/* eslint-enable react/no-array-index-key */

Stepper.propTypes = {
  steps: Types.arrayOf(Types.string).isRequired,
  activeStep: Types.number,
};

Stepper.defaultProps = {
  activeStep: 0,
};

export default Stepper;
