import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { isString } from '@transferwise/neptune-validation';
import Chevron from '../../chevron';

const AccordionItem = ({ id, title, content, onClick, isOpen, index }) => (
  <div id={id} className={classNames('tw-accordion-item decision p-a-0', { closed: !isOpen })}>
    <button
      type="button"
      aria-expanded={isOpen}
      onClick={() => onClick(index)}
      className="tw-accordion-item btn btn-link p-l-0 text-no-decoration"
    >
      <div className="media p-y-2">
        <div className="media-body text-xs-left">
          {isString(title) ? <span className="h5">{title}</span> : title}
        </div>
        <div className="media-right media-middle">
          <Chevron orientation={isOpen ? Chevron.Orientation.TOP : Chevron.Orientation.BOTTOM} />
        </div>
      </div>
    </button>
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
