import React from 'react';
import Types from 'prop-types';

const PackageVersion = ({ version }) => <small>v{version}</small>;
PackageVersion.propTypes = {
  version: Types.string.isRequired,
};

export default PackageVersion;
