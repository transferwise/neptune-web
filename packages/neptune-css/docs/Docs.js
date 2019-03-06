import React, { StrictMode, Component } from "react";
import "./Docs.less";
import "@transferwise/public-navigation/dist/public-navigation.css";

import "../build/badge.css";
import "../build/componentlist.css";
import "../build/core.css";
import "../build/flex.css";
import "../build/grid.css";
import "../build/skew.css";
import "../build/spacing.css";
import "../build/table.css";
import "../build/wrap.css";
import "../build/header.css";
import "../build/background.css";

import Core from "./coreDocs";
import ComponentList from "./componentListDocs";
import { PublicNavigation, Footer } from "@transferwise/public-navigation";
import Grid from "./gridDocs";
import Wrap from "./wrapDocs";
import Skew from "./skewDocs";
import Flex from "./flexDocs";
import Background from "./backgroundDocs";
import Badge from "./BadgeDocs";
import Table from "./tableDocs";
import Spacing from "./spacingDocs";
import Header from "./HeaderDocs";

export default class Docs extends Component {
  render() {
    return (
      <StrictMode>
        <Header />
        <div className="doc">
          <a href="#top" className="doc-go-top">
            Go to top
          </a>
          <header className="wrap--content section">
            <h1 className="display-4 colored-dot">Thalassa</h1>
            <p className="lead">CSS library</p>
            <span className="badge badge-success">TL</span> Thalassa component
            <span className="badge badge-primary m-l-2">BT</span> Bootstrap
            component
            <span className="badge m-l-2">WIP</span> Work in progress
          </header>
          <ComponentList />
          <Core />
          <Skew />
          <Flex />
          <Grid />
          <Wrap />
          <Background />
          <Badge />
          <Table />
          <Spacing />
        </div>
        <Footer inverse={true} />
      </StrictMode>
    );
  }
}
