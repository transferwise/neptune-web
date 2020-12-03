import classNames from 'classnames';
import React, { cloneElement } from 'react';
import Types from 'prop-types';
import {
  CheckCircle as CheckCircleIcon,
  PendingCircle as PendingCircleIcon,
} from '@transferwise/icons';
import requiredIf from 'react-required-if';

import Info from './info';
import { Status } from '../common';
import { deprecated } from '../utilities';

import './Summary.css';

const BadgeIcons = {
  done: CheckCircleIcon,
  pending: PendingCircleIcon,
};

const expiryDate = new Date('03-01-2021');

const Summary = ({
  action,
  as: Element,
  className,
  content,
  description = content,
  help,
  icon,
  illustration,
  info = help,
  status,
  title,
}) => {
  let media = illustration;
  if (icon) {
    const iconSize = icon?.props?.size;
    media = iconSize !== 24 ? cloneElement(icon, { size: 24 }) : icon;
  }
  const Badge = status && BadgeIcons[status];

  return (
    <Element className={classNames('np-summary d-flex align-items-start', className)}>
      <div className="np-summary__icon">
        {media}
        {status && <Badge size={16} filled className={`np-summary-icon__${status}`} />}
      </div>
      <div className="np-summary__body m-l-2">
        <div className="np-summary__title d-flex">
          <strong>{title}</strong>
          {info && (
            <Info
              aria-label={info['aria-label']}
              className="m-l-1 hidden-xs"
              content={info.content}
              presentation={info.presentation}
              title={info.title}
            />
          )}
        </div>

        {description && <div className="np-summary__description">{description}</div>}
        {action && (
          <a href={action.href} className="np-summary__action" aria-label={action['aria-label']}>
            {action.text}
          </a>
        )}
      </div>
      {info && (
        <Info
          aria-label={info['aria-label']}
          className="m-l-2 hidden-sm hidden-md hidden-lg hidden-xl"
          content={info.content}
          presentation={info.presentation}
          size={Info.Size.LARGE}
          title={info.title}
        />
      )}
    </Element>
  );
};

Summary.Status = {
  DONE: Status.DONE,
  PENDING: Status.PENDING,
};

Summary.propTypes = {
  /** Action displayed at the bottom of the Summary */
  action: Types.shape({
    text: Types.node.isRequired,
    href: Types.string.isRequired,
    'aria-label': Types.string,
  }),
  /** Decides which html element should wrap the Summary */
  as: Types.elementType,
  /** Extra classes applied to Summary */
  className: Types.string,
  /** @DEPRECATED please use description instead */
  content: deprecated(Types.node, {
    component: 'Summary',
    newProp: 'description',
    expiryDate,
  }),
  /** Summary description */
  // eslint-disable-next-line
  description: Types.node,
  /** @DEPRECATED please use info instead */
  help: deprecated(
    Types.shape({
      content: Types.node.isRequired,
      title: Types.node,
    }),
    {
      component: 'Summary',
      newProp: 'info',
      expiryDate,
    },
  ),
  /** Infos displayed on help Icon click inside Popover or Modal */
  // eslint-disable-next-line
  info: Types.shape({
    'aria-label': Types.node,
    content: Types.node.isRequired,
    presentation: Types.oneOf([Info.Presentation.POPOVER, Info.Presentation.MODAL]),
    title: Types.node,
  }),
  /** @DEPRECATED please use icon instead */
  illustration: deprecated(Types.node, {
    component: 'Summary',
    newProp: 'icon',
    expiryDate,
  }),
  /** Main Summary Icon */
  // eslint-disable-next-line
  icon: requiredIf(Types.node, ({ illustration }) => !illustration),
  /** Decides the badge applied to Icon */
  status: Types.oneOf([Summary.Status.DONE, Summary.Status.PENDING]),
  /** Summary title */
  title: Types.node.isRequired,
};

Summary.defaultProps = {
  action: null,
  as: 'div',
  className: null,
  content: null,
  help: null,
  illustration: null,
  status: null,
};

export default Summary;
