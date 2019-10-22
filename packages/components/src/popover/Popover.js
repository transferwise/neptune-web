import React, { Component, Fragment, cloneElement } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import Placement, { PlacementValues } from './Placement';
import { getPlacement, getPositionRelativeToParent } from './positioning';
import { wrapInDOMElementIfNecessary } from './DOMWrapping';
import KeyCodes from '../common/keyCodes';
import {
  addClickClassToDocumentOnIos,
  removeClickClassFromDocumentOnIos,
} from '../common/domHelpers';

import './Popover.css';

export default class Popover extends Component {
  static Placement = Placement;

  static propTypes = {
    children: Types.oneOfType([Types.element, Types.string]).isRequired,
    title: Types.oneOfType([Types.element, Types.string]),
    content: Types.oneOfType([Types.element, Types.string]).isRequired,
    preferredPlacement: Types.oneOf(PlacementValues),
    classNames: Types.objectOf(Types.string),
  };

  static defaultProps = {
    title: null,
    preferredPlacement: Placement.RIGHT,
    classNames: {},
  };

  state = {
    isOpen: false,
  };

  componentWillUnmount() {
    this.close();
  }

  closePopoverOnOutsideClick = event => {
    const popoverClicked = this.popoverElement.contains(event.target);

    if (!popoverClicked) {
      this.close();
    }
  };

  handleKeyUp = ({ keyCode }) => {
    if (keyCode === KeyCodes.ENTER) {
      this.open();
    }
  };

  open = () => {
    this.setState({ isOpen: true });

    addClickClassToDocumentOnIos();
    document.addEventListener('click', this.closePopoverOnOutsideClick, true);
  };

  close = () => {
    this.setState({ isOpen: false });

    removeClickClassFromDocumentOnIos();
    document.removeEventListener('click', this.closePopoverOnOutsideClick, true);
  };
  createTrigger = () => {
    const { children: child } = this.props;
    const wrappedChild = wrapInDOMElementIfNecessary(child);

    return cloneElement(wrappedChild, {
      'data-toggle': 'popover',
      role: 'button',
      tabIndex: 0,
      onClick: this.open,
      onKeyUp: this.handleKeyUp,
    });
  };

  style = className => this.props.classNames[className] || className;

  render() {
    const { title, content, preferredPlacement } = this.props;
    const { isOpen } = this.state;

    const trigger = this.createTrigger();

    const placement = getPlacement(this.popoverElement, preferredPlacement);
    const popoverClassName = classNames(
      this.style('popover'),
      this.style('animate'),
      this.style('in'),
      { [this.style('scale-down')]: !isOpen },
      this.style(placement),
    );

    const { top, left } = getPositionRelativeToParent(this.popoverElement, placement);

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
          {title && <h3 className={classNames(this.style('popover-title'))}>{title}</h3>}
          <p className={classNames(this.style('popover-content'), this.style('m-b-0'))}>
            {content}
          </p>
        </div>
      </Fragment>
    );
  }
}
