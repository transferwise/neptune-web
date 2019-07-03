import React, { Component } from 'react';
import { Modal } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const SIZES = ['sm', 'md', 'lg', 'xl'];

const bodyText = `Books are useless! I only ever read one book, To Kill A Mockingbird, and it gave me absolutely no insight on how to kill mockingbirds! Sure it taught me not to judge a man by the color of his skin…but what good does *that* do me? Save me, Jeebus. Ahoy hoy? I prefer a vehicle that does not hurt Mother Earth. It is a go-cart, powered by my own sense of self-satisfaction. Son, when you participate in sporting events, it is not whether you win or lose: it is how drunk you get. Stan Lee never left. I am afraid his mind is no longer in mint condition. I do not like being outdoors, Smithers. For one thing, there is too many fat children. …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night. Me fail English? That is unpossible. Fire can be our friend; whether it is toasting marshmallows or raining down on Charlie. I prefer a vehicle that does not hurt Mother Earth. It is a go-cart, powered by my own sense of self-satisfaction. Me fail English? That is unpossible. Fire can be our friend; whether it is toasting marshmallows or raining down on Charlie. I prefer a vehicle that does not hurt Mother Earth. It is a go-cart, powered by my own sense of self-satisfaction`;

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: Object.values(SIZES).map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: SIZES[1], label: SIZES[1] },
    },
    {
      type: 'text',
      label: 'Title',
      state: 'title',
      defaultState: 'A title',
    },
    {
      type: 'text',
      label: 'Add a custom class to the modal',
      state: 'className',
      defaultState: '',
    },
  ],
  hiddenKnobs: [
    {
      type: 'checkbox',
      label: 'Open',
      state: 'open',
      defaultState: false,
    },
  ],
};

const extraPropsDocs = {
  body: bodyText,
  footer: '<FooterComponent />',
  onClose: 'this.close',
};

export default class ModalDocs extends Component {
  state = {
    ...generateState(KNOBS),
    open: false,
    className: '',
  };

  open = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, size, title, className } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Modal</h2>
              <p>America&apos;s next top modal</p>
              {generateCodeBlock('Modal', KNOBS, this, {
                ...extraPropsDocs,
                extraProps: '...anyOtherPropsThatWillBePassedDirectlyToTheModal',
              })}
              <p>
                Note: trying to render an open modal on the server will currently render an empty
                string.
              </p>
            </div>

            <div className="col-md-6">
              <button className="btn btn-primary btn-block" onClick={this.open}>
                Open modal
              </button>
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>

          <Modal
            {...extraPropsDocs}
            open={open}
            onClose={this.close}
            size={size.value}
            title={title}
            className={className}
          />
        </section>
      </div>
    );
  }
}
