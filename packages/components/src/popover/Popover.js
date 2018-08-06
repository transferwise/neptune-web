import React, { Component, Fragment, cloneElement } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import Placement, { PlacementValues } from './Placement';
import { getPlacement, getPopoverPosition } from './positioning';

export default class Popover extends Component {
  static Placement = Placement;

  static propTypes = {
    children: Types.oneOfType([Types.element, Types.string]).isRequired,
    title: Types.oneOfType([Types.element, Types.string]),
    content: Types.oneOfType([Types.element, Types.string]).isRequired,
    preferredPlacement: Types.oneOf(PlacementValues),
  };

  static defaultProps = {
    title: null,
    preferredPlacement: Placement.RIGHT,
  };

  state = {
    isOpen: false,
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopoverOnOutsideClick, true);
  }

  closePopoverOnOutsideClick = event => {
    const popoverClicked = this.popoverElement.contains(event.target);

    if (!popoverClicked) {
      this.close();
    }
  };

  open = () => {
    this.setState({ isOpen: true });
    document.addEventListener('click', this.closePopoverOnOutsideClick, true);
  };

  close = () => {
    this.setState({ isOpen: false });
    document.removeEventListener('click', this.closePopoverOnOutsideClick, true);
  };

  createTrigger = () => {
    const { children: child } = this.props;

    return cloneElement(typeof child === 'string' ? <span>{child}</span> : child, {
      'data-toggle': 'popover',
      role: 'button',
      tabIndex: 0,
      onClick: this.open,
    });
  };

  render() {
    const { title, content, preferredPlacement } = this.props;
    const { isOpen } = this.state;

    const trigger = this.createTrigger();

    const placement = getPlacement(this.popoverElement, preferredPlacement);
    const popoverClassName = classNames('popover animate in', { 'scale-down': !isOpen }, placement);
    const { top, left } = getPopoverPosition(this.popoverElement, placement);

    return (
      <Fragment>
        {trigger}
        <div
          className={popoverClassName}
          ref={element => {
            this.popoverElement = element;
          }}
          style={{ top, left }}
        >
          {title && <h3 className="popover-title">{title}</h3>}
          <p className="popover-content m-b-0">{content}</p>
        </div>
      </Fragment>
    );
  }
}
