import React, { Component } from 'react';
import Types from 'prop-types';

import classNames from 'classnames';

export const AlertType = {
  Info: 'info',
  Warning: 'warning',
  Error: 'error',
  Success: 'success',
};

export const AlertSize = {
  Small: 'sm',
  Large: 'lg',
};

export const AlertArrowPosition = {
  UpLeft: 'up-left',
  UpRight: 'up-right',
  UpCenter: 'up-center',
  DownLeft: 'down-left',
  DownRight: 'down-right',
  DownCenter: 'down-center',
};

export default class Alert extends Component {
  static propTypes = {
    type: Types.string,
    children: Types.node.isRequired,
    size: Types.oneOfType(Object.values(AlertSize)),
    dismissible: Types.bool,
    arrow: Types.oneOfType(Object.values(AlertArrowPosition)),
  };

  static defaultProps = {
    type: AlertType.Info,
    size: AlertSize.Large,
    dismissible: false,
    arrow: null,
  };

  state = {
    dismissed: false,
  };

  dismiss() {
    this.setState({ dismissed: true });
  }

  render() {
    const { dismissed } = this.state;

    const { type, arrow, size, children, dismissible } = this.props;

    const alertConfigClasses = dismissed
      ? null
      : {
          'alert-success': type === 'success',
          'alert-info': type === 'info',
          'alert-warning': type === 'warning',
          'alert-danger': type === 'error',
          small: size === AlertSize.Small,
          'p-x-2': size === AlertSize.Small,
          'p-y-1': size === AlertSize.Small,
        };

    function arrowClasses() {
      if (arrow) {
        const classes = ['arrow'];

        switch (arrow) {
          case AlertArrowPosition.DownCenter:
            return classes.concat('arrow-bottom', 'arrow-center');
          case AlertArrowPosition.DownLeft:
            return classes.concat('arrow-bottom', 'arrow-left');
          case AlertArrowPosition.DownRight:
            return classes.concat('arrow-bottom', 'arrow-right');
          case AlertArrowPosition.UpCenter:
            return classes.concat('arrow-center');
          case AlertArrowPosition.UpRight:
            return classes.concat('arrow-right');
          case AlertArrowPosition.UpLeft:
          default:
            return classes;
        }
      }
      return null;
    }

    return dismissed ? null : (
      <div
        role="alert"
        className={classNames('alert', 'alert-detach', alertConfigClasses, arrowClasses())}
      >
        {dismissible && (
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            onClick={() => this.dismiss()}
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
