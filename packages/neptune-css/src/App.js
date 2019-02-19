import React, {StrictMode, Component} from 'react';
import "./App.less";
import Header from "./header";
import {PublicNavigation, Footer} from "@transferwise/public-navigation";
import Grid from "./grid";
import Wrap from "./wrap";
import Skew from "./skew";
import Flex from "./flex";
import Background from "./background";
import Spacing from "./spacing";

class App extends Component {
  render() {
    return (
      <StrictMode>
        <Header/>
        <div className="doc">
          <Skew/>
          <Flex/>
          <Grid/>
          <Wrap/>
          <Background/>
          <Spacing/>
        </div>
        <Footer inverse={true}/>
    </StrictMode>);
  }
}

export default App;
