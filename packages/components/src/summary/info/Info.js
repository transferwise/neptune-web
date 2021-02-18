import React, { useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { HelpCircle as HelpCircleIcon } from '@transferwise/icons';
import Popover from '../../popover';
import Modal from '../../modal';

import { Size } from '../../common';
import './Info.css';

const Info = (props) => {
  const { className, content, presentation, size, title } = props;
  const [open, setOpen] = useState(false);

  const isModal = presentation === Info.Presentation.MODAL;
  const isSmall = size === Info.Size.SMALL;

  const buttonProps = {
    'aria-label': props['aria-label'],
    className: 'btn-unstyled',
    children: <HelpCircleIcon size={isSmall ? 16 : 24} />,
  };

  return (
    <span
      className={classNames(className, 'np-info', {
        'np-info__small': isSmall,
        'np-info__large': !isSmall,
      })}
    >
      {isModal ? (
        <>
          <button type="button" onClick={() => setOpen(true)} {...buttonProps} />
          <Modal body={content} onClose={() => setOpen(false)} open={open} title={title} />
        </>
      ) : (
        <Popover
          content={content}
          position={Popover.Position.BOTTOM}
          title={title}
          open={open}
          onClose={(val) => setOpen(!val)}
        >
          <button type="button" {...buttonProps} onClick={() => setOpen(true)} />
        </Popover>
      )}
    </span>
  );
};

Info.Presentation = {
  POPOVER: 'POPOVER',
  MODAL: 'MODAL',
};

Info.Size = { SMALL: Size.SMALL, LARGE: Size.LARGE };

Info.propTypes = {
  'aria-label': Types.string,
  /** Extra classes applied to Info */
  className: Types.string,
  /** Content displayed inside a Popover a Modal */
  content: Types.node,
  /** Decides whether to display content in a Popover or a Modal */
  presentation: Types.oneOf([Info.Presentation.MODAL, Info.Presentation.POPOVER]),
  /** Decides the size of help Icon */
  size: Types.oneOf([Info.Size.SMALL, Info.Size.LARGE]),
  /** Title displayed inside a Popover a Modal */
  title: Types.node,
};

Info.defaultProps = {
  'aria-label': undefined,
  className: undefined,
  content: undefined,
  presentation: Info.Presentation.POPOVER,
  size: Info.Size.SMALL,
  title: undefined,
};

export default Info;
