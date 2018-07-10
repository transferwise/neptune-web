import React, { Component } from 'react';
import Types from 'prop-types';

import './Tooltip.less';

const Position = {
  TOP: 'top',
  LEFT: 'left',
  RIGHT: 'right',
  BOTTOM: 'bottom',
};

function getTooltipStyle(parent, tooltip, position, offset) {
  switch (position) {
    case Position.TOP:
      return {
        top: `${parent.offsetTop - tooltip.offsetHeight - offset}px`,
        left: `${parent.offsetLeft + parent.offsetWidth / 2 - tooltip.offsetWidth / 2}px`,
      };
    case Position.LEFT:
      return {
        top: `${parent.offsetTop + parent.offsetHeight / 2 - tooltip.offsetHeight / 2}px`,
        left: `${parent.offsetLeft - tooltip.offsetWidth - offset}px`,
      };
    case Position.RIGHT:
      return {
        top: `${parent.offsetTop + parent.offsetHeight / 2 - tooltip.offsetHeight / 2}px`,
        left: `${parent.offsetLeft + parent.offsetWidth + offset}px`,
      };
    case Position.BOTTOM:
      return {
        top: `${parent.offsetTop + tooltip.offsetHeight + offset}px`,
        left: `${parent.offsetLeft + parent.offsetWidth / 2 - tooltip.offsetWidth / 2}px`,
      };
    default:
      return {};
  }
}

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.tooltipId = Math.random()
      .toString(36)
      .substring(7);
  }

  show() {
    this.setState(() => ({ show: true }));
  }

  hide() {
    this.setState(() => ({ show: false }));
  }

  ensureHidden = event => {
    if (!this.state.show) {
      event.stopPropagation();
      this.hide();
    }
  };

  render() {
    const { position, children, label, offset } = this.props;
    const tooltipStyle =
      this.elementReference && this.tooltipReference
        ? getTooltipStyle(this.elementReference, this.tooltipReference, position, offset)
        : {};
    return (
      <span
        onMouseOver={() => this.show()}
        onFocus={() => this.show()}
        onMouseOut={() => this.hide()}
        onBlur={() => this.hide()}
        ref={elementReference => {
          this.elementReference = elementReference;
        }}
        aria-describedby={this.tooltipId}
        className="tooltip-container"
      >
        <div
          onMouseOver={this.ensureHidden}
          onFocus={this.ensureHidden}
          className={`tooltip fade ${position} ${this.state.show ? 'in' : ''}`}
          role="tooltip"
          style={tooltipStyle}
          ref={tooltipReference => {
            this.tooltipReference = tooltipReference;
          }}
          id={this.tooltipId}
        >
          <div className="tooltip-arrow" />
          <div className="tooltip-inner">{label}</div>
        </div>
        {children}
      </span>
    );
  }
}

Tooltip.Position = Position;

Tooltip.propTypes = {
  children: Types.oneOfType([Types.element, Types.arrayOf(Types.element), Types.string]).isRequired,
  position: Types.oneOf(Object.keys(Tooltip.Position).map(key => Tooltip.Position[key])),
  label: Types.oneOfType([Types.element, Types.arrayOf(Types.element), Types.string]).isRequired,
  offset: Types.number,
};

Tooltip.defaultProps = {
  position: Tooltip.Position.TOP,
  offset: 0,
};

export default Tooltip;
