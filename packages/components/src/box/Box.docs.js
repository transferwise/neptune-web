/* eslint-disable no-eval */
import React, { Component } from 'react';
import './Boxdocs.less';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';
import Box from './Box';

import { JustifyContent, AlignItems } from '../common';

const JUSTIFY_OPTIONS = JustifyContent.map(s => ({ value: s, label: s }));
const ALIGNMENTS_OPTIONS = AlignItems.map(s => ({ value: s, label: s }));
const WIDTH = ['0', '1 / 4', '1 / 3', '1 / 2', '1', '100', '200'];

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Justify Content',
      state: 'justifyContent',
      options: JUSTIFY_OPTIONS,
      defaultState: JUSTIFY_OPTIONS[2],
    },
    {
      type: 'select',
      label: 'Align Items',
      state: 'alignItems',
      options: ALIGNMENTS_OPTIONS,
      defaultState: ALIGNMENTS_OPTIONS[2],
    },
  ],
};

const HIDDENKNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Width xs',
      state: 'widthXS',
      options: WIDTH.map(value => ({
        value: eval(value),
        label: value,
      })),
      defaultState: { value: eval(WIDTH[1]), label: WIDTH[1] },
    },
    {
      type: 'select',
      label: 'Width sm',
      state: 'widthSM',
      options: WIDTH.map(value => ({
        value: eval(value),
        label: value,
      })),
      defaultState: { value: eval(WIDTH[1]), label: WIDTH[1] },
    },
    {
      type: 'select',
      label: 'Width md',
      state: 'widthMD',
      options: WIDTH.map(value => ({
        value: eval(value),
        label: value,
      })),
      defaultState: { value: eval(WIDTH[2]), label: WIDTH[2] },
    },
    {
      type: 'select',
      label: 'Width lg',
      state: 'widthLG',
      options: WIDTH.map(value => ({
        value: eval(value),
        label: value,
      })),
      defaultState: { value: eval(WIDTH[3]), label: WIDTH[3] },
    },
    {
      type: 'select',
      label: 'Width xl',
      state: 'widthXL',
      options: WIDTH.map(value => ({
        value: eval(value),
        label: value,
      })),
      defaultState: { value: eval(WIDTH[3]), label: WIDTH[3] },
    },
  ],
};

export default class BoxDocs extends Component {
  state = {
    ...generateState(KNOBS),
    ...generateState(HIDDENKNOBS),
  };

  render() {
    const { widthXS, widthSM, widthMD, widthLG, widthXL, alignItems, justifyContent } = this.state;

    const xs = widthXS && widthXS.value;
    const sm = widthSM && widthSM.value;
    const md = widthMD && widthMD.value;
    const lg = widthLG && widthLG.value;
    const xl = widthXL && widthXL.value;
    return (
      <div className="container">
        <section className="section" id="Box">
          <div className="row">
            <div className="col-md-6">
              <h2>Box</h2>
              <p>I&apos;m still, I&apos;m still Jenny from the Box!</p>
              {generateCodeBlock('Box', KNOBS, this, {
                width: { xs, sm, md, lg, xl },
              })}
              <p>
                Box component is a simple html container that{' '}
                <strong>works inside display:flex parent</strong>
                <br />
                The most important functionality of Box is the ability of changing its width based
                on breakpoint.
                <br /> It is possible to pass any width desired between 0 and &#8734;.
                <br />
                Values between 0 and 1 will be interpreted as percentages, values &gt; 1 will be
                interpreted as pixel values.
              </p>
              <p> Example {'width={xs:0, sm:1/2, md:1/4, lg:200, xl:300}'}</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Flex</th>
                    <th>Display</th>
                    <th>Breakpoint</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>none</td>
                    <td>xs</td>
                  </tr>
                  <tr>
                    <td>0 1 50%</td>
                    <td>flex</td>
                    <td>sm</td>
                  </tr>
                  <tr>
                    <td>0 1 25%</td>
                    <td>flex</td>
                    <td>md</td>
                  </tr>
                  <tr>
                    <td>0 0 200px</td>
                    <td>flex</td>
                    <td>lg</td>
                  </tr>
                  <tr>
                    <td>0 0 300px</td>
                    <td>flex</td>
                    <td>xl</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6 ">
              <div style={{ height: '200px', border: '1px solid #e2e6e8' }}>
                <div style={{ height: '100%' }} className="d-flex">
                  <Box
                    width={{ xs, sm, md, lg, xl }}
                    justifyContent={justifyContent.value}
                    alignItems={alignItems.value}
                  >
                    <div className="demo" />
                  </Box>
                  <Box
                    width={{ xs, sm, md, lg, xl }}
                    justifyContent={justifyContent.value}
                    alignItems={alignItems.value}
                  >
                    <div className="demo" />
                  </Box>
                </div>
              </div>
              <div className="row m-t-5">
                {HIDDENKNOBS.knobs.map(knob => generateInput(knob, this))}
                {KNOBS.knobs.map(knob => generateInput(knob, this))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
