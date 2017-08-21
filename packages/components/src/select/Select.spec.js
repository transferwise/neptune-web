import React from 'react';
import { shallow, mount } from 'enzyme';

import Select from './';
import Option from './option';

describe('Select', () => {
  let component;
  let props;
  let documentEventCallbacks;
  let originalAddEventListener;

  const KeyCodes = {
    DOWN: 40,
    UP: 38,
    ENTER: 13,
    ESCAPE: 27,
  };

  function mountComponent() {
    component = mount(<Select {...props} />);
  }

  function shallowRenderComponent() {
    component = shallow(<Select {...props} />);
  }

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      options: [
        { value: 0, label: 'yo' },
        { value: 1, label: 'dawg' },
      ],
    };
    documentEventCallbacks = {};
    originalAddEventListener = global.document.addEventListener;
    global.document.addEventListener = jest.fn((name, cb) => {
      documentEventCallbacks[name] = cb;
    });
    shallowRenderComponent();
  });

  afterEach(() => {
    global.document.addEventListener = originalAddEventListener;
  });


  function doTimes(count, func) {
    while (count) {
      func();
      count -= 1; // eslint-disable-line no-param-reassign
    }
  }

  function fakeEvent() {
    return {
      nativeEvent: { stopImmediatePropagation() {} },
      stopPropagation() {},
      preventDefault() {},
    };
  }

  function fakeKeyDownEventForKey(keyCode) {
    return {
      ...fakeEvent(),
      keyCode,
    };
  }

  function openSelect() {
    component.find('button.dropdown-toggle').simulate('click', fakeEvent());
  }

  function openSearchableSelect() {
    component.find('button.dropdown-toggle').simulate('click', fakeEvent());
    component.setProps({ onSearchChange: jest.fn() });
  }

  function clickOnDocument() {
    documentEventCallbacks.click();
  }

  function findNthListElement(n) {
    return component.find('li').at(n);
  }

  function findNthOption(n) {
    return component.find(Option).at(n);
  }

  function expectDropdownToBe() {
    return {
      open() {
        expect(component.find('ul.dropdown-menu').length).toBe(1);
        expect(component.find('.dropdown.open').length).toBe(1);
      },
      closed() {
        expect(component.find('ul.dropdown-menu').length).toBe(0);
        expect(component.find('.dropdown.open').length).toBe(0);
      },
    };
  }

  it('starts closed', () => {
    expectDropdownToBe().closed();
  });

  it('can be opened', () => {
    openSelect();
    expectDropdownToBe().open();
  });

  it('can be closed by clicking somewhere else', () => {
    mountComponent(); // Need lifecycle methods to be called.
    openSelect();
    clickOnDocument();
    expectDropdownToBe().closed();
  });

  it('can be closed by pressing escape', () => {
    openSelect();
    component.simulate('keyDown', fakeKeyDownEventForKey(KeyCodes.ESCAPE));
    expectDropdownToBe().closed();
  });

  it('has a default placeholder', () => {
    expect(component.find('button').text()).not.toEqual('');
  });

  it('can be given a placeholder', () => {
    component.setProps({ placeholder: 'hello world' });
    expect(component.find('button').text()).toEqual('hello world');
  });

  it('renders basic options and placeholder when open and not required', () => {
    openSelect();
    component.setProps({ placeholder: 'ayy lmao' });

    expect(component.find('li').length).toBe(props.options.length + 1);
    expect(findNthListElement(0).text()).toEqual('ayy lmao');
    expect(findNthOption(0).prop('label')).toEqual('yo');
    expect(findNthOption(1).prop('label')).toEqual('dawg');
  });

  it('does not render placeholder in list when open and required', () => {
    openSelect();
    component.setProps({ placeholder: 'this will not be shown', required: true });

    expect(component.find('li').length).toBe(props.options.length);
    expect(findNthListElement(0).text()).not.toEqual('this will not be shown');
  });

  it('can select an option and closes itself', () => {
    openSelect();
    expect(props.onChange).not.toBeCalled();
    findNthListElement(1).simulate('click', fakeEvent());
    expect(props.onChange).toBeCalledWith(props.options[0]);
    expectDropdownToBe().closed();
  });

  it('shows the currently selected option as active in the dropdown', () => {
    openSelect();
    component.setProps({ required: true });
    const isFirstElementActive = () => findNthListElement(0).hasClass('active');
    const amountOfActiveElements = () => component.find('.active').length;

    expect(isFirstElementActive()).toBe(false);
    expect(amountOfActiveElements()).toBe(0);

    component.setProps({ selected: props.options[0] });
    expect(isFirstElementActive()).toBe(true);
    expect(amountOfActiveElements()).toBe(1);
  });

  it('calls onChange with nothing when selecting the placeholder', () => {
    openSelect();
    findNthListElement(0).simulate('click', fakeEvent());
    expect(props.onChange).toBeCalledWith(null);
  });

  it('renders the selected option if given instead of the placeholder', () => {
    const selected = { value: 0, label: 'ayy', note: 'yo', icon: 'red thing', currency: '', secondary: '' };
    component.setProps({ selected });
    const buttonChild = component.find('button').children().first();
    expect(buttonChild.type()).toEqual(Option);
    expect(buttonChild.props()).toEqual(selected);
  });

  it('renders non-clickable headers', () => {
    openSelect();
    component.setProps({ options: [{ header: 'hello' }, { header: 'good morning' }] });

    expect(component.find('li.dropdown-header').first().text()).toEqual('hello');
    expect(component.find('li.dropdown-header').at(1).text()).toEqual('good morning');
    component.find('li.dropdown-header').first().simulate('click', fakeEvent());
    expect(props.onChange).not.toBeCalled();
    expectDropdownToBe().open();
  });

  it('can be disabled', () => {
    expect(!!component.find('button').prop('disabled')).toBe(false);
    component.setProps({ disabled: true });
    expect(!!component.find('button').prop('disabled')).toBe(true);
    openSelect();
    expectDropdownToBe().closed();
  });

  it('shows a searchbox when a search handler is passed in', () => {
    openSelect();
    expect(component.find('input').length).toBe(0);

    component.setProps({ onSearchChange: jest.fn() });
    expect(component.find('input').length).toBe(1);
  });

  it('lets you search', () => {
    openSelect();
    const onSearchChange = jest.fn();
    component.setProps({ onSearchChange });
    component.find('input').simulate('change', { target: { value: 'hello' } });
    expect(onSearchChange).toBeCalledWith('hello');
  });

  it('shows the search value in the searchbox', () => {
    openSearchableSelect();
    component.setProps({ searchValue: 'hello' });
    expect(component.find('input').prop('value')).toEqual('hello');
  });

  it('has a default search placeholder', () => {
    openSearchableSelect();
    component.setProps({ onSearchChange: jest.fn() });
    expect(component.find('input').prop('placeholder').length).toBeGreaterThan(0);
  });

  it('can set the search placeholder', () => {
    openSearchableSelect();
    component.setProps({ searchPlaceholder: 'hello' });
    expect(component.find('input').prop('placeholder')).toEqual('hello');
  });

  it('does not show placeholder option when search enabled', () => {
    component.setProps({ placeholder: 'ayy lmao' });
    openSelect();
    expect(component.find('ul').text()).toContain('ayy lmao');
    openSearchableSelect();
    expect(component.find('ul').text()).not.toContain('ayy lmao');
  });

  it('allows you to move around items with arrow keys while ignoring headers', () => {
    component.setProps({
      options: [
        { value: 0, label: 'yo' },
        { value: 1, label: 'dawg' },
        { header: 'ignore me' },
        { value: 2, label: 'yo' },
        { value: 3, label: 'dawg' },
        { header: 'ignore me too' },
        { value: 4, label: 'dawg' },
        { value: 5, label: 'dawg' },
      ],
      required: true,
    });
    openSelect();

    expect(findNthListElement(3).hasClass('active')).toBe(false);
    doTimes(3, () => component.simulate('keyDown', fakeKeyDownEventForKey(KeyCodes.DOWN)));
    expect(findNthListElement(3).hasClass('active')).toBe(true); // skips header!

    doTimes(4, () => component.simulate('keyDown', fakeKeyDownEventForKey(KeyCodes.DOWN)));
    expect(findNthListElement(3).hasClass('active')).toBe(false);
    expect(findNthListElement(7).hasClass('active')).toBe(true); // skips header again!

    expect(findNthListElement(0).hasClass('active')).toBe(false);
    doTimes(5, () => component.simulate('keyDown', fakeKeyDownEventForKey(KeyCodes.UP)));
    expect(findNthListElement(7).hasClass('active')).toBe(false);
    expect(findNthListElement(0).hasClass('active')).toBe(true);
  });

  it('binds keyboard movement to the current options', () => {
    component.setProps({
      options: [
        { value: 0, label: 'yo' },
        { value: 1, label: 'dawg' },
      ],
      required: true,
    });
    openSelect();
    doTimes(103, () => component.simulate('keyDown', fakeKeyDownEventForKey(KeyCodes.UP)));
    expect(findNthListElement(0).hasClass('active')).toBe(true);
    expect(findNthListElement(1).hasClass('active')).toBe(false);
    doTimes(103, () => component.simulate('keyDown', fakeKeyDownEventForKey(KeyCodes.DOWN)));
    expect(findNthListElement(0).hasClass('active')).toBe(false);
    expect(findNthListElement(1).hasClass('active')).toBe(true);
  });

  it('allows you to select the item currently focused with your keyboard', () => {
    const onChange = jest.fn();
    component.setProps({
      options: [
        { value: 0, label: 'yo' },
        { value: 1, label: 'dawg' },
        { value: 2, label: 'boi' },
      ],
      required: true,
      onChange,
    });
    doTimes(2, () => component.simulate('keyDown', fakeKeyDownEventForKey(KeyCodes.DOWN)));
    // hitting it once will only make the selector appear, so we hit it twice to go down once.
    expect(onChange).not.toHaveBeenCalled();
    component.simulate('keyDown', fakeKeyDownEventForKey(KeyCodes.ENTER));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({ value: 1, label: 'dawg' });
  });

  it('can have different sizes', () => {
    const openerButton = () => component.find('button');
    expect(openerButton().hasClass('btn-md')).toBe(true);
    ['xs', 'sm', 'md', 'lg'].forEach((size) => {
      component.setProps({ size });
      expect(openerButton().hasClass(`btn-${size}`)).toBe(true);
    });
  });
});
