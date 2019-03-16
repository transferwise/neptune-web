import React from 'react';

import Refractor from 'react-refractor';
import markup from 'refractor/lang/markup';
import css from 'refractor/lang/css';
import './less/prism.css';

const style = {
  bg77d9f7: {
    background: '#77d9f7',
  },
  bga7e2f9: {
    background: '#a7e2f9',
  },
  bgdbf0fd: {
    background: '#dbf0fd',
  },
  bg253655: {
    background: '#253655',
    color: 'white',
  },
  bg2e4369: {
    background: '#2e4369',
    color: 'white',
  },
  bg37517e: {
    background: '#37517e',
    color: 'white',
  },
  bg111824: {
    background: '#111824',
    color: 'white',
  },
  bg192439: {
    background: '#192439',
    color: 'white',
  },
  bg223049: {
    background: '#223049',
    color: 'white',
  },
  bg283957: {
    background: '#283957',
    color: 'white',
  },
  bg2f4366: {
    background: '#2f4366',
    color: 'white',
  },
  bg384347: {
    background: '#384347',
    color: 'white',
  },
  bg4a5860: {
    background: '#4a5860',
    color: 'white',
  },
  bg5d7079: {
    background: '#5d7079',
    color: 'white',
  },
  bg6f8691: {
    background: '#6f8691',
    color: 'white',
  },
  bg829ca9: {
    background: '#829ca9',
    color: 'white',
  },
  bg7e7f81: {
    background: '#7e7f81',
    color: 'white',
  },
  bga8aaac: {
    background: '#a8aaac',
    color: 'white',
  },
  bgd3d5d8: {
    background: '#d3d5d8',
    color: '#384347',
  },
  bge2e6e8: {
    background: '#e2e6e8',
    color: '#384347',
  },
  bgf2f5f7: {
    background: '#f2f5f7',
    color: '#384347',
  },
  bg008ec0: {
    background: '#008ec0',
  },
  bg00a4df: {
    background: '#00a4df',
  },
  bg00b9ff: {
    background: '#00b9ff',
  },
  bgD8F1fA: {
    background: '#D8F1fA',
  },
  bgB62A18: {
    background: '#B62A18',
    color: 'white',
  },
  bgC22E2E: {
    background: '#C22E2E',
    color: 'white',
  },
  bgF53636: {
    background: '#F53636',
    color: 'white',
  },
  bgFFDFDF: {
    background: '#FFDFDF',
    color: '#B62A18',
  },
  bg1B7940: {
    background: '#1B7940',
    color: 'white',
  },
  bg28B862: {
    background: '#28B862',
    color: 'white',
  },
  bg2ED06E: {
    background: '#2ED06E',
    color: 'white',
  },
  bgD6F5E2: {
    background: '#D6F5E2',
    color: '#1B7940',
  },
  bg9E5F00: {
    background: '#9E5F00',
    color: 'white',
  },
  bgDF8700: {
    background: '#DF8700',
    color: 'white',
  },
  bgFFA600: {
    background: '#FFA600',
    color: 'white',
  },
  bgFFF3DD: {
    background: '#FFF3DD',
    color: '#9E5F00',
  },
  bgc0ae10: {
    background: '#c0ae10',
    color: 'white',
  },
  bgdfc912: {
    background: '#dfc912',
    color: '#384347',
  },
  bgffe714: {
    background: '#ffe714',
    color: '#384347',
  },
  text5d7079: {
    color: '#5d7079',
  },
  text2e4369: {
    color: '#2e4369',
  },
  text5d7079: {
    color: '#5d7079',
  },
};

