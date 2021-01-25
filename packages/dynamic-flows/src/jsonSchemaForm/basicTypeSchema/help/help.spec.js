import React from 'react';
import { shallow } from 'enzyme';
import { Popover } from '@transferwise/components';
import Help from './help';

describe('Given a Help component renders from a help schema', () => {
  const help = {
    markdown: 'some markdown',
  };

  let component;

  beforeEach(() => {
    component = shallow(<Help help={help} />);
  });

  it('should render a popover', () => {
    expect(component.find(Popover)).toHaveLength(1);
  });

  it('should pass down markdown as props', () => {
    expect(component.find(Popover).props().content.props.children).toContain(help.markdown);
  });
});
