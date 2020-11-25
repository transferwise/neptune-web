import React, { useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { HelpCircle as HelpCircleIcon } from '@transferwise/icons';
import Popover from '../../popover';
import Modal from '../../modal';
import { Size } from '../../common';
import './Info.css';

const Info = ({ className, content, presentation, size, title }) => {
  const [open, setOpen] = useState(false);

  const isModal = presentation === Info.Presentation.MODAL;
  const isSmall = size === Info.Size.SMALL;
  const icon = <HelpCircleIcon size={isSmall ? 16 : 24} />;

  return (
    <span
      className={classNames(className, 'np-info', {
        'np-info__small': isSmall,
        'np-info__large': !isSmall,
      })}
    >
      {isModal ? (
        <>
          <button type="button" onClick={() => setOpen(true)}>
            {icon}
          </button>
          <Modal body={content} onClose={() => setOpen(false)} open={open} title={title} />
        </>
      ) : (
        <Popover content={content} preferredPlacement={Popover.Placement.BOTTOM_LEFT} title={title}>
          {icon}
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
  className: null,
  content: null,
  presentation: Info.Presentation.POPOVER,
  size: Info.Size.SMALL,
  title: null,
};

export default Info;
