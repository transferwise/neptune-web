import React from 'react';
import Types from 'prop-types';
import requiredIf from 'react-required-if';
import classNames from 'classnames';

import Chevron from '../chevron';
import Option from '../common/Option';
import './Card.css';

const Card = ({
  as: Element,
  isExpanded,
  title,
  details,
  children,
  onClick,
  icon,
  id,
  className,
  ...rest
}) => {
  const isOpen = !!(isExpanded && children);

  return (
    <Element
      className={classNames('tw-card list-group-item p-a-0', className, { active: isOpen })}
      id={id}
      data-testid={rest['data-testid']}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus, jsx-a11y/no-static-element-interactions */}
      <div
        className={classNames('p-a-panel tw-card__panel', {
          'tw-card__panel--inactive': !children,
        })}
        role={children ? 'button' : null}
        onClick={() => children && onClick(!isExpanded)}
      >
        <Option
          as="div"
          media={icon}
          title={title}
          content={details}
          decision={false}
          button={
            children && (
              <Chevron orientation={isOpen ? Chevron.Orientation.TOP : Chevron.Orientation.DOWN} />
            )
          }
          inverseMediaCircle={isOpen}
        />
      </div>
      {isOpen && (
        <div className="p-l-panel p-r-panel p-b-panel tw-card__content">
          <div className="media">
            <div className="media-left">
              <div className="circle circle-sm circle-inverse circle-responsive invisible" />
            </div>
            <div className="media-body">
              <hr className="m-t-0 hidden-xs hidden-sm" />
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </Element>
  );
};

const hasChildren = ({ children }) => children;

Card.propTypes = {
  as: Types.elementType,
  // eslint-disable-next-line
  isExpanded: requiredIf(Types.bool, hasChildren),
  title: Types.node.isRequired,
  details: Types.node.isRequired,
  // eslint-disable-next-line
  onClick: requiredIf(Types.func, hasChildren),
  icon: Types.node.isRequired,
  children: Types.node,
  id: Types.string,
  className: Types.string,
  'data-testid': Types.string,
};

Card.defaultProps = {
  as: 'div',
  children: null,
  id: null,
  className: null,
  'data-testid': null,
};

export default Card;
