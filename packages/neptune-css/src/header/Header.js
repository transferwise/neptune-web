import React from "react";
import Types from "prop-types";

import "./Header.less";

const Header = ({locale}) => (<header className="navbar navbar-inverse navbar-static-top bg-primary subnav" id="top" role="banner">
  <div className="container">
    <div className="navbar-header pull-xs-left">
      <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a href="https://transferwise.com/" className="navbar-brand hidden-md hidden-sm hidden-xs">TransferWise</a>
      <a href="https://transferwise.com/" className="logo-text logo-text-inverse visible-xs-block visible-sm-block" title="TransferWise"></a>
      <a href="https://transferwise.com/" className="flag flag-info visible-md-block" title="TransferWise"></a>
    </div>
    <nav id="navbar" className="collapse navbar-collapse navbar-collapse-with-panel">
      <a className="cover collapsed" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false"></a>
      <div className="navbar-collapse-panel orderable-xs orderable-sm">
        <ul className="nav navbar-nav subnav-menu">
          <li className="active">
            <a className="navbar-title-link" href="">
              <span>Subnavigation</span>

            </a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown" tabindex="-1">
            <button class="dropdown-toggle">
              <span class="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2" aria-hidden="true" role="presentation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M9 23a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-5a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM18.89 6.18L17 1.38a.53.53 0 0 0-.27-.28.5.5 0 0 0-.38 0L11.5 3l.38.93 3.68-1.49-5.1 12 .92.39 5.1-12L18 6.55z"></path>
                </svg>
              </span>
              <span class="tw-public-navigation-item-content__text text-ellipsis">Send money</span>
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/">Send money</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com#chart">Get the real exchange rate</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com#b-transfer-map-light">See our coverage</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/pricing">Pricing</a>
              </li>
            </ul>
          </li>
          <li class="dropdown" tabindex="-1">
            <button class="dropdown-toggle">
              <span class="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2" aria-hidden="true" role="presentation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M9 23a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-5a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM11.79 13.75l5.1-12-.89-.38-5.1 12-1.51-3.69-.93.38 1.94 4.8a.51.51 0 0 0 .46.31.41.41 0 0 0 .19 0l4.8-1.94-.38-.92z"></path>
                </svg>
              </span>
              <span class="tw-public-navigation-item-content__text text-ellipsis">Receive money</span>
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/borderless/">
                  <span>Get a borderless account</span>
                  <span class="badge badge-success m-l-1">New</span>
                </a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/borderless#get-paid">Get international bank details</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/borderless#borderless-explainer-video">How it works</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/borderless/pricing">Pricing</a>
              </li>
            </ul>
          </li>
          <li class="dropdown" tabindex="-1">
            <button class="dropdown-toggle">
              <span class="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2" aria-hidden="true" role="presentation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3 15h17v1H3zM8 13H3V9h5zm-4-1h3v-2H4zM20 10a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-3a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"></path>
                  <path d="M24 20H0V4h24v9.94l-.33.12a1 1 0 0 0 0 1.88l.33.12zM1 19h22v-2.27a2 2 0 0 1 0-3.46V5H1z"></path>
                </svg>
              </span>
              <span class="tw-public-navigation-item-content__text text-ellipsis">Debit card</span>
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/borderless/">
                  <span>Get a borderless account</span>
                  <span class="badge badge-success m-l-1">New</span>
                </a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/borderless#card">Get a TransferWise Mastercard®</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/borderless#price-comp">Compare TransferWise to banks</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/borderless#borderless-explainer-video">How it works</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/borderless/pricing">Pricing</a>
              </li>
            </ul>
          </li>
          <li class="dropdown" tabindex="-1">
            <button class="dropdown-toggle">
              <span class="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2" aria-hidden="true" role="presentation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M24 11V5h-7.55a4.48 4.48 0 0 0-8.9 0H0v16h24v-9.87V11zM12 2a3.5 3.5 0 0 1 3.45 3h-6.9A3.5 3.5 0 0 1 12 2zm11 4v5.06A5 5 0 0 1 18 16H6a5 5 0 0 1-5-5V6zm0 14H1v-5.7a6.21 6.21 0 0 0 .77.94A6 6 0 0 0 6 17h12a6.06 6.06 0 0 0 5-2.68z"></path>
                  <circle cx="12" cy="14" r="1"></circle>
                </svg>
              </span>
              <span class="tw-public-navigation-item-content__text text-ellipsis">Business</span>
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/business/">
                  <span>TransferWise for Business</span>
                  <span class="badge badge-success m-l-1">New</span>
                </a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/business/freelancer">Freelancers</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/business/ecommerce">E-commerce</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/business/payouts">Enterprise</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/business/pricing-and-coverage">Business pricing</a>
              </li>
            </ul>
          </li>
          <li class="dropdown" tabindex="-1">
            <button class="dropdown-toggle">
              <span class="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2" aria-hidden="true" role="presentation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-21a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
                  <path d="M11.24 13.9a1.69 1.69 0 0 1 .14-.68 2.83 2.83 0 0 1 .36-.59 3.85 3.85 0 0 1 .51-.58c.19-.19.39-.4.59-.63l.5-.55a3.71 3.71 0 0 0 .44-.54 3.54 3.54 0 0 0 .3-.62A2.4 2.4 0 0 0 14 8.05a1.78 1.78 0 0 0-.49-.66A2.07 2.07 0 0 0 12.8 7a2.91 2.91 0 0 0-2.2.17 2.7 2.7 0 0 0-1.06.9l-.7-.56a3.64 3.64 0 0 1 1.36-1.13A4.12 4.12 0 0 1 12 6a3.88 3.88 0 0 1 1.24.2 3.19 3.19 0 0 1 1 .58 2.8 2.8 0 0 1 .68.93 2.84 2.84 0 0 1 .26 1.22 3.37 3.37 0 0 1-.13.93 3.18 3.18 0 0 1-.35.77 4 4 0 0 1-.5.67 8.21 8.21 0 0 1-.58.6c-.18.19-.36.36-.54.53a3.89 3.89 0 0 0-.48.52 2.87 2.87 0 0 0-.36.57 1.44 1.44 0 0 0-.14.65v.61h-.8zm.46 4.1a.78.78 0 0 1-.54-.2.65.65 0 0 1-.22-.51.63.63 0 0 1 .22-.5.75.75 0 0 1 .54-.21.77.77 0 0 1 .55.21.67.67 0 0 1 .22.5.69.69 0 0 1-.22.51.81.81 0 0 1-.55.2z"></path>
                </svg>
              </span>
              <span class="tw-public-navigation-item-content__text text-ellipsis">About</span>
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/help">Help</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/pricing">Pricing</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/mid-market-rate">Mid-market rate</a>
              </li>
              <li>
                <a class="text-ellipsis" href="https://transferwise.com/gb/about/our-story">Our story</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://transferwise.com/login">
              <span class="tw-icon tw-public-navigation-item-content__icon hidden-md hidden-lg hidden-xl m-r-2" aria-hidden="true" role="presentation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22 24H8v-3.57h1V23h12V1H9v2.57H8V0h14v24z"></path>
                  <path d="M13.03 5.99l-.71.71 4.8 4.8H0v1h17.12l-4.8 4.8.71.71L19.04 12l-6.01-6.01z"></path>
                </svg>
              </span>
              <span class="tw-public-navigation-item-content__text text-ellipsis">Log in</span>
            </a>
          </li>
        </ul>

      </div>
      <a role="button" className="navbar-toggle close" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="true">×</a>
    </nav>
  </div>
</header>);

export default Header;
