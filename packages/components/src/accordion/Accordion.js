import React, { PureComponent } from 'react';
import Types from 'prop-types';
import AccordionItem from './AccordionItem';

import './Accordion.css';

/* eslint-disable react/no-array-index-key */
class Accordion extends PureComponent {
  static propTypes = {
    items: Types.arrayOf(
      Types.shape({
        id: Types.string,
        title: Types.node.isRequired,
        content: Types.node.isRequired,
      }),
    ).isRequired,
    onClick: Types.func,
    indexOpen: Types.number,
  };

  static defaultProps = {
    onClick: null,
    indexOpen: -1,
  };

  state = {
    indexOpen: this.props.indexOpen,
  };

  handleOnClick = (index) => {
    this.setState((prevState) => {
      return { indexOpen: prevState.indexOpen === index ? -1 : index };
    });
    if (this.props.onClick) {
      this.props.onClick(index);
    }
  };

  render() {
    return this.props.items.map((item, index) => (
      <AccordionItem
        id={item.id}
        key={item.id || index}
        index={index}
        isOpen={index === this.state.indexOpen}
        onClick={this.handleOnClick}
        {...item}
      />
    ));
  }
}

export default Accordion;
