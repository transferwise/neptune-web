import React from 'react';
import { shallow } from 'enzyme';
import { Radio, RadioGroup } from '..';

const props = { onChange: jest.fn(), name: 'radio-group' };

const RADIOS = [
  {
    id: 'id-test-0',
    value: 'value-test0',
    label: 'Radio1',
    secondary: 'secondary',
    disabled: true,
  },
  {
    id: 'id-test-1',
    value: 'value-test1',
    label: 'Radio2',
    secondary: 'secondary',
    disabled: false,
  },
  {
    id: 'id-test-2',
    value: 'value-test2',
    label: 'Radio3',
    secondary: 'secondary',
    disabled: false,
  },
];

describe('RadioGroup', () => {
  beforeEach(() => {
    console.error = jest.fn();
  });
  afterEach(() => {
    console.error.mockClear();
  });

  it('returns null if radios are not provvalueed', () => {
    expect(shallow(<RadioGroup radios={[]} {...props} />).toBeNully);
  });

  it('Throws error if radios are not provvalueed', () => {
    shallow(<RadioGroup radios={[]} {...props} />);
    expect(console.error).toHaveBeenCalled();
  });

  it(`Doesn't throw error if radios are provvalueed`, () => {
    shallow(<RadioGroup radios={RADIOS} {...props} />);
    expect(console.error).not.toHaveBeenCalled();
  });

  it('returns radio options', () => {
    const component = shallow(<RadioGroup radios={RADIOS} {...props} />);
    expect(component.find(Radio).length).toBe(RADIOS.length);
    expect(
      JSON.stringify(
        component
          .find(Radio)
          .at(0)
          .props(),
      ),
    ).toEqual(
      JSON.stringify({
        id: 'id-test-0',
        value: 'value-test0',
        label: 'Radio1',
        name: 'radio-group',
        disabled: true,
        checked: false,
        secondary: 'secondary',
        onChange: () => props.onChange,
      }),
    );
  });

  it('checks specified radio', () => {
    const component = shallow(
      <RadioGroup radios={RADIOS} selectedValue="value-test2" {...props} />,
    );
    expect(component.find(Radio).length).toBe(RADIOS.length);
    expect(
      component
        .find(Radio)
        .at(2)
        .props().checked,
    ).toBeTruthy();

    expect(
      component
        .find(Radio)
        .at(0)
        .props().checked,
    ).toBeFalsy();
  });

  it('calls onChange with selected value', () => {
    const component = shallow(<RadioGroup radios={RADIOS} {...props} />);
    component
      .find(Radio)
      .at(2)
      .simulate('change', 'value-test2');

    expect(props.onChange).toHaveBeenCalledWith('value-test2');
  });
});
