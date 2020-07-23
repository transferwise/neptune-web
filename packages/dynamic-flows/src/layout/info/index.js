import React from 'react';
import Types from 'prop-types';

import { Markdown } from '@transferwise/components';

import { marginModel } from '../models';
import { getTextAlignmentAndMargin } from '../utils';

const DynamicInfo = ({ component }) => {
  return (
    <div className={getTextAlignmentAndMargin(component)}>
      <Markdown>{component.markdown}</Markdown>
    </div>
  );
};

DynamicInfo.propTypes = {
  component: Types.shape({
    markdown: Types.string.isRequired,
    margin: marginModel,
  }).isRequired,
};

export default DynamicInfo;
