import React, { Component } from 'react';
import classNames from 'classnames';

import { dialogPropTypes, dialogDefaultProps } from '../props';
import { addModalOpenBodyClass, removeModalOpenBodyClass } from './DOMOperations';
import './ModalDialog.less';

export default class ModalDialog extends Component {
  static propTypes = dialogPropTypes;
  static defaultProps = dialogDefaultProps;

  componentDidMount() {
    addModalOpenBodyClass();
    if (this.modalDialog) {
      this.modalDialog.focus();
      document.addEventListener('keydown', this.onEscape);
    }
  }

  componentWillUnmount() {
    removeModalOpenBodyClass();
    document.removeEventListener('keydown', this.onEscape);
  }

  onEscape = event => {
    if (event.key === 'Escape' && this.props.onClose) {
      this.props.onClose(event);
    }
  };

  render() {
    const { title, body, footer, onClose, role, className, ...otherProps } = this.props;

    const dialogBaseClass = 'modal-dialog';
    const classes = classNames(dialogBaseClass, {
      [`modal-${this.props.size}`]: this.props.size,
    });

    return (
      <div
        className={`modal fade ${className}`}
        style={{ display: 'block' }}
        tabIndex="-1"
        role={role}
        aria-modal
        ref={dialog => {
          this.modalDialog = dialog;
        }}
        {...otherProps}
      >
        <div className={classes}>
          <div className="modal-content">
            <div className={classNames('modal-header', { 'no-divider': !title })}>
              <button type="button" onClick={onClose} className="close" aria-label="close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">{title}</h4>
            </div>
            <div className={classNames('modal-body', { 'modal-body--no-title': !title })}>
              {body}
            </div>
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      </div>
    );
  }
}
