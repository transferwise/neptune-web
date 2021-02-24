import React, { Component } from 'react';
import Types from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import withNextPortal from '../withNextPortal/withNextPortal';

import { Theme } from '../common';

import './Snackbar.css';

export const CSS_TRANSITION_DURATION = 400;

export class Snackbar extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      text: '',
    };
  }

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
    const { action, text, theme, timestamp } = this.props;

    if (!prevProps.text) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ visible: true, action, text, theme }, () => {
        this.setLeaveTimeout();
      });
    } else if (prevProps.timestamp !== timestamp) {
      clearTimeout(this.timeout);

      if (this.state.visible) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ visible: false }, () => {
          this.transitionTimeout = setTimeout(() => {
            this.setState({ visible: true, action, text, theme });
            this.setLeaveTimeout();
          }, CSS_TRANSITION_DURATION);
        });
      } else {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ visible: true, action, text, theme });
        this.setLeaveTimeout();
      }
    }
  }

  render() {
    const { action, text, theme, visible } = this.state;
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
          <span className={`snackbar__text snackbar__text--${theme}`}>
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
  action: Types.shape({
    label: Types.string.isRequired,
    onClick: Types.func.isRequired,
  }),
  text: Types.node.isRequired,
  theme: Types.oneOf([Theme.LIGHT, Theme.DARK]),
  timeout: Types.number.isRequired,
  timestamp: Types.number.isRequired,
};

Snackbar.defaultProps = {
  action: null,
  theme: Theme.LIGHT,
};

export default withNextPortal(Snackbar);
