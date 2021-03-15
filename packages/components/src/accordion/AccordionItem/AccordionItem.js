import React, { useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { isString } from '@transferwise/neptune-validation';
import Chevron from '../../chevron';

const AccordionItem = ({ id, title, content, onClick, initiallyOpen, icon }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div id={id} className={classNames('tw-accordion-item decision p-a-0', { closed: !isOpen })}>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
          onClick();
        }}
        className="tw-accordion-item btn btn-link p-l-0 text-no-decoration"
      >
        <div className="media p-y-2">
          {icon && <div className="media-left hidden-xs hidden-sm">{icon}</div>}
          <div className="media-body text-xs-left">
            {isString(title) ? <span className="h5">{title}</span> : title}
          </div>
          <div className="media-right media-middle">
            <Chevron orientation={isOpen ? Chevron.Orientation.TOP : Chevron.Orientation.BOTTOM} />
          </div>
        </div>
      </button>
      <div className="p-b-3 accordion-content media">
        {icon && (
          <div className="media-left hidden-xs hidden-sm">
            <div className="p-r-3" />
          </div>
        )}
        <div className="media-body">{content}</div>
        <div className="media-right">
          <div className="p-l-3" />
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  id: Types.string,
  title: Types.node.isRequired,
  content: Types.node.isRequired,
  onClick: Types.func.isRequired,
  initiallyOpen: Types.bool.isRequired,
  icon: Types.node,
};

AccordionItem.defaultProps = {
  id: null,
  icon: null,
};

export default AccordionItem;
