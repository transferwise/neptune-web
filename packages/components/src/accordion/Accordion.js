import React, { useState } from 'react';

import Types from 'prop-types';
import AccordionItem from './AccordionItem';
import './Accordion.css';

const Accordion = ({ items, onClick, indexOpen }) => {
  const [itemsOpen, setItemsOpen] = useState(() => items.map((val, index) => index === indexOpen));
  const handleOnClick = (index) => {
    if (onClick) {
      onClick(index);
    }
    const newItems = [...itemsOpen];
    newItems[index] = !itemsOpen[index];
    setItemsOpen(newItems);
  };

  return items.map((item, index) => (
    <AccordionItem
      key={item.id || index}
      onClick={() => handleOnClick(index)}
      open={itemsOpen[index]}
      {...item}
    />
  ));
};

Accordion.propTypes = {
  indexOpen: Types.number,
  items: Types.arrayOf(
    Types.shape({
      id: Types.string,
      title: Types.node.isRequired,
      content: Types.node.isRequired,
      icon: Types.node,
    }),
  ).isRequired,
  onClick: Types.func,
};

Accordion.defaultProps = {
  indexOpen: -1,
  onClick: null,
};

export default Accordion;
