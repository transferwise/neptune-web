import React from 'react';
import Types from 'prop-types';

const PrintBundleSize = ({ bundleSize }) => <small>{bundleSize} Kb</small>;
PrintBundleSize.propTypes = {
  bundleSize: Types.number.isRequired,
};

export default PrintBundleSize;
