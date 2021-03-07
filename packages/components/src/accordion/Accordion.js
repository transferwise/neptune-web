import React, { PureComponent } from 'react';
import Types from 'prop-types';
import AccordionItem from './AccordionItem';

import './Accordion.css';

/* eslint-disable react/no-array-index-key */
class Accordion extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      indexOpen: props.indexOpen,
    };
  }

  /* eslint-disable react/no-did-update-set-state */
  componentDidUpdate(prevProps) {
    if (prevProps.indexOpen !== this.props.indexOpen) {
      this.setState({ indexOpen: this.props.indexOpen });
    }
  }

  handleOnClick = (index) => {
    this.setState((prevState) => {
      return { indexOpen: prevState.indexOpen === index ? -1 : index };
    });
    if (this.props.onClick) {
      this.props.onClick(index);
    }
  };

  render() {
    return (
      <>
        {this.props.items.map((item, index) => (
          <AccordionItem
            id={item.id}
            key={item.id || index}
            index={index}
            isOpen={index === this.state.indexOpen}
            onClick={this.handleOnClick}
            {...item}
          />
        ))}
      </>
    );
  }
}

Accordion.propTypes = {
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

Accordion.defaultProps = {
  onClick: null,
  indexOpen: -1,
};
export default Accordion;
