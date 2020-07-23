import React from 'react';
import Types from 'prop-types';

import { marginModel, alignModel, sizeModel } from '../models';
import { getTextAlignmentAndMargin } from '../utils';

const DynamicHeading = (props) => {
  const heading = props.component;

  const classes = getTextAlignmentAndMargin(heading);

  switch (heading.size) {
    case 'xs':
      return <h5 className={classes}> {heading.text} </h5>;
    case 'sm':
      return <h4 className={classes}> {heading.text} </h4>;
    case 'md':
      return <h3 className={classes}> {heading.text} </h3>;
    case 'xl':
      return <h1 className={classes}> {heading.text} </h1>;
    case 'lg':
    default:
      return <h2 className={classes}> {heading.text} </h2>;
  }
};

DynamicHeading.propTypes = {
  component: Types.shape({
    text: Types.string.isRequired,
    margin: marginModel,
    size: sizeModel,
    align: alignModel,
  }).isRequired,
};

export default DynamicHeading;
