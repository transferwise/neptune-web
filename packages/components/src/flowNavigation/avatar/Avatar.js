import React, { Component } from 'react';

import Types from 'prop-types';

const ProfileType = {
  BUSINESS: 'BUSINESS',
  PERSONAL: 'PERSONAL',
};

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  componentWillMount() {
    this.loadImageIfNeeded(this.props.url);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) {
      this.loadImageIfNeeded(nextProps.url, nextProps);
    }
  }

  shouldShowPersonalAvatar(props = this.props) {
    return props.profileType !== ProfileType.BUSINESS;
  }

  loadImageIfNeeded(url, props) {
    if (this.shouldShowPersonalAvatar(props) && url) {
      const component = this;
      const possibleImage = new Image();
      possibleImage.onload = function onload() {
        component.setState({ image: this.src });
      };
      possibleImage.src = url;
    }
  }

  canShowImage() {
    return this.shouldShowPersonalAvatar() && this.state.image && this.props.url;
  }

  renderPersonalAvatar() {
    if (this.canShowImage()) {
      return <img alt="avatar" src={this.state.image} />;
    }
    return <div className="icon icon-profile" />;
  }

  render() {
    return (
      <div
        className={`circle circle-responsive circle-inverse ${
          this.canShowImage() ? 'tw-avatar--with-image' : ''
        }`}
      >
        {this.shouldShowPersonalAvatar() ? (
          this.renderPersonalAvatar()
        ) : (
          <div className="icon icon-bank" />
        )}
      </div>
    );
  }
}

Avatar.defaultProps = {
  url: '',
  profileType: ProfileType.PERSONAL,
};

Avatar.propTypes = {
  url: Types.string,
  // because of the way we're checking nextprops, eslint fails to detect usage here
  // eslint-disable-next-line react/no-unused-prop-types
  profileType: Types.oneOf(Object.keys(ProfileType)),
};

export default Avatar;
