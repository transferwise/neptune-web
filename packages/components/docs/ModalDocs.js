import React, { Component } from 'react';
import { Modal, Select } from '../src';

const SIZES = ['sm', 'md', 'lg'];

export default class ModalDocs extends Component {
  state = {
    open: false,
    size: 'md',
  };

  open = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, size } = this.state;

    const title = 'A title';
    const body = bodyText();
    const footer = (
      <button type="button" className="btn btn-primary" onClick={this.close}>
        Okay
      </button>
    );

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Modal</h2>
              <p>America&apos;s next top modal</p>
            </div>

            <div className="col-md-6 p-b-2">
              <button className="btn btn-primary btn-block" onClick={this.open}>
                Open modal
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">{`<Modal${open ? ' open' : ''} size="${size}" />`}</pre>
              {/* eslint-enable react/jsx-indent */}
            </div>

            <div className="col-md-6">
              <label htmlFor="modal-size-selector" className="control-label">
                Size
              </label>

              <Select
                id="modal-size-selector"
                selected={size ? { value: size, label: size } : null}
                options={SIZES.map(s => ({ value: s, label: s }))}
                onChange={selection => this.setState({ size: selection ? selection.value : null })}
              />
            </div>

            <Modal
              open={open}
              title={title}
              body={body}
              footer={footer}
              onClose={this.close}
              size={size}
            />
          </div>
        </section>
      </div>
    );
  }
}

function bodyText() {
  return 'Books are useless! I only ever read one book, To Kill A Mockingbird, and it gave me absolutely no insight on how to kill mockingbirds! Sure it taught me not to judge a man by the color of his skin…but what good does *that* do me? Save me, Jeebus. Ahoy hoy? I prefer a vehicle that does not hurt Mother Earth. It is a go-cart, powered by my own sense of self-satisfaction. Son, when you participate in sporting events, it is not whether you win or lose: it is how drunk you get. Stan Lee never left. I am afraid his mind is no longer in mint condition. I do not like being outdoors, Smithers. For one thing, there is too many fat children. …And the fluffy kitten played with that ball of string all through the night. On a lighter note, a Kwik-E-Mart clerk was brutally murdered last night. Me fail English? That is unpossible. Fire can be our friend; whether it is toasting marshmallows or raining down on Charlie. I prefer a vehicle that does not hurt Mother Earth. It is a go-cart, powered by my own sense of self-satisfaction. Me fail English? That is unpossible. Fire can be our friend; whether it is toasting marshmallows or raining down on Charlie. I prefer a vehicle that does not hurt Mother Earth. It is a go-cart, powered by my own sense of self-satisfaction.';
}