const Color = () => (
  <section id="color" className="container--wide section">
    <h1 className="colored-dot">Color</h1>
    <h2>Color mapping</h2>
    <p>Gray and brand colors for use across the Design system.</p>
    <div className="alert">All the custom-properties have their equivalent @variable of Less</div>
    <div className="d-flex justify-content-between">
      <div>
        <span className="doc-color" style={style.bgf2f5f7}>
        --gray-base: var(--brand-smoke-plus-20);
        </span>
        <span className="doc-color" style={style.bg384347}>
        --gray-darker: var(--brand-grey-minus-20);
        </span>
        <span className="doc-color" style={style.bg4a5860}>
        --gray-dark: var(--brand-grey-minus-10);
        </span>
        <span className="doc-color" style={style.bg5d7079}>
        --gray: var(--brand-grey);
        </span>
        <span className="doc-color" style={style.bg829ca9}>
        --gray-light: var(--brand-grey-plus-20);
        </span>
        <span className="doc-color" style={style.bgd3d5d8}>
        --gray-lighter: var(--brand-smoke);
        </span>
      </div>
      <div>
        <span className="doc-color" style={style.bg37517e}>
        --brand-primary: var(--brand-navy);
        </span>
        <span className="doc-color" style={style.bg2ED06E}>
        --brand-success: var(--brand-green);
        </span>
        <span className="doc-color" style={style.bg00b9ff}>
        --brand-info: var(--brand-light-blue);
        </span>
        <span className="doc-color" style={style.bgFFA600}>
        --brand-warning: var(--brand-orange);
        </span>
        <span className="doc-color" style={style.bgF53636}>
        --brand-danger: var(--brand-red);
        </span>
        <span className="doc-color">
        --body-bg: var(--brand-white);
        </span>
      </div>
      <div>
        <span className="doc-color" style={style.text5d7079}>
        --text-color: var(--brand-grey);
        </span>
        <span className="doc-color" style={style.text2e4369}>
        --text-bold-color: var(--brand-navy-minus-10);
        </span>
        <span className="doc-color" style={style.text5d7079}>
        --text-secondary-color: var(--brand-grey);
        </span>
      </div>
    </div>

    <h2 className="m-t-4">Color tokens</h2>
    <div className="d-flex justify-content-between">
      <div>
        <h3>Blues</h3>
        <span className="doc-color" style={style.bg77d9f7}>
        --brand-pale-blue-minus-20: #77d9f7
        </span>
        <span className="doc-color" style={style.bga7e2f9}>
        --brand-pale-blue-minus-10: #a7e2f9
        </span>
        <span className="doc-color" style={style.bgdbf0fd}>
        --brand-pale-blue: #dbf0fd
        </span>
        <span className="doc-color" style={style.bg253655}>
        --brand-navy-minus-20: #253655
        </span>
        <span className="doc-color" style={style.bg2e4369}>
        --brand-navy-minus-10: #2e4369
        </span>
        <span className="doc-color" style={style.bg37517e}>
        --brand-navy: #37517e
        </span>
        <span className="doc-color" style={style.bg111824}>
        --brand-blue-minus-20: #111824
        </span>
        <span className="doc-color" style={style.bg192439}>
        --brand-blue-minus-10: #192439
        </span>
        <span className="doc-color" style={style.bg223049}>
        --brand-blue: #223049
        </span>
        <span className="doc-color" style={style.bg283957}>
        --brand-blue-plus-10: #283957
        </span>
        <span className="doc-color" style={style.bg2f4366}>
        --brand-blue-plus-20: #2f4366
        </span>
        <span className="doc-color" style={style.bg008ec0}>
        --brand-light-blue-minus-20: #008ec0
        </span>
        <span className="doc-color" style={style.bg00a4df}>
        --brand-light-blue-minus-10: #00a4df
        </span>
        <span className="doc-color" style={style.bg00b9ff}>
        --brand-light-blue: #00b9ff
        </span>
        <span className="doc-color" style={style.bgD8F1fA}>
        --brand-light-blue-wash: #D8F1fA
        </span>
      </div>
      <div>
        <h3>Grays</h3>
        <span className="doc-color" style={style.bg384347}>
        --brand-grey-minus-20: #384347
        </span>
        <span className="doc-color" style={style.bg4a5860}>
        --brand-grey-minus-10: #4a5860
        </span>
        <span className="doc-color" style={style.bg5d7079}>
        --brand-grey: #5d7079
        </span>
        <span className="doc-color" style={style.bg6f8691}>
        --brand-grey-plus-10: #6f8691
        </span>
        <span className="doc-color" style={style.bg829ca9}>
        --brand-grey-plus-20: #829ca9
        </span>
        <span className="doc-color" style={style.bg7e7f81}>
        --brand-smoke-minus-20: #7e7f81
        </span>
        <span className="doc-color" style={style.bga8aaac}>
        ---brand-smoke-minus-10: #a8aaac
        </span>
        <span className="doc-color" style={style.bgd3d5d8}>
        --brand-smoke: #d3d5d8
        </span>
        <span className="doc-color" style={style.bge2e6e8}>
        --brand-smoke-plus-10: #e2e6e8
        </span>
        <span className="doc-color" style={style.bgf2f5f7}>
        --brand-smoke-plus-20: #f2f5f7
        </span>
      </div>
      <div>
        <h3>Reds</h3>
        <span className="doc-color" style={style.bgB62A18}>
        --brand-red-minus-20: #B62A18
        </span>
        <span className="doc-color" style={style.bgC22E2E}>
        --brand-red-minus-10: #C22E2E
        </span>
        <span className="doc-color" style={style.bgC22E2E}>
        --brand-red-alert: #C22E2E
        </span>
        <span className="doc-color" style={style.bgF53636}>
        --brand-red: #F53636
        </span>
        <span className="doc-color" style={style.bgFFDFDF}>
        --brand-red-wash: #FFDFDF
        </span>
        <h3 className="m-t-2">Greens</h3>
        <span className="doc-color" style={style.bg1B7940}>
        --brand-green-minus-20: #1B7940
        </span>
        <span className="doc-color" style={style.bg1B7940}>
        --brand-green-alert: #1B7940
        </span>
        <span className="doc-color" style={style.bg28B862}>
        --brand-green-minus-10: #28B862
        </span>
        <span className="doc-color" style={style.bg2ED06E}>
        --brand-green: #2ED06E
        </span>
        <span className="doc-color" style={style.bgD6F5E2}>
        --brand-green: #D6F5E2
        </span>
        <h3 className="m-t-2">Oranges</h3>
        <span className="doc-color" style={style.bg9E5F00}>
        --brand-orange-minus-20: #9E5F00
        </span>
        <span className="doc-color" style={style.bg9E5F00}>
        --brand-orange-alert: #9E5F00
        </span>
        <span className="doc-color" style={style.bgDF8700}>
        --brand-orange-minus-10: #DF8700
        </span>
        <span className="doc-color" style={style.bgFFA600}>
          --brand-orange: #FFA600
        </span>
        <span className="doc-color" style={style.bgFFF3DD}>
        --brand-orange-wash: #FFF3DD
        </span>
        <h3 className="m-t-2">Yellows</h3>
        <span className="doc-color" style={style.bgc0ae10}>
        --brand-yellow-minus-20: #c0ae10
        </span>
        <span className="doc-color" style={style.bgdfc912}>
        --brand-yellow-minus-10: #dfc912
        </span>
        <span className="doc-color" style={style.bgffe714}>
        --brand-yellow: #ffe714
        </span>
      </div>
    </div>
  </section>
);

export default Color;
