import React, { Component, Fragment } from "react";
import "@babel/polyfill";
import { BrowserRouter as Router } from "react-router-dom";

import App from "../src";

const initialStateKey = "__INITIAL_STATE__";

export default class Docs extends Component {
  constructor(props) {
    super(props);

    const initialState = localStorage.getItem(initialStateKey) || "";

    this.state = {
      initialState
    };
  }

  render() {
    const { initialState } = this.state;

    return (
      <Fragment>
        <Router>
          <App
            initialState={JSON.parse(initialState)}
          />
        </Router>
      </Fragment>
    );
  }
}
