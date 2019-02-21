import React, {StrictMode, Component} from 'react';
import "./App.less";
import Core from "./core";
import Header from "./header";
import ComponentList from "./componentList";
import {PublicNavigation, Footer} from "@transferwise/public-navigation";
import Grid from "./grid";
import Wrap from "./wrap";
import Skew from "./skew";
import Flex from "./flex";
import Background from "./background";
import Badge from "./badge";
import Table from "./table";
import Spacing from "./spacing";

class App extends Component {
  render() {
    return (
      <StrictMode>
        <Header/>
        <div className="doc">
          <a href="#top" className="doc-go-top">Go to top</a>
          <header className="wrap--content section">
          <h1 className="display-4 colored-dot">Thalassa</h1>
          <p className="lead">CSS library</p>
          <span className="badge badge-success">TL</span> Thalassa component
          <span className="badge badge-primary m-l-2">BT</span> Bootstrap component
          <span className="badge m-l-2">WIP</span> Work in progress
          </header>
          <ComponentList/>
          <Core/>
          <Skew/>
          <Flex/>
          <Grid/>
          <Wrap/>
          <Background/>
          <Badge/>
          <Table/>
          <Spacing/>
        </div>
        <Footer inverse={true}/>
    </StrictMode>);
  }
}

export default App;
