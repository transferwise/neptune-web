import React from 'react';
import { shallow } from 'enzyme';

import { DefinitionList } from '..';

const {
  Layout: {
    VERTICAL_TWO_COLUMN,
    VERTICAL_ONE_COLUMN,
    HORIZONTAL_LEFT_ALIGNED,
    HORIZONTAL_JUSTIFIED,
  },
} = DefinitionList;

describe('DefinitionList', () => {
  it('has grid classes only for vertical two-column layout', () => {
    const hasRow = (layout) => withLayout(layout).hasClass('row');
    const hasColumn = (layout) => withLayout(layout).children().find('div').hasClass('col-sm-6');

    expect(hasRow(VERTICAL_TWO_COLUMN)).toBe(true);
    expect(hasColumn(VERTICAL_TWO_COLUMN)).toBe(true);

    expect(hasRow(VERTICAL_ONE_COLUMN)).toBe(false);
    expect(hasColumn(VERTICAL_ONE_COLUMN)).toBe(false);
    expect(hasRow(HORIZONTAL_LEFT_ALIGNED)).toBe(false);
    expect(hasColumn(HORIZONTAL_LEFT_ALIGNED)).toBe(false);
    expect(hasRow(HORIZONTAL_JUSTIFIED)).toBe(false);
    expect(hasColumn(HORIZONTAL_JUSTIFIED)).toBe(false);
  });

  it('has horizontal dl class only for horizontal layouts', () => {
    const hasHorizontalDl = (layout) => withLayout(layout).find('dl').hasClass('dl-horizontal');

    expect(hasHorizontalDl(HORIZONTAL_LEFT_ALIGNED)).toBe(true);
    expect(hasHorizontalDl(HORIZONTAL_JUSTIFIED)).toBe(true);

    expect(hasHorizontalDl(VERTICAL_TWO_COLUMN)).toBe(false);
    expect(hasHorizontalDl(VERTICAL_ONE_COLUMN)).toBe(false);
  });

  it('has right-align text class only for horizontal justified layout', () => {
    const hasRightAlign = (layout) => withLayout(layout).find('dd').hasClass('text-sm-right');

    expect(hasRightAlign(HORIZONTAL_JUSTIFIED)).toBe(true);

    expect(hasRightAlign(VERTICAL_TWO_COLUMN)).toBe(false);
    expect(hasRightAlign(VERTICAL_ONE_COLUMN)).toBe(false);
    expect(hasRightAlign(HORIZONTAL_LEFT_ALIGNED)).toBe(false);
  });

  it('has muted text class on title and value when muted flag is passed', () => {
    const component = shallow(<DefinitionList muted definitions={someDefinitions()} />);

    expect(hasMutedTitle(component)).toBe(true);
    expect(hasMutedValue(component)).toBe(true);
  });

  it('does not have muted text class on title and value when muted flag is not passed', () => {
    const component = shallow(<DefinitionList definitions={someDefinitions()} />);

    expect(hasMutedTitle(component)).toBe(false);
    expect(hasMutedValue(component)).toBe(false);
  });

  const someDefinitions = () => [{ title: 'First', value: 'first value', key: 'first' }];
  const withLayout = (layout) =>
    shallow(<DefinitionList layout={layout} definitions={someDefinitions()} />);
  const isMuted = (node) => node.hasClass('text-muted');
  const hasMutedTitle = (component) => isMuted(component.find('dt'));
  const hasMutedValue = (component) => isMuted(component.find('dd'));
});
