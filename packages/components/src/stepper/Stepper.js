import React from 'react';
import Types from 'prop-types';
import './Stepper.css';

/* eslint-disable react/no-array-index-key */
const Stepper = ({ steps, activeStep }) => {
  const stepPercentage = 1 / steps.length;
  const percentageCompleted = activeStep / steps.length;
  const filledPercentage = Math.max(percentageCompleted - stepPercentage, 0);
  const endingWidthPercentage = Math.min(activeStep, 1) * stepPercentage;
  return (
    <div>
      <div className="progress">
        <div className="progress-bar-filler" style={{ width: `${filledPercentage * 100}%` }} />
        <div className="progress-bar-ending" style={{ width: `${endingWidthPercentage * 100}%` }} />
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
