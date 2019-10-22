import React, { Component } from 'react';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

import Flex from './Flex';
import Box from '../box';

import '../box/Boxdocs.css';

const OPTIONS = [...Array(6)].map((value, index) => ({
  value: index,
  label: index.toString(),
}));

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Horizontal Spacing',
      state: 'marginX',
      options: OPTIONS,
      defaultState: OPTIONS[1],
    },
    {
      type: 'select',
      label: 'Horizontal Padding',
      state: 'paddingX',
      options: OPTIONS,
      defaultState: OPTIONS[1],
    },
    {
      type: 'select',
      label: 'Vertical Spacing',
      state: 'marginY',
      options: OPTIONS,
      defaultState: OPTIONS[1],
    },
    {
      type: 'select',
      label: 'Vertical Padding',
      state: 'paddingY',
      options: OPTIONS,
      defaultState: OPTIONS[1],
    },
  ],
};
const Size = {
  xs: 1 / 8,
  sm: 1 / 4,
  md: 1 / 2,
  lg: 100,
  xl: 100,
};

const Direction = { xs: 'column', sm: 'row', md: 'column', lg: 'row' };

export default class FlexDocs extends Component {
  state = { ...generateState(KNOBS) };

  render() {
    const { marginX, marginY, paddingX, paddingY } = this.state;
    const extraProps = {
      direction: Direction,
      children: `
        <Box size={${JSON.stringify(Size)}} alignItems='center' justifyContent='center'/>
        <Box size={${JSON.stringify(Size)}} alignItems='center' justifyContent='center'/>
        <Box size={${JSON.stringify(Size)}} alignItems='center' justifyContent='center'/>`,
    };

    return (
      <div className="container">
        <section className="section" id="flex">
          <div className="row">
            <div className="col-md-6">
              <h2>Flex</h2>
              <p>I Flex but I do not break</p>

              {generateCodeBlock('Flex', KNOBS, this, extraProps)}
              <p>
                Flex offers a flex container for <a href="#box">Box</a>. It also offers the
                possibility to switch direction based on breakpoint. Here an example of <br />
                <code className="small">{`direction={xs:'row',sm:'row-reverse',md:'column',lg:'column-reverse','xl:'column'}`}</code>
                .<br />
                Flex also offers the possibility to manage the margin and the paddings of its boxes.
                Flex and box shouldn&apos;t be used to directly to create page structures but they
                should be use to create layout components that will be used to create pages
                structures. In this way it will be easier to lock down all the different designs
                that we use.
              </p>
            </div>
            <div className="col-md-6 ">
              <div
                className="p-y-3 p-x-3"
                style={{ minHeight: '200paddingX', border: '1paddingX solid #e2e6e8' }}
              >
                <Flex
                  direction={Direction}
                  marginX={marginX.value}
                  paddingX={paddingX.value}
                  paddingY={paddingY.value}
                  marginY={marginY.value}
                >
                  <Box size={Size} alignItems="center" justifyContent="center">
                    <div className="demo" />
                  </Box>
                  <Box size={Size} alignItems="center" justifyContent="center">
                    <div className="demo" />
                  </Box>
                  <Box size={Size} alignItems="center" justifyContent="center">
                    <div className="demo" />
                  </Box>
                </Flex>
              </div>
              <div className="row">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
