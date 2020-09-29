import React from 'react';
import { shallow } from 'enzyme';

import { DefinitionList } from '..';

const {
  Layout: {
    VERTICAL_TWO_COLUMN,
    VERTICAL_ONE_COLUMN,
    HORIZONTAL_LEFT_ALIGNED,
    HORIZONTAL_RIGHT_ALIGNED,
    HORIZONTAL_JUSTIFIED,
  },
} = DefinitionList;

describe('DefinitionList', () => {
  const someDefinitions = () => [{ title: 'First', value: 'first value', key: 'first' }];

  const withLayout = (layout) =>
    shallow(<DefinitionList layout={layout} definitions={someDefinitions()} />);

  const listHasClass = (layout, className) =>
    withLayout(layout).find('dl.tw-definition-list').hasClass(className);

  const valueHasClass = (layout, className) =>
    withLayout(layout).find('dl.tw-definition-list dd').hasClass(className);

  it('applies correct flex class', () => {
    const colClass = 'flex-column';

    expect(listHasClass(VERTICAL_ONE_COLUMN, colClass)).toBe(true);
    expect(listHasClass(VERTICAL_TWO_COLUMN, colClass)).toBe(true);
    expect(listHasClass(HORIZONTAL_LEFT_ALIGNED, colClass)).toBe(true);
    expect(listHasClass(HORIZONTAL_RIGHT_ALIGNED, colClass)).toBe(true);
    expect(listHasClass(HORIZONTAL_JUSTIFIED, colClass)).toBe(true);
  });

  it('applies correct class for vertical two-column layout', () => {
    const colClass = 'tw-definition-list--columns flex-column flex-row--sm';

    expect(listHasClass(VERTICAL_TWO_COLUMN, colClass)).toBe(true);
    expect(listHasClass(VERTICAL_ONE_COLUMN, colClass)).toBe(false);
    expect(listHasClass(HORIZONTAL_LEFT_ALIGNED, colClass)).toBe(false);
    expect(listHasClass(HORIZONTAL_RIGHT_ALIGNED, colClass)).toBe(false);
    expect(listHasClass(HORIZONTAL_JUSTIFIED, colClass)).toBe(false);
  });

  it('applies correct class for horiztonal layouts', () => {
    const rowClass = 'tw-definition-list--horizontal flex-column';

    expect(listHasClass(VERTICAL_TWO_COLUMN, rowClass)).toBe(false);
    expect(listHasClass(VERTICAL_ONE_COLUMN, rowClass)).toBe(false);
    expect(listHasClass(HORIZONTAL_LEFT_ALIGNED, rowClass)).toBe(true);
    expect(listHasClass(HORIZONTAL_RIGHT_ALIGNED, rowClass)).toBe(true);
    expect(listHasClass(HORIZONTAL_JUSTIFIED, rowClass)).toBe(true);
  });

  it('applies correct class for alignment', () => {
    expect(valueHasClass(VERTICAL_TWO_COLUMN, '')).toBe(true);
    expect(valueHasClass(VERTICAL_ONE_COLUMN, '')).toBe(true);
    expect(valueHasClass(HORIZONTAL_LEFT_ALIGNED, '')).toBe(true);
    expect(valueHasClass(HORIZONTAL_RIGHT_ALIGNED, 'text-sm-right')).toBe(true);
    expect(valueHasClass(HORIZONTAL_JUSTIFIED, 'text-sm-justify')).toBe(true);
  });

  it('has muted text class on title and value when muted flag is passed', () => {
    const muted = shallow(<DefinitionList muted definitions={someDefinitions()} />);
    const notMuted = shallow(<DefinitionList definitions={someDefinitions()} />);

    expect(muted.find('dl.tw-definition-list').hasClass('text-muted')).toBe(true);
    expect(notMuted.find('dl.tw-definition-list').hasClass('text-muted')).toBe(false);
  });
});
