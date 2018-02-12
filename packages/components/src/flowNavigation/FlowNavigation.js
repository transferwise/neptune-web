import React from 'react';
import Types from 'prop-types';

import './FlowNavigation.less';
import Stepper from '../stepper';
import Avatar from './avatar';

const ProfileType = {
  BUSINESS: 'BUSINESS',
  PERSONAL: 'PERSONAL',
};

const FlowNavigation = ({ steps, activeStep, avatarUrl, profileType, onClose, onGoBack }) => (
  <div className="tw-flow-navigation">
    <div className="container">
      <div className="row p-t-3 tw-flow-navigation__wrapper">
        <div className="col-lg-2 col-xs-6 m-lg-t-1">
          <div className="logo logo-primary logo-3 hidden-xs" />
          <button
            className={`btn-unstyled visible-xs tw-flow-navigation__back-button ${
              !onGoBack ? 'tw-flow-navigation__back-button--hidden' : ''
            }`}
            onClick={() => onGoBack && onGoBack()}
          >
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              xmlns="http://www.w3.org/2000/svg"
              className="m-t-1"
            >
              <title>ICON: Back</title>
              <path
                d="M0 8l8-8 1.5 1.5L4 7h16v2H4l5.5 5.5L8 16"
                fill="#00B9FF"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <div className={`flag flag-info logo-3 visible-xs ${onGoBack ? 'flag--hidden' : ''}`} />
        </div>
        <div className="col-lg-2 col-xs-6 col-lg-push-8 text-xs-right m-lg-t-1">
          <Avatar url={avatarUrl} profileType={profileType} />
          <button
            className="btn-unstyled tw-flow-navigation__close-button icon icon-close icon-lg m-l-2"
            onClick={onClose}
          />
        </div>
        <div className="col-xs-12 col-lg-6 col-lg-pull-2 col-lg-offset-1 tw-flow-navigation__stepper">
          <Stepper activeStep={activeStep} steps={steps} />
        </div>
      </div>
    </div>
  </div>
);

FlowNavigation.defaultProps = {
  activeStep: 0,
  avatarUrl: '',
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
  profileType: Types.oneOf(Object.keys(ProfileType)),
  onGoBack: Types.func,
  onClose: Types.func.isRequired,
};

export default FlowNavigation;
