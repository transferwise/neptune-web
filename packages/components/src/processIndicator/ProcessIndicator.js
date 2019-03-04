import React, { Component } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

export const processIndicatorSizes = ['xs', 'sm', 'xl'];
export const processIndicatorStatuses = ['processing', 'failed', 'succeeded', 'hidden'];
const radius = { xs: 11, sm: 22, xl: 61 };
const ANIMATION_DURATION_IN_MS = 1500;

class ProcessIndicator extends Component {
  static propTypes = {
    status: Types.oneOf(processIndicatorStatuses).isRequired,
    size: Types.oneOf(processIndicatorSizes).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      status: 'processing',
      size: 'sm',
    };
  }

  /**
   * Create interval for animation duration (1500ms)
   * Update state only at the end of every interval
   * (end of animation loop) if props changed before end of animation
   */
  componentDidMount() {
    this.interval = setInterval(() => {
      const statusFromState = this.state.status;
      const sizeFromState = this.state.size;

      const statusFromProps = this.props.status;
      const sizeFromProps = this.props.size;

      if (statusFromState !== statusFromProps || sizeFromState !== sizeFromProps) {
        this.setState({ status: statusFromProps, size: sizeFromProps });
      }
    }, ANIMATION_DURATION_IN_MS);
  }

  /**
   * Only trigger render if comopnent's state got
   * updated from interval callback
   */
  shouldComponentUpdate(nextProps, nextState) {
    const isSameStatus = nextProps.status === nextState.status;
    const isSameSize = nextProps.size === nextState.size;

    return isSameStatus && isSameSize;
  }

  // Clear interval before destroying component
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { size, status } = this.state;
    const classes = classNames(`process process-${size}`, {
      [`process-danger`]: status === 'failed',
      [`process-stopped`]: status === 'hidden',
      [`process-success`]: status === 'succeeded',
    });

    return (
      <span className={classes}>
        <span className="process-icon-container">
          <span className="process-icon-horizontal" />
          <span className="process-icon-vertical" />
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" space="preserve">
          <circle
            className="process-circle"
            cx="50%"
            cy="50%"
            r={radius[this.state.size]}
            fillOpacity="0.0"
          />
        </svg>
      </span>
    );
  }
}

export default ProcessIndicator;
