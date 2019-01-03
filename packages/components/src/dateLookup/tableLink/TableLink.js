import React, { PureComponent, Fragment } from 'react';
import Types from 'prop-types';

class TableLink extends PureComponent {
  static propTypes = {
    item: Types.number.isRequired, // day (1-31), month (0-11) or year (2018 etc)
    type: Types.oneOf(['day', 'month', 'year']).isRequired,
    title: Types.string,
    longTitle: Types.string,
    active: Types.bool.isRequired,
    disabled: Types.bool.isRequired,
    today: Types.bool.isRequired,
    onClick: Types.func.isRequired,
  };

  static defaultProps = {
    title: null,
    longTitle: null,
  };

  onClick = event => {
    event.preventDefault();
    if (!this.props.disabled) {
      this.props.onClick(this.props.item);
    }
  };

  render() {
    const { item, type, title, longTitle, active, disabled, today } = this.props;
    return (
      <Fragment>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <a
          href=""
          onClick={this.onClick}
          title={longTitle}
          className={`tw-date-lookup-${type}-option ${active ? 'active' : ''} ${
            today ? 'today' : ''
          }`}
          disabled={disabled}
          tabIndex="0"
        >
          {title || item}
        </a>
        {/* eslint-enable jsx-a11y/anchor-is-valid */}
      </Fragment>
    );
  }
}

export default TableLink;
