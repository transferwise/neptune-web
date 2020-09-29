import React, { Component } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import { Cross as CrossIcon } from '@transferwise/icons';
import KEY_CODES from '../common/keyCodes';
import './Modal.css';
import { Size, addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';
import Dimmer from '../dimmer';

const TRANSITION_DURATION_IN_MILLISECONDS = 150;

class Modal extends Component {
  static Size = Size;

  onEscape = (event) => {
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
    if (this.props.open) {
      removeNoScrollBodyClass();
    }
    document.removeEventListener('keydown', this.onEscape);
  }

  handleOnClick = (event) => {
    const { onClose, closeOnClick } = this.props;
    // Prevents the onclick to be fired by children.
    if (event.target === event.currentTarget && onClose && closeOnClick) {
      onClose(event);
    }
  };

  handleOnEnter = () => {
    addNoScrollBodyClass();
  };

  handleOnClose = () => {
    removeNoScrollBodyClass();
  };

  checkSpecialClasses = (classToCheck) => {
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
          onEnter={this.handleOnEnter}
          onExited={this.handleOnClose}
          classNames={{ enterDone: 'in' }}
          timeout={TRANSITION_DURATION_IN_MILLISECONDS}
          unmountOnExit
        >
          <div
            className={`tw-modal fade ${className}`}
            tabIndex="-1"
            role="presentation"
            ref={(dialog) => {
              this.modalDialog = dialog;
            }}
            onKeyDown={this.onEscape}
            onClick={this.handleOnClick}
            {...otherProps}
          >
            <div
              className={classNames('tw-modal-dialog', {
                [`tw-modal-${this.props.size}`]: this.props.size,
              })}
              aria-modal
              role="dialog"
            >
              <div
                className={classNames('tw-modal-content', {
                  'tw-modal-compact': isCompact,
                  'tw-modal-no-title': !title,
                })}
              >
                <div
                  className={classNames('tw-modal-header', {
                    'modal--withoutborder': !title || noDivider,
                  })}
                >
                  <h4 className="tw-modal-title">{title}</h4>
                  <button type="button" onClick={onClose} className="close" aria-label="close">
                    <CrossIcon size={24} />
                  </button>
                </div>
                <div className="tw-modal-body">{body}</div>
                {footer && (
                  <div
                    className={classNames('tw-modal-footer', {
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

Modal.propTypes = {
  title: Types.node,
  body: Types.node.isRequired,
  footer: Types.node,
  size: Types.oneOf([
    Modal.Size.SMALL,
    Modal.Size.MEDIUM,
    Modal.Size.LARGE,
    Modal.Size.EXTRA_LARGE,
  ]),
  onClose: Types.func.isRequired,
  className: Types.string,
  open: Types.bool.isRequired,
  closeOnClick: Types.bool,
};

Modal.defaultProps = {
  title: null,
  footer: null,
  size: Modal.Size.MEDIUM,
  className: '',
  closeOnClick: true,
};

export default Modal;
