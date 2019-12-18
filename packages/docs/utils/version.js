import React from 'react';
import Types from 'prop-types';

const Version = ({ version }) => <small>v{version}</small>;
Version.propTypes = {
  version: Types.string.isRequired,
};

export default Version;
