import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SnackbarPortal from './Snackbar';

export const SnackbarContext = React.createContext();
export const SnackbarConsumer = SnackbarContext.Consumer;

class SnackbarProvider extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      timestamp: 0,
    };
  }

  create = ({ action, text, theme }) => {
    this.setState({ action, text, theme, timestamp: Date.now() });
  };

  render() {
    const { action, text, theme, timestamp } = this.state;

    return (
      <SnackbarContext.Provider
        value={{
          createSnackbar: this.create,
        }}
      >
        <SnackbarPortal
          action={action}
          text={text}
          timestamp={timestamp}
          timeout={this.props.timeout}
          theme={theme}
        />
        {this.props.children}
      </SnackbarContext.Provider>
    );
  }
}

SnackbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
  timeout: PropTypes.number,
};

SnackbarProvider.defaultProps = {
  timeout: 4500,
};

export default SnackbarProvider;
