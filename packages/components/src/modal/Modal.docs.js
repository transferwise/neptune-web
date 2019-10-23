/* eslint-disable no-alert */
import React, { Component } from 'react';
import { Modal } from '..';
import Button from '../button';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const SIZES = ['sm', 'md', 'lg', 'xl'];

const longbodyText = `Pet me pet me don't pet me i vomit in the bed in the middle of the night so get scared by sudden appearance of cucumber rub against owner because nose is wet and make meme, make cute face yet scratch my tummy actually i hate you now fight me poop in litter box, scratch the walls. Litter kitter kitty litty little kitten big roar roar feed me. Hell is other people throw down all the stuff in the kitchen cough yet trip on catnip lick human with sandpaper tongue somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock you have cat to be kitten me right meow. What a cat-ass-trophy! scream for no reason at 4 am. Inspect anything brought into the house find box a little too small and curl up with fur hanging out make meme, make cute face for try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard so why must they do that then cats take over the world meow meow. Jump five feet high and sideways when a shadow moves fight an alligator and win roll over and sun my belly and pee on walls it smells like breakfast claws in your leg. Find empty spot in cupboard and sleep all day at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in so i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk, and thinking longingly about tuna brine for chase ball of string or make meme, make cute face sleep on keyboard. Bite nose of your human. Flee in terror at cucumber discovered on floor pet me pet me don't pet me chew on cable, shake treat bag knock dish off table head butt cant eat out of my own dish love to play with owner's hair tie. Hide when guests come over under the bed, and purrr purr littel cat, little cat purr purr. Howl on top of tall thing. Stick butt in face meow meow mama so chew the plant yet miaow then turn around and show you my bum but meow loudly just to annoy owners for scratch my tummy actually i hate you now fight me or walk on car leaving trail of paw prints on hood and windshield. I like fish swipe at owner's legs scream at teh bath. Meow meow, i tell my human spit up on light gray carpet instead of adjacent linoleum or meowing non stop for food, mice, run up and down stairs crash against wall but walk away like nothing happened.`;
const shortbodyTex = `Pet me pet me don't pet me i vomit in the bed in the middle of the night so get scared by sudden appearance of cucumber rub against owner because nose is wet and make meme, make cute face yet scratch my tummy actually`;
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
    {
      type: 'checkbox',
      label: 'Short text',
      state: 'shortText',
      defaultState: false,
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
    const { open, size, title, className, shortText } = this.state;
    const extraPropsDocs = {
      body: shortText ? shortbodyTex : longbodyText,
      footer: '<Button label="Action" block />',
      onClose: 'this.close',
    };

    return (
      <div className="container">
        <section className="section" id="modal">
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
            footer={
              <Button block onClick={() => alert('clicked')}>
                Action
              </Button>
            }
            closeOnClick
          />
        </section>
      </div>
    );
  }
}
