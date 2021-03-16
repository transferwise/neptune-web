import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { isString } from '@transferwise/neptune-validation';
import Chevron from '../../chevron';

const AccordionItem = ({ id, title, content, onClick, isOpen, icon }) => {
  return (
    <div
      id={id}
      className={classNames('tw-accordion-item decision p-a-0 ', {
        closed: !isOpen,
        'p-b-3': isOpen,
      })}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onClick}
        className={classNames('tw-accordion-item btn btn-link p-a-0 text-no-decoration p-t-3', {
          'p-b-3 ': !isOpen,
          'p-b-2': isOpen,
        })}
      >
        <div className="media">
          {icon && <div className="media-left hidden-xs hidden-sm p-r-2">{icon}</div>}
          <div className="media-body text-xs-left">
            {isString(title) ? <span className="h5">{title}</span> : title}
          </div>
          <div className="media-right d-flex align-items-center">
            <Chevron orientation={isOpen ? Chevron.Orientation.TOP : Chevron.Orientation.BOTTOM} />
          </div>
        </div>
      </button>
      <div className="accordion-content media">
        <div className={classNames('media-body m-r-5', { 'm-l-5 ': icon })}>{content}</div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  content: Types.node.isRequired,
  icon: Types.node,
  id: Types.string,
  isOpen: Types.bool.isRequired,
  onClick: Types.func.isRequired,
  title: Types.node.isRequired,
};

AccordionItem.defaultProps = {
  icon: null,
  id: null,
};

export default AccordionItem;
