import React, { Component } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import Close from '@transferwise/icons/react/close';
import KEY_CODES from '../common/keyCodes';
import './Modal.css';

import { Sizes } from '../common';
import Dimmer from '../dimmer';

const TRANSITION_DURATION_IN_MILLISECONDS = 150;

class Modal extends Component {
  static propTypes = {
    title: Types.node,
    body: Types.node.isRequired,
    footer: Types.node,
    size: Types.oneOf(Object.values(Sizes)),
    onClose: Types.func.isRequired,
    className: Types.string,
    open: Types.bool.isRequired,
    closeOnClick: Types.bool,
  };

  static defaultProps = {
    title: null,
    footer: null,
    size: 'md',
    className: '',
    closeOnClick: true,
  };

  onEscape = event => {
    const { onClose } = this.props;
    if (event && (event.keyCode === KEY_CODES.ESCAPE || event.key === 'Escape') && onClose) {
      onClose(event);
    }
  };

  componentDidMount() {
    if (this.modalDialog) {
      this.modalDialog.focus();
    }
    document.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape);
  }

  handleOnClick = event => {
    const { onClose, closeOnClick } = this.props;
    // Prevents the onclick to be fired by children.
    if (event.target === event.currentTarget && onClose && closeOnClick) {
      onClose(event);
    }
  };

  checkSpecialClasses = classToCheck => {
    const { className } = this.props;
    const classNameArray = className.split(' ');
    return classNameArray.indexOf(classToCheck) !== -1;
  };

  render() {
    const {
      title,
      body,
      footer,
      onClose,
      className,
      open,
      size,
      closeOnClick,
      ...otherProps
    } = this.props;

    // These should be replaced with props in breaking change.
    const isCompact = this.checkSpecialClasses('compact');
    const noDivider = this.checkSpecialClasses('no-divider');

    return (
      <Dimmer open={open}>
        <CSSTransition
          appear
          in={open}
          classNames={{ enterDone: 'in' }}
          timeout={TRANSITION_DURATION_IN_MILLISECONDS}
          unmountOnExit
        >
          <div
            className={`modal-np fade ${className}`}
            tabIndex="-1"
            role="button"
            ref={dialog => {
              this.modalDialog = dialog;
            }}
            onKeyDown={this.onEscape}
            onClick={this.handleOnClick}
            {...otherProps}
          >
            <div
              className={classNames('modal-np-dialog', {
                [`modal-np-${this.props.size}`]: this.props.size,
              })}
              aria-modal
              role="dialog"
            >
              <div
                className={classNames('modal-np-content', {
                  'modal-np-compact': isCompact,
                  'modal-np-no-title': !title,
                })}
              >
                <div
                  className={classNames('modal-np-header', {
                    'modal--withoutborder': !title || noDivider,
                  })}
                >
                  <h4 className="modal-np-title">{title}</h4>
                  <button type="button" onClick={onClose} className="close" aria-label="close">
                    <Close />
                  </button>
                </div>
                <div className="modal-np-body">{body}</div>
                {footer && (
                  <div
                    className={classNames('modal-np-footer', {
                      'modal--withoutborder': noDivider,
                    })}
                  >
                    {footer}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CSSTransition>
      </Dimmer>
    );
  }
}

export default Modal;
