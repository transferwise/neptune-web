import React, { Component } from 'react';
import Types from 'prop-types';

import classNames from 'classnames';
import requiredIf from 'react-required-if';
import { Size, MessageType, ArrowPosition } from '../common';
import { Cross as CrossIcon } from '@transferwise/icons';

export default class Alert extends Component {
  static Size = Size;
  static Type = MessageType;
  static ArrowPosition = ArrowPosition;

  static propTypes = {
    type: Types.oneOf([Alert.Type.INFO, Alert.Type.WARNING, Alert.Type.ERROR, Alert.Type.SUCCESS]),
    children: Types.node.isRequired,
    size: Types.oneOf([Alert.Size.SMALL, Alert.Size.LARGE]),
    dismissible: Types.bool,
    // eslint-disable-next-line
    onDismiss: requiredIf(Types.func, ({ dismissible }) => dismissible),
    arrow: Types.oneOf([
      Alert.ArrowPosition.TOP_LEFT,
      Alert.ArrowPosition.TOP,
      Alert.ArrowPosition.TOP_RIGHT,
      Alert.ArrowPosition.BOTTOM_LEFT,
      Alert.ArrowPosition.BOTTOM,
      Alert.ArrowPosition.BOTTOM_RIGHT,
    ]),
  };

  static defaultProps = {
    type: Alert.Type.INFO,
    size: Alert.Size.LARGE,
    dismissible: false,
    arrow: null,
  };

  render() {
    const { type, arrow, size, children, dismissible, onDismiss } = this.props;

    const alertConfigClasses = {
      'alert-success': type === Alert.Type.SUCCESS,
      'alert-info': type === Alert.Type.INFO,
      'alert-warning': type === Alert.Type.WARNING,
      'alert-danger': type === Alert.Type.ERROR,
      small: size === Alert.Size.SMALL,
      'p-x-2': size === Alert.Size.SMALL,
      'p-y-1': size === Alert.Size.SMALL,
    };

    return (
      <div
        role="alert"
        className={classNames('alert', 'alert-detach', alertConfigClasses, arrowClasses(arrow))}
      >
        {dismissible && (
          <button
            type="button"
            className="close m-l-2"
            data-dismiss="alert"
            onClick={onDismiss}
            aria-label="Close"
          >
            <CrossIcon />
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
    const { BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, TOP, TOP_RIGHT, TOP_LEFT } = Alert.ArrowPosition;

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
