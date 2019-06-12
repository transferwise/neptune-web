import React from 'react';
import Types from 'prop-types';

import AccordionItem from './AccordionItem';

import './Accordion.less';

/* eslint-disable react/no-array-index-key */
const Accordion = ({ items }) =>
  items.map((item, index) => <AccordionItem key={index} {...item} />);
/* eslint-enable react/no-array-index-key */

Accordion.propTypes = {
  items: Types.arrayOf(
    Types.shape({
      title: Types.node.isRequired,
      content: Types.node.isRequired,
    }),
  ).isRequired,
};

export default Accordion;
