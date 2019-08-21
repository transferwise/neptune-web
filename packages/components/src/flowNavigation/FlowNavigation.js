import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './FlowNavigation.less';
import BackButton from './backButton';
import Stepper from '../stepper';
import Avatar from './avatar';
import { Theme } from '../common';

const ProfileType = {
  BUSINESS: 'BUSINESS',
  PERSONAL: 'PERSONAL',
};

const FlowNavigation = ({
  steps,
  activeStep,
  avatarUrl,
  done,
  profileType,
  onClose,
  onGoBack,
  theme,
}) => (
  <div
    className={classNames('tw-flow-navigation', {
      'tw-flow-navigation--done': done,
    })}
  >
    <div className="container">
      <div className="row p-t-3 tw-flow-navigation__wrapper">
        <div className="col-lg-2 col-xs-6 m-lg-t-1">
          <div
            className={classNames('logo', 'logo-3', 'hidden-xs', {
              'logo-primary': theme === Theme.LIGHT,
              'logo-inverse': theme === Theme.DARK,
            })}
          />
          <BackButton steps={steps} activeStep={activeStep} onGoBack={onGoBack} />
          <div
            className={classNames('flag', 'flag-info', 'logo-3', 'visible-xs', {
              'flag--hidden': onGoBack,
            })}
          />
        </div>
        <div className="col-lg-2 col-xs-6 col-lg-push-8 text-xs-right m-lg-t-1">
          {done ? '' : <Avatar url={avatarUrl} profileType={profileType} />}
          {onClose && (
            <button
              className={classNames(
                'btn-unstyled',
                'tw-flow-navigation__close-button',
                'icon',
                'icon-close',
                'icon-lg',
                'm-l-3',
                {
                  'close-button-with-avatar': !done,
                },
              )}
              onClick={onClose}
            />
          )}
        </div>
        {/* TODO: Remove this hide stepper condition based on the theme to avoid theme dictating functionality */}
        {done || theme === Theme.DARK ? (
          ''
        ) : (
          <div className="col-xs-12 col-lg-6 col-lg-pull-2 col-lg-offset-1 tw-flow-navigation__stepper">
            <Stepper activeStep={activeStep} steps={steps} />
          </div>
        )}
      </div>
    </div>
  </div>
);

FlowNavigation.defaultProps = {
  activeStep: 0,
  avatarUrl: '',
  done: false,
  profileType: ProfileType.PERSONAL,
  onGoBack: null,
  onClose: null,
  theme: Theme.LIGHT,
};

FlowNavigation.propTypes = {
  steps: Types.arrayOf(
    Types.shape({
      label: Types.string.isRequired,
      onClick: Types.func,
      hoverLabel: Types.node,
    }),
  ).isRequired,
  activeStep: Types.number,
  avatarUrl: Types.string,
  done: Types.bool,
  profileType: Types.oneOf(Object.keys(ProfileType)),
  onGoBack: Types.func,
  onClose: Types.func,
  theme: Types.oneOf([Theme.LIGHT, Theme.DARK]),
};

export default FlowNavigation;
