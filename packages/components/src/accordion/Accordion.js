import React from 'react';
import Types from 'prop-types';
import AccordionItem from './AccordionItem';

import './Accordion.css';

const Accordion = ({ items, onClick, indexOpen }) => {
  const handleOnClick = (index) => {
    if (onClick) {
      onClick(index);
    }
  };

  return (
    <>
      {items.map((item, index) => (
        <AccordionItem
          id={item.id}
          key={item.id || index}
          onClick={() => handleOnClick(index)}
          isInitiallyOpen={indexOpen === index}
          {...item}
        />
      ))}
    </>
  );
};

Accordion.propTypes = {
  items: Types.arrayOf(
    Types.shape({
      id: Types.string,
      title: Types.node.isRequired,
      content: Types.node.isRequired,
      icon: Types.node,
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
