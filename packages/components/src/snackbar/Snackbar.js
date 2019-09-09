import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import CSSTransition from 'react-transition-group/CSSTransition';

export const CSS_TRANSITION_DURATION = 400;

export class Snackbar extends Component {
  state = {
    visible: false,
    text: '',
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearTimeout(this.transitionTimeout);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextProps.text) {
      return false;
    }
    if (
      nextProps.timestamp === this.props.timestamp &&
      nextState.visible === this.state.visible &&
      nextState.text === this.state.text
    ) {
      return false;
    }

    return true;
  }

  setLeaveTimeout = () => {
    const { timeout } = this.props;

    this.timeout = setTimeout(() => {
      this.setState({ visible: false });
    }, timeout);
  };

  componentDidUpdate(prevProps) {
    const { text, timestamp, action } = this.props;

    if (!prevProps.text) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ visible: true, text, action }, () => {
        this.setLeaveTimeout();
      });
    } else if (prevProps.timestamp !== timestamp) {
      clearTimeout(this.timeout);

      if (this.state.visible) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ visible: false }, () => {
          this.transitionTimeout = setTimeout(() => {
            this.setState({ text, action, visible: true });
            this.setLeaveTimeout();
          }, CSS_TRANSITION_DURATION);
        });
      } else {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ text, action, visible: true });
        this.setLeaveTimeout();
      }
    }
  }

  render() {
    const { text, visible, action } = this.state;
    const { timeout } = this.props;

    return (
      <div className="snackbar">
        <CSSTransition
          in={visible}
          classNames="snackbar__text-container"
          timeout={{
            appear: 0,
            enter: timeout,
            exit: CSS_TRANSITION_DURATION,
          }}
          unmountOnExit
        >
          <span className="snackbar__text">
            {text}
            {action ? (
              <button type="button" className="snackbar__text__action" onClick={action.onClick}>
                {action.label}
              </button>
            ) : null}
          </span>
        </CSSTransition>
      </div>
    );
  }
}

Snackbar.propTypes = {
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
  text: PropTypes.string.isRequired,
  timeout: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
};
Snackbar.defaultProps = {
  action: null,
};

export default props =>
  typeof document !== 'undefined' ? createPortal(<Snackbar {...props} />, document.body) : null;
