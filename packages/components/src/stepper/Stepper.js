import React, { Component } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import './Stepper.less';
import Tooltip from '../tooltip';

function clamp(from, to, value) {
  return Math.max(Math.min(to, value), from);
}

/* eslint-disable react/no-array-index-key */
class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = { highestVisitedIndex: 0 };
    this.renderStep = this.renderStep.bind(this);
  }

  componentWillMount() {
    this.updateState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  updateState({ steps, activeStep }) {
    const activeStepIndex = clamp(0, steps.length - 1, activeStep);
    const stepPercentage = 1 / (steps.length - 1);
    const percentageCompleted = activeStepIndex / (steps.length - 1);
    const filledWidth = Math.max(percentageCompleted - stepPercentage, 0);
    const endingWidth = Math.min(activeStepIndex, 1) * stepPercentage;
    const highestVisitedIndex = Math.max(this.state.highestVisitedIndex, activeStepIndex);

    this.setState(() => ({
      activeStepIndex,
      stepPercentage,
      percentageCompleted,
      filledWidth,
      endingWidth,
      highestVisitedIndex,
    }));
  }

  renderStep(step, index) {
    const { activeStepIndex } = this.state;

    const clickable = step.onClick && index < activeStepIndex;
    const active = index === activeStepIndex;
    const visited = index <= this.state.highestVisitedIndex && step.onClick;
    const disabled = active || (!clickable && !visited);

    const stepClasses = classNames({
      'tw-stepper__step--active': active,
      'tw-stepper__step--visited': visited,
      'tw-stepper__step--clickable': clickable,
    });

    const hoverLabel = step.hoverHTML ? (
      <span
        dangerouslySetInnerHTML={{ __html: step.hoverLabel }} // eslint-disable-line react/no-danger
      />
    ) : (
      step.hoverLabel
    );
    const labelButton = (
      <button
        className="btn-unstyled tw-stepper__step-label"
        disabled={disabled}
        onClick={() => !disabled && step.onClick()}
      >
        <small>{step.label}</small>
      </button>
    );
    return (
      <li
        key={index}
        style={{ left: `${index * this.state.stepPercentage * 100}%` }}
        className={`hidden-xs tw-stepper__step ${stepClasses}`}
      >
        {
          step.hoverLabel ? (
            <Tooltip position={Tooltip.Position.BOTTOM} label={hoverLabel}>
              {labelButton}
            </Tooltip>
          ) : labelButton
        }
      </li>
    );
  }

  render() {
    const { filledWidth, endingWidth } = this.state;

    return (
      <div className="tw-stepper">
        <div className="progress">
          <div className="progress-bar-filler" style={{ width: `${filledWidth * 100}%` }} />
          <div className="progress-bar-ending" style={{ width: `${endingWidth * 100}%` }} />
        </div>
        <ul className="tw-stepper-steps p-t-1 m-b-0">{this.props.steps.map(this.renderStep)}</ul>
      </div>
    );
  }
}
/* eslint-enable react/no-array-index-key */

Stepper.propTypes = {
  steps: Types.arrayOf(
    Types.shape({
      label: Types.string.isRequired,
      onClick: Types.func,
      hoverLabel: Types.string,
      hoverHTML: Types.bool,
    }),
  ).isRequired,
};

Stepper.defaultProps = {
  activeStep: 0,
};

export default Stepper;
