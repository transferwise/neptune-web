import React from 'react';
import Types from 'prop-types';

const PackageVersion = ({ version }) => <span>v{version}</span>;
PackageVersion.propTypes = {
  version: Types.string.isRequired,
};

export default PackageVersion;
