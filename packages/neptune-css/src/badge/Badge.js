import React, {Component} from "react";
import "./Badge.less";

class Badge extends Component {
  render() {
    return (
      <section id="badge" className="wrap--content section">
        <h1 className="colored-dot">Badge <span className="badge">BT</span></h1>
        <p className="lead">7kB minified</p>

      </section>
    );
  }
}

export default Badge;
