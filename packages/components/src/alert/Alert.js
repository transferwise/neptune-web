import React, { Component } from 'react';
import Types from 'prop-types';

import classNames from 'classnames';
import requiredIf from 'react-required-if';

const Type = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
};

const Size = {
  SMALL: 'sm',
  LARGE: 'lg',
};

// TODO: align values with keys with a breaking change
const ArrowPosition = {
  TOP_LEFT: 'up-left',
  TOP: 'up-center',
  TOP_RIGHT: 'up-right',
  BOTTOM_LEFT: 'down-left',
  BOTTOM: 'down-center',
  BOTTOM_RIGHT: 'down-right',
};

export default class Alert extends Component {
  static Size = Size;
  static Type = Type;
  static ArrowPosition = ArrowPosition;

  static propTypes = {
    type: Types.string,
    children: Types.node.isRequired,
    size: Types.oneOf(Object.values(Size)),
    dismissible: Types.bool,
    // eslint-disable-next-line
    onDismiss: requiredIf(Types.func, ({ dismissible }) => dismissible),
    arrow: Types.oneOf(Object.values(ArrowPosition)),
  };

  static defaultProps = {
    type: Type.INFO,
    size: Size.LARGE,
    dismissible: false,
    arrow: null,
  };

  render() {
    const { type, arrow, size, children, dismissible, onDismiss } = this.props;

    const alertConfigClasses = {
      'alert-success': type === 'success',
      'alert-info': type === 'info',
      'alert-warning': type === 'warning',
      'alert-danger': type === 'error',
      small: size === Size.SMALL,
      'p-x-2': size === Size.SMALL,
      'p-y-1': size === Size.SMALL,
    };

    return (
      <div
        role="alert"
        className={classNames('alert', 'alert-detach', alertConfigClasses, arrowClasses(arrow))}
      >
        {dismissible && (
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            onClick={onDismiss}
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        )}
        {children}
      </div>
    );
  }
}

function arrowClasses(arrow) {
  if (arrow) {
    const classes = ['arrow'];
    const { BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, TOP, TOP_RIGHT, TOP_LEFT } = ArrowPosition;

    switch (arrow) {
      case BOTTOM:
        return classes.concat('arrow-bottom', 'arrow-center');
      case BOTTOM_LEFT:
        return classes.concat('arrow-bottom', 'arrow-left');
      case BOTTOM_RIGHT:
        return classes.concat('arrow-bottom', 'arrow-right');
      case TOP:
        return classes.concat('arrow-center');
      case TOP_RIGHT:
        return classes.concat('arrow-right');
      case TOP_LEFT:
      default:
        return classes;
    }
  }
  return null;
}
