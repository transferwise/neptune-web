import React, { PureComponent, Fragment } from 'react';
import Types from 'prop-types';
import Chevron, { Orientation, Size } from '../../common/Chevron';

class AccordionItem extends PureComponent {
  static propTypes = {
    title: Types.node.isRequired,
    content: Types.node.isRequired,
  };

  state = {
    isOpen: false,
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { title, content } = this.props;
    const { isOpen } = this.state;
    return (
      <Fragment>
        {/* eslint-disable-next-line jsx-a11y/label-has-for */}
        <label onClick={this.toggle} className="accordion-item decision p-a-0">
          <div className="media p-y-3">
            <div className="media-body">{typeof title === 'string' ? <h5>{title}</h5> : title}</div>
            <div className="media-right media-middle">
              <Chevron size={Size.SMALL} orientation={Orientation.BOTTOM} flip={isOpen} animate />
            </div>
          </div>
          {isOpen && <div className="p-b-3">{content}</div>}
        </label>
      </Fragment>
    );
  }
}

export default AccordionItem;
