import React, { Component } from 'react';
import Types from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';

import './BackButton.less';

const BackArrow = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    className="m-t-1"
  >
    <title>ICON: Back</title>
    <path d="M0 8l8-8 1.5 1.5L4 7h16v2H4l5.5 5.5L8 16" fill="#00B9FF" fillRule="evenodd" />
  </svg>
);

class BackButton extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) => ({
    isMovingBackward: nextProps.activeStep < prevState.activeStep,
    activeStep: nextProps.activeStep,
  });

  constructor(props) {
    super(props);

    this.state = {
      activeStep: props.activeStep,
      isMovingBackward: false,
    };
  }

  render() {
    const { steps, activeStep, onGoBack } = this.props;

    return (
      <button
        className={`btn-unstyled visible-xs tw-flow-navigation__back-button ${
          !onGoBack ? 'tw-flow-navigation__back-button--hidden' : ''
        }`}
        onClick={() => onGoBack && onGoBack()}
      >
        <div className="tw-flow-navigation__back-arrow">
          <BackArrow />
        </div>

        {steps.map(({ label }, index) => (
          <CSSTransition
            key={label}
            in={index === activeStep - 1}
            timeout={450}
            classNames="tw-flow-navigation__back-text"
            unmountOnExit
          >
            <span
              className={`tw-flow-navigation__back-text ${
                this.state.isMovingBackward ? 'tw-flow-navigation__back-text--moving-backward' : ''
              }`}
              aria-hidden={index !== activeStep - 1}
            >
              {label}
            </span>
          </CSSTransition>
        ))}
      </button>
    );
  }
}

BackButton.propTypes = {
  steps: Types.arrayOf(
    Types.shape({
      label: Types.string.isRequired,
    }),
  ).isRequired,
  activeStep: Types.number.isRequired,
  onGoBack: Types.func,
};

BackButton.defaultProps = {
  onGoBack: null,
};

export default BackButton;
