import React from "react";
import Types from "prop-types";

import "./Header.less";

const Header = ({locale}) => (
  <header class="navbar navbar-inverse navbar-static-top bg-primary subnav" id="top" role="banner">
  <div class="container">
    <div class="navbar-header pull-xs-left">
      <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="https://transferwise.com/" class="navbar-brand hidden-md hidden-sm hidden-xs">TransferWise</a>
      <a href="https://transferwise.com/" class="logo-text logo-text-inverse visible-xs-block visible-sm-block" title="TransferWise"></a>
      <a href="https://transferwise.com/" class="flag flag-info visible-md-block" title="TransferWise"></a>
    </div>
    <nav id="navbar" class="collapse navbar-collapse navbar-collapse-with-panel">
      <a class="cover collapsed" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false"></a>
      <div class="navbar-collapse-panel orderable-xs orderable-sm">
        <ul class="nav navbar-nav subnav-menu">
          <li class="active">
            <a class="navbar-title-link" href="">
              <span>Thalassa</span>
            </a>
          </li>
          <li><a href="#skew">Skew</a></li>
          <li><a href="#flex">Flex</a></li>
          <li><a href="#grid">Grid</a></li>
          <li><a href="#wrap">Wrapping</a></li>
          <li><a href="#background">Background</a></li>
          <li><a href="">...</a></li>
          <li><a href="#spacing">Spacing</a></li>
          <li><a href="">Navbar</a></li>
          <li><a href="">Typography</a></li>
        </ul>
      </div>
      <a role="button" class="navbar-toggle close" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="true">×</a>
    </nav>
  </div>
</header>);

export default Header;
