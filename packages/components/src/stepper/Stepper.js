import React from 'react';
import Types from 'prop-types';
import './Stepper.css';

/* eslint-disable react/no-array-index-key */
const Stepper = ({ steps, activeStep }) => {
  const stepPercentage = 1 / (steps.length - 1);
  const percentageCompleted = activeStep / (steps.length - 1);
  const filledWidth = Math.max(percentageCompleted - stepPercentage, 0);
  const endingWidth = Math.min(activeStep, 1) * stepPercentage;
  return (
    <div>
      <div className="progress">
        <div className="progress-bar-filler" style={{ width: `${filledWidth * 100}%` }} />
        <div className="progress-bar-ending" style={{ width: `${endingWidth * 100}%` }} />
      </div>
      <div className="tw-stepper-steps">
        {steps.map((step, index) =>
          <div
            key={step}
            style={{ left: `${index * stepPercentage * 100}%` }}
            className={`
              tw-stepper__step
              ${index === activeStep ? 'tw-stepper__step--active' : ''}
              ${index < activeStep ? 'tw-stepper__step--done' : ''}
            `}
          >
            {step}
          </div>,
        )}
      </div>
    </div>
  );
};
/* eslint-enable react/no-array-index-key */

Stepper.propTypes = {
  steps: Types.arrayOf(Types.string),
  activeStep: Types.number,
};

Stepper.defaultProps = {
  steps: [],
  activeStep: 0,
};

export default Stepper;
