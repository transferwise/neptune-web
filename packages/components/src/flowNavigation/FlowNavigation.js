import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import CloseButton from '../common/CloseButton';
import BackButton from './backButton';
import AvatarWrapper from './avatarWrapper';
import Logo from './logo';
import Stepper from '../stepper';
import Header from '../header';
import { Theme, ProfileType } from '../common';

import '@transferwise/neptune-css/dist/css/flowNavigation.css';

/**
 * FlowNavigation is a header component that provides a logo, avatar and close button, for use in overlay screens.
 *
 * @param {array} [steps] - The step to be displayed in the stepper and used by the backButton.
 * @param {number} [activeStep] - current selected step.
 * @param {string} [avatarUrl] - URL of the avatar. If not present, a placeholder will be used instead.
 * @param {boolean} [done] - state of the flow. If truthy stepper and avatar gets hidden. Border bottom also gets removed when done = true
 * @param {string} [profileType=FlowNavigation.ProfileType.PERSONAL] - ProfileType to use.
 * @param {function} [onClose] - Callback for the close button. If not present, no close button will be rendered.
 * @param {function} [onGoBack] - Callback for the BackButton. If not provided BackButton won't be displayed and Logo compact will display instead from mobile views.
 * @param {string} [theme=FlowNavigation.Theme.LIGHT] - Theme to use
 * @usage `<FlowNavigation activeStep={activeStep} onClose={callback} avatarUrl={someUrl} done={done} profileType={OverlayHeader.ProfyleType.BUSINESS} onGoBack={callback} theme={OverlayHeader.Theme.LIGHT} steps={steps} />`
 * */
const FlowNavigation = ({
  done,
  profileType,
  onGoBack,
  theme,
  avatarProps,
  stepperProps,
  closeButtonProps,
}) => {
  const avatar = done ? null : <AvatarWrapper {...avatarProps} profileType={profileType} />;
  const closeButton = closeButtonProps && closeButtonProps.onClick && (
    <CloseButton
      className={classNames('m-l-3', {
        'close-button-with-avatar': !done,
      })}
      {...closeButtonProps}
    />
  );
  return (
    <Header
      leftContent={
        <div className="m-lg-t-1">
          <Logo theme={theme} onGoBack={onGoBack} />
          <BackButton
            steps={stepperProps.steps}
            activeStep={stepperProps.activeStep}
            onGoBack={onGoBack}
          />
        </div>
      }
      rightContent={
        <div className="tw-flow-navigation__right-content m-lg-t-1">
          {avatar}
          {closeButton}
        </div>
      }
      bottomContent={
        done || theme === Theme.DARK ? null : (
          <div className="tw-flow-navigation__stepper m-lg-t-1">
            <Stepper {...stepperProps} />
          </div>
        )
      }
      className={classNames('tw-flow-navigation', 'tw-flow-navigation__wrapper', {
        'tw-flow-navigation--done': done,
        'tw-flow-navigation--inverse': theme === FlowNavigation.Theme.DARK,
      })}
    />
  );
};

FlowNavigation.ProfileType = ProfileType;
FlowNavigation.Theme = Theme;

FlowNavigation.defaultProps = {
  avatarProps: null,
  done: false,
  profileType: FlowNavigation.ProfileType.PERSONAL,
  onGoBack: null,
  theme: Theme.LIGHT,
  closeButtonProps: null,
};

FlowNavigation.propTypes = {
  closeButtonProps: Types.shape({
    'aria-label': Types.string.isRequired,
    onClick: Types.func.isRequired,
  }),
  stepperProps: Types.shape({
    activeStep: Types.number,
    steps: Types.arrayOf(
      Types.shape({
        label: Types.node.isRequired,
        'aria-label': Types.string.isRequired,
        'aria-la': Types.string.isRequired,
        onClick: Types.func,
        hoverLabel: Types.node,
      }),
    ).isRequired,
  }).isRequired,
  avatarProps: Types.shape({
    url: Types.string,
    'aria-label': Types.string,
  }),
  done: Types.bool,
  profileType: Types.oneOf([
    FlowNavigation.ProfileType.PERSONAL,
    FlowNavigation.ProfileType.BUSINESS,
  ]),
  onGoBack: Types.func,
  theme: Types.oneOf([FlowNavigation.Theme.LIGHT, FlowNavigation.Theme.DARK]),
};

export default FlowNavigation;
