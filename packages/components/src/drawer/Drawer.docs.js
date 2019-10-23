/* eslint-disable no-alert */
import React, { Component } from 'react';
import '@transferwise/neptune-css/dist/css/flex.css';

import Drawer from './Drawer';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';
import { Button } from '../index';

const KNOBS = {
  knobs: [{ type: 'checkbox', label: 'Open', state: 'open', defaultState: false }],
};

export default class DrawerDocs extends Component {
  state = { ...generateState(KNOBS) };
  render() {
    const { open } = this.state;

    return (
      <div className="container">
        <section className="section" id="drawer">
          <div className="row">
            <div className="col-md-6">
              <h2>Drawer</h2>
              <span role="img" aria-label="uhm">
                When a SlidingPanel meets a Dimmer
              </span>
              {generateCodeBlock('Drawer', KNOBS, this)}
            </div>
            <div className="col-md-6">
              <div className="col-xs-12">
                <Drawer
                  open={open}
                  position="right"
                  onClose={() => this.setState({ open: false })}
                  footerContent={
                    <Button onClick={() => alert('Action clicked')} block>
                      Action
                    </Button>
                  }
                  headerTitle="A title"
                >
                  <input type="text" className="form-control" />
                  <p className="m-t-3">
                    Cat ipsum dolor sit amet, purr when being pet. Fight own tail weigh eight pounds
                    but take up a full-size bed fall over dead (not really but gets sypathy) love
                    you, then bite you or sit in box. Spill litter box, scratch at owner, destroy
                    all furniture, especially couch allways wanting food or chase the pig around the
                    house bite nose of your human. Cats eat all the power cords chew on cable for i
                    can haz for cat gets stuck in tree firefighters try to get cat down firefighters
                    get stuck in tree cat eats firefighters slippers.Cat ipsum dolor sit amet, purr
                    when being pet. Fight own tail weigh eight pounds but take up a full-size bed
                    fall over dead (not really but gets sypathy) love you, then bite you or sit in
                    box. Spill litter box, scratch at owner, destroy all furniture, especially couch
                    allways wanting food or chase the pig around the house bite nose of your human.
                    Cats eat all the power cords chew on cable for i can haz for cat gets stuck in
                    tree firefighters try to get cat down firefighters get stuck in tree cat eats
                    firefighters slippers.
                  </p>
                </Drawer>
                <div className="row">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
