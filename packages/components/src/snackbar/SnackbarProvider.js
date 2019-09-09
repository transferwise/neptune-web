import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SnackbarPortal from './Snackbar';

export const SnackbarContext = React.createContext();
export const SnackbarConsumer = SnackbarContext.Consumer;

class SnackbarProvider extends Component {
  state = {
    text: '',
    timestamp: 0,
  };

  create = ({ text, action }) => {
    this.setState({ text, timestamp: Date.now(), action });
  };

  render() {
    const { text, timestamp, action } = this.state;

    return (
      <SnackbarContext.Provider
        value={{
          createSnackbar: this.create,
        }}
      >
        <SnackbarPortal
          text={text}
          timestamp={timestamp}
          timeout={this.props.timeout}
          action={action}
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
