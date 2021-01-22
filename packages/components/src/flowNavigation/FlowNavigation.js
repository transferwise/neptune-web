import React, { useRef } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import Header from '../header';
import Stepper from '../stepper';
import AnimatedLabel from './animatedLabel';
import BackButton from './backButton';
import CloseButton from '../common/closeButton';

import { Theme, Breakpoint } from '../common';
import { useClientWidth } from '../common/hooks';

import './FlowNavigation.css';

const FlowNavigation = ({ activeStep, avatar, logo, onClose, onGoBack, steps }) => {
  const ref = useRef(null);

  const [clientWidth] = useClientWidth({ ref });
  const closeButton = onClose && <CloseButton onClick={onClose} />;
  const isSmall = clientWidth < Breakpoint.MEDIUM;

  const getLeftContentSmall = () => (
    <div className="visible-xs">
      {onGoBack && activeStep > 0 && (
        <BackButton
          label={
            <AnimatedLabel
              className="m-x-1"
              labels={steps.map((step) => step.label)}
              activeLabel={activeStep}
            />
          }
          onClick={onGoBack}
        />
      )}
      <div
        className={classNames('np-flow-navigation--logo', {
          'np-flow-navigation--logo__hidden': activeStep,
          'np-flow-navigation--logo__display': !activeStep,
        })}
      >
        {logo.mobile}
      </div>
    </div>
  );

  return (
    <Header
      ref={ref}
      className={classNames('np-flow-navigation', {
        'np-flow-navigation--hidden': !clientWidth,
        'np-flow-navigation--large': !isSmall,
        'np-flow-navigation--small': isSmall,
      })}
      leftContent={
        <>
          <div className="hidden-xs">{logo.desktop}</div>
          {getLeftContentSmall()}
        </>
      }
      rightContent={
        <>
          {avatar}
          {avatar && closeButton && <span className="separator" />}
          {closeButton}
        </>
      }
      bottomContent={
        <Stepper
          activeStep={activeStep}
          steps={steps}
          className={classNames('np-flow-navigation__stepper m-t-1')}
        />
      }
      layout={isSmall ? Header.Layout.VERTICAL : Header.Layout.HORIZONTAL}
    />
  );
};

FlowNavigation.Theme = Theme;

FlowNavigation.defaultProps = {
  activeStep: 0,
  avatar: undefined,
  onGoBack: undefined,
  onClose: undefined,
};

FlowNavigation.propTypes = {
  activeStep: Types.number,
  /** An Avatar */
  avatar: Types.element,
  logo: Types.shape({ desktop: Types.node.isRequired, mobile: Types.node.isRequired }).isRequired,
  /** Called when the close button is clicked. If not provided the close button won't show */
  onClose: Types.func,
  /** Called when the back button is clicked. If not provided the back button won't show. The back button only shows on small screens */
  onGoBack: Types.func,
  /** Steps to be displayed in stepper. If you don't need the stepper, please use OverlayHeader instead */
  steps: Types.arrayOf(
    Types.shape({
      label: Types.string.isRequired,
      onClick: Types.func,
      hoverLabel: Types.node,
    }),
  ).isRequired,
};

export default FlowNavigation;
