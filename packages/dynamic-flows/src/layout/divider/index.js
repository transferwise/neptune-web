import React from 'react';
import Types from 'prop-types';

import { marginModel } from '../models';
import { getMarginBottom } from '../utils';

const DynamicDivider = ({ component }) => {
  const margin = getMarginBottom(component.margin);
  const className = `m-t-0 ${margin}`;

  return <hr className={className} />;
};

DynamicDivider.propTypes = {
  component: Types.shape({
    margin: marginModel,
  }).isRequired,
};

export default DynamicDivider;
