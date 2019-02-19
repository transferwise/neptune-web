import React from "react";
import PropTypes from "prop-types";
import App from ".";

const RootComponent = ({ initialState }) => <App initialState={initialState} />;

RootComponent.propTypes = {
  initialState: PropTypes.shape({}).isRequired
};

export default RootComponent;
