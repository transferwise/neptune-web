import React, { PureComponent } from 'react';
import Types from 'prop-types';
import AccordionItem from './AccordionItem';

import './Accordion.css';

/* eslint-disable react/no-array-index-key */
class Accordion extends PureComponent {
  static propTypes = {
    items: Types.arrayOf(
      Types.shape({
        title: Types.node.isRequired,
        content: Types.node.isRequired,
      }),
    ).isRequired,
    indexOpen: Types.number,
  };

  static defaultProps = {
    indexOpen: -1,
  };

  state = {
    indexOpen: this.props.indexOpen,
  };

  handleOnClick = (index) => {
    this.setState((prevState) => {
      return { indexOpen: prevState.indexOpen === index ? -1 : index };
    });
  };

  render() {
    return this.props.items.map((item, index) => (
      <AccordionItem
        key={index}
        index={index}
        isOpen={index === this.state.indexOpen}
        onClick={this.handleOnClick}
        {...item}
      />
    ));
  }
}

export default Accordion;
