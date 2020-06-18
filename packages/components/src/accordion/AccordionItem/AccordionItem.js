import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import Chevron from '../../chevron';

const AccordionItem = ({ id, title, content, onClick, isOpen, index }) => (
  <div id={id} className={classNames('tw-accordion-item decision p-a-0', { closed: !isOpen })}>
    <label onClick={() => onClick(index)} className="tw-accordion-item" htmlFor="accordion-chevron">
      <div className="media p-y-3" id="accordion-chevron">
        <div className="media-body">{typeof title === 'string' ? <h5>{title}</h5> : title}</div>
        <div className="media-right media-middle">
          <Chevron orientation={isOpen ? Chevron.Orientation.TOP : Chevron.Orientation.BOTTOM} />
        </div>
      </div>
    </label>
    <div className="p-b-3 accordion-content">{content}</div>
  </div>
);

AccordionItem.propTypes = {
  id: Types.string,
  title: Types.node.isRequired,
  isOpen: Types.bool.isRequired,
  content: Types.node.isRequired,
  onClick: Types.func.isRequired,
  index: Types.number.isRequired,
};

AccordionItem.defaultProps = {
  id: null,
};

export default AccordionItem;
