import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';

import './Nudge.css';

const Nudge = ({ media, title, link, href, onDismiss, id, className }) => (
  <div className={classNames('tw-nudge media', className)} id={id}>
    <div className="media-left">{media}</div>
    <div className="media-body">
      <div className="tw-nudge__title media-heading h5">{title}</div>
      <a href={href} className="tw-nudge__link">
        {link}
      </a>
    </div>
    <div className="media-right">
      <button type="button" className="close" onClick={onDismiss} aria-label="close">
        <CrossIcon />
      </button>
    </div>
  </div>
);

Nudge.propTypes = {
  media: Types.node.isRequired,
  title: Types.node.isRequired,
  link: Types.node.isRequired,
  href: Types.string.isRequired,
  onDismiss: Types.func.isRequired,
  id: Types.string,
  className: Types.string,
};

Nudge.defaultProps = {
  id: null,
  className: null,
};

export default Nudge;
