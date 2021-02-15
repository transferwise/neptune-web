import React from 'react';
import Types from 'prop-types';

const BETA_BADGE_TYPE = 'beta';
const NEW_BADGE_TYPE = 'new';

const LabelTypes = [BETA_BADGE_TYPE, NEW_BADGE_TYPE];

export default function Badge({ type }) {
  console.log('type', type, Badge.Type);
  return <span className="badge badge-success">{type}</span>;
}

Badge.Type = Object.fromEntries(LabelTypes.map((label) => [label.toUpperCase(), label]));

Badge.propTypes = {
  type: Types.oneOf(LabelTypes),
};

Badge.defaultProps = {
  type: BETA_BADGE_TYPE,
};
