import React from 'react';
import Types from 'prop-types';

import './FlowNavigation.less';
import BackButton from './backButton';
import Stepper from '../stepper';
import Avatar from './avatar';

const ProfileType = {
  BUSINESS: 'BUSINESS',
  PERSONAL: 'PERSONAL',
};

const FlowNavigation = ({ steps, activeStep, avatarUrl, done, profileType, onClose, onGoBack }) => (
  <div className={`tw-flow-navigation ${done ? 'tw-flow-navigation--done' : ''}`}>
    <div className="container">
      <div className="row p-t-3 tw-flow-navigation__wrapper">
        <div className="col-lg-2 col-xs-6 m-lg-t-1">
          <div className="logo logo-primary logo-3 hidden-xs" />
          <BackButton steps={steps} activeStep={activeStep} onGoBack={onGoBack} />
          <div className={`flag flag-info logo-3 visible-xs ${onGoBack ? 'flag--hidden' : ''}`} />
        </div>
        <div className="col-lg-2 col-xs-6 col-lg-push-8 text-xs-right m-lg-t-1">
          {done ? '' : <Avatar url={avatarUrl} profileType={profileType} />}
          {onClose && (
            <button
              className={`btn-unstyled tw-flow-navigation__close-button
              ${done ? '' : 'close-button-with-avatar'} icon icon-close icon-lg m-l-3`}
              onClick={onClose}
            />
          )}
        </div>
        {done ? (
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
};

FlowNavigation.propTypes = {
  steps: Types.arrayOf(
    Types.shape({
      label: Types.string.isRequired,
      onClick: Types.func,
      hoverLabel: Types.string,
      hoverHTML: Types.bool,
    }),
  ).isRequired,
  activeStep: Types.number,
  avatarUrl: Types.string,
  done: Types.bool,
  profileType: Types.oneOf(Object.keys(ProfileType)),
  onGoBack: Types.func,
  onClose: Types.func.isRequired,
};

export default FlowNavigation;
