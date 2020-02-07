import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import Chevron from '../../chevron';

const AccordionItem = ({ title, content, onClick, isOpen, index }) => (
  <label
    onClick={() => onClick(index)}
    className={classNames('tw-accordion-item decision p-a-0', { closed: !isOpen })}
    htmlFor="accordion-chevron"
  >
    <div className="media p-y-3" id="accordion-chevron">
      <div className="media-body">{typeof title === 'string' ? <h5>{title}</h5> : title}</div>
      <div className="media-right media-middle">
        <Chevron
          size={Chevron.Size.SMALL}
          orientation={Chevron.Orientation.BOTTOM}
          flip={isOpen}
          animate
        />
      </div>
    </div>
    <div className="p-b-3 accordion-content">{content}</div>
  </label>
);

AccordionItem.propTypes = {
  title: Types.node.isRequired,
  isOpen: Types.bool.isRequired,
  content: Types.node.isRequired,
  onClick: Types.func.isRequired,
  index: Types.number.isRequired,
};

export default AccordionItem;
