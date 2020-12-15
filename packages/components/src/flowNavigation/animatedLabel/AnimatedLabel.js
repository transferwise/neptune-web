import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './AnimatedLabel.css';

const AnimatedLabel = ({ activeLabel, className, labels }) => {
  const numLabels = labels.length - 1;

  return (
    <div className={classNames('np-animated-label', className)}>
      {labels.map((label, index) => {
        const nextLabel = index - 1;
        return (
          <div
            // eslint-disable-next-line
            key={index}
            className={classNames('text-xs-left', {
              'np-animated-label--in': index === activeLabel,
              'np-animated-label--out': nextLabel === activeLabel && nextLabel !== numLabels,
            })}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

AnimatedLabel.propTypes = {
  activeLabel: Types.number.isRequired,
  className: Types.string,
  labels: Types.arrayOf(Types.node).isRequired,
};
AnimatedLabel.defaultProps = {
  className: undefined,
};

export default AnimatedLabel;
