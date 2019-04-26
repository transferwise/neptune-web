import React from 'react';
import { mount } from 'enzyme';
import doTimes from 'lodash.times';
import Transition from 'react-transition-group/Transition';
import Select from './';
import Option from './option';
import KEY_CODES from '../common/keyCodes';
import { fakeEvent, fakeKeyDownEventForKey } from '../common/fakeEvents';
import { addClassAndTriggerReflow, removeClass } from './domHelpers';

jest.mock('react-transition-group/Transition', () => jest.fn('placeholder'));
jest.mock('./domHelpers');

describe('Select', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      options: [{ value: 0, label: 'yo' }, { value: 1, label: 'dawg' }, { value: 2, label: 'boi' }],
    };
    Transition.mockImplementation(properties => {
      const ActualTransition = jest.requireActual('react-transition-group/Transition').default;
      return <ActualTransition {...properties} timeout={0} />;
    });
    component = mount(<Select {...props} />);
  });

  const bustStackAndUpdate = async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    component.update();
  };

  const element = selector => component.find(selector);
  const clickOnDocument = async () => {
    document.dispatchEvent(new Event('click'));
    return bustStackAndUpdate();
  };
  const findNthListElement = n => element('li').at(n);
  const findNthOption = n => element(Option).at(n);
  const container = () => element('.btn-group');
  const dropdownMenu = () => element('ul.dropdown-menu');
  const openerButton = () => element('button.dropdown-toggle');
  const openSelect = () => {
    openerButton().simulate('click', fakeEvent());
  };
  const openSearchableSelect = () => {
    openSelect();
    component.setProps({ onSearchChange: jest.fn() });
  };
  const callSearchChangeWith = str =>
    component.find('input').simulate('change', { target: { value: str } });

  const activeOptionIndex = () => {
    let elementIndex = null;
    element('li').forEach((el, index) => {
      if (el.is('.active')) {
        expect(element('.active').length).toBe(1);
        elementIndex = index;
      }
    });

    return elementIndex;
  };

  const focusedOptionIndex = () => {
    let elementIndex = null;
    element('li').forEach((el, index) => {
      if (el.is('.tw-dropdown-item--focused')) {
        expect(element('.tw-dropdown-item--focused').length).toBe(1);
        elementIndex = index;
      }
    });

    return elementIndex;
  };

  const expectOpenClassToHaveBeenAdded = () =>
    expect(addClassAndTriggerReflow).toHaveBeenCalledWith(container().getDOMNode(), 'open');

  const expectOpenClassToHaveBeenRemoved = () =>
    expect(removeClass).toHaveBeenCalledWith(container().getDOMNode(), 'open');

  const expectDropdownToBe = () => ({
    open() {
      expect(dropdownMenu().exists()).toBe(true);
      expect(openerButton().is('[aria-expanded=true]')).toBe(true);
    },
    closed() {
      expect(dropdownMenu().exists()).toBe(false);
      expect(openerButton().is('[aria-expanded=false]')).toBe(true);
    },
  });

  it('starts closed', () => {
    expectDropdownToBe().closed();
  });

  it('can be opened', () => {
    openSelect();
    expectDropdownToBe().open();
    expectOpenClassToHaveBeenAdded();
  });

  it('opens upward when dropdownUp prop is passed', () => {
    component.setProps({ dropdownUp: true });
    expect(container().hasClass('dropup')).toBe(true);
  });

  it('can be opened by DOWN arrow', () => {
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN));
    expectDropdownToBe().open();
  });

  it('can be opened by UP arrow', () => {
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.UP));
    expectDropdownToBe().open();
  });

  it('can be opened by SPACE', () => {
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.SPACE));
    expectDropdownToBe().open();
  });

  it('can be opened by ENTER', () => {
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.ENTER));
    expectDropdownToBe().open();
  });

  it('can be closed by clicking somewhere else', async () => {
    openSelect();
    await clickOnDocument();
    expectDropdownToBe().closed();
    expectOpenClassToHaveBeenRemoved();
  });

  it('can be closed by pressing escape', async () => {
    openSelect();
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.ESCAPE));
    await bustStackAndUpdate();
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

  it('can select an option and closes itself', async () => {
    openSelect();
    expect(props.onChange).not.toBeCalled();
    findNthListElement(1).simulate('click', fakeEvent());
    await bustStackAndUpdate();
    expect(props.onChange).toBeCalledWith(props.options[0]);
    expectDropdownToBe().closed();
  });

  it('closes itself when backdrop is touched', async () => {
    openSelect();
    container().simulate('touchMove', fakeEvent());
    await bustStackAndUpdate();
    expectDropdownToBe().closed();
  });

  it('shows the currently selected option as active in the dropdown', () => {
    openSelect();
    component.setProps({ required: true });
    expect(activeOptionIndex()).toBe(null);
    component.setProps({ selected: props.options[0] });
    expect(activeOptionIndex()).toBe(0);
  });

  it('calls onChange with nothing when selecting the placeholder', () => {
    openSelect();
    findNthListElement(0).simulate('click', fakeEvent());
    expect(props.onChange).toBeCalledWith(null);
  });

  it('renders the selected option if given instead of the placeholder', () => {
    const selected = {
      value: 0,
      label: 'ayy',
      note: 'yo',
      icon: 'red thing',
      currency: '',
      secondary: '',
      classNames: {},

      selected: true,
    };
    component.setProps({ selected });
    const buttonChild = component
      .find('button')
      .children()
      .first();
    expect(buttonChild.type()).toEqual(Option);
    expect(buttonChild.props()).toEqual(selected);
  });

  it('renders non-clickable headers', () => {
    openSelect();
    component.setProps({ options: [{ header: 'hello' }, { header: 'good morning' }] });

    expect(
      component
        .find('li.dropdown-header')
        .first()
        .text(),
    ).toEqual('hello');
    expect(
      component
        .find('li.dropdown-header')
        .at(1)
        .text(),
    ).toEqual('good morning');
    component
      .find('li.dropdown-header')
      .first()
      .simulate('click', fakeEvent());
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
    callSearchChangeWith('hello');
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

  it('has first search result in focus', () => {
    openSearchableSelect();

    component.setProps({ options: [{ value: 2, label: 'yo' }, { value: 3, label: 'dawg' }] });
    callSearchChangeWith('hello');

    expect(focusedOptionIndex()).toBe(1); // ignore search bar
  });

  it('has no focused element if no search result', () => {
    openSearchableSelect();

    component.setProps({ options: [] });
    callSearchChangeWith('hello');

    expect(focusedOptionIndex()).toBe(null);
  });

  it('does not show placeholder option when search enabled', () => {
    component.setProps({ placeholder: 'ayy lmao' });
    openSelect();
    expect(component.find('ul').text()).toContain('ayy lmao');
    openSearchableSelect();
    expect(component.find('ul').text()).not.toContain('ayy lmao');
  });

  it('can be inverse coloured', () => {
    expect(component.find('.btn-input').hasClass('btn-input-inverse')).toBe(false);
    component.setProps({ inverse: true });
    expect(component.find('.btn-input').hasClass('btn-input-inverse')).toBe(true);
  });

  it('can be given a dropdown width', () => {
    openSelect();
    ['sm', 'md', 'lg'].forEach(dropdownWidth => {
      expect(component.find('.dropdown-menu').hasClass(`dropdown-menu-${dropdownWidth}`)).toBe(
        false,
      );
      component.setProps({ dropdownWidth });
      expect(component.find('.dropdown-menu').hasClass(`dropdown-menu-${dropdownWidth}`)).toBe(
        true,
      );
    });
  });

  it('can be given a breakpoint to make the dropdown open from the right', () => {
    openSelect();
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(dropdownRight => {
      expect(
        component.find('.dropdown-menu').hasClass(`dropdown-menu-${dropdownRight}-right`),
      ).toBe(false);
      component.setProps({ dropdownRight });
      expect(
        component.find('.dropdown-menu').hasClass(`dropdown-menu-${dropdownRight}-right`),
      ).toBe(true);
    });
  });

  it('allows you to move around items with arrow keys while ignoring headers and separators', () => {
    const keyboardFocusIsOnElementWithIndex = index =>
      findNthListElement(index).hasClass('tw-dropdown-item--focused');
    component.setProps({
      options: [
        { value: 0, label: 'yo' },
        { value: 1, label: 'dawg' },
        { header: 'ignore me' },
        { value: 2, label: 'yo' },
        { separator: true }, // ignore me too
        { value: 3, label: 'dawg' },
        { header: 'ignore me too' },
        { value: 4, label: 'dawg' },
        { value: 5, label: 'dawg' },
      ],
      required: true,
    });
    openSelect();

    expect(keyboardFocusIsOnElementWithIndex(3)).toBe(false);
    doTimes(3, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(keyboardFocusIsOnElementWithIndex(3)).toBe(true); // skips header!

    doTimes(4, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(keyboardFocusIsOnElementWithIndex(3)).toBe(false);
    expect(keyboardFocusIsOnElementWithIndex(8)).toBe(true); // skips header and separator again!

    expect(keyboardFocusIsOnElementWithIndex(0)).toBe(false);
    doTimes(5, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.UP)));
    expect(keyboardFocusIsOnElementWithIndex(8)).toBe(false);
    expect(keyboardFocusIsOnElementWithIndex(0)).toBe(true);
  });

  it('binds keyboard movement to the current options', () => {
    component.setProps({ required: true });
    openSelect();

    // Move to the bottom of Select with 3 options
    doTimes(3, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(focusedOptionIndex()).toBe(2);

    // Make sure we can't move past the last option
    doTimes(3, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(focusedOptionIndex()).toBe(2);

    // Now move up 1 option
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.UP));
    expect(focusedOptionIndex()).toBe(1);

    // Move to first option and make sure we can't move past the first one
    doTimes(3, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.UP)));
    expect(focusedOptionIndex()).toBe(0);
  });

  it('allows you to select the item currently focused with your keyboard by pressing ENTER', () => {
    component.setProps({ required: true });
    const { onChange } = component.instance().props;

    // Hitting it once will only make the selector appear, so we hit it twice to go down once
    doTimes(2, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(onChange).not.toHaveBeenCalled();

    // Select an option with ENTER
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.ENTER));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(props.options[0]);
  });

  it('allows you to select the item currently focused with your keyboard by pressing SPACE', () => {
    component.setProps({ required: true });
    const { onChange } = component.instance().props;

    // Hitting it once will only make the selector appear, so we hit it twice to go down once
    doTimes(2, () => component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.DOWN)));
    expect(onChange).not.toHaveBeenCalled();

    // Select an option with SPACE
    component.simulate('keyDown', fakeKeyDownEventForKey(KEY_CODES.SPACE));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(props.options[0]);
  });

  it('can have different sizes', () => {
    expect(openerButton().hasClass('btn-md')).toBe(true);
    ['sm', 'md', 'lg'].forEach(size => {
      component.setProps({ size });
      expect(openerButton().hasClass(`btn-${size}`)).toBe(true);
    });
  });

  it('can be a block button or a normal button', () => {
    const openerButtonIsBlock = () => component.find('.btn-group').hasClass('btn-block');
    expect(openerButtonIsBlock()).toBe(true);
    component.setProps({ block: false });
    expect(openerButtonIsBlock()).toBe(false);
    component.setProps({ block: true });
    expect(openerButtonIsBlock()).toBe(true);
  });

  it('passes the given id forward to the button', () => {
    component.setProps({ id: 'some-id' });
    expect(component.find('button#some-id').type()).toBe('button');
  });

  it('renders separators', () => {
    component.setProps({
      options: [{ separator: true }],
    });
    openSelect();
    expect(findNthListElement(1).prop('className')).toBe('divider');
    expect(findNthListElement(1).children().length).toBe(0);
  });

  it('focuses on the search box once opened', async () => {
    component.setProps({ onSearchChange: jest.fn() });
    component.find('button.dropdown-toggle').simulate('click', fakeEvent());
    await bustStackAndUpdate();
    expect(component.find('input').prop('className')).toBe(document.activeElement.className);
  });

  it('ensures namespaced classNames can be provided and used ', () => {
    const styles = { 'dropdown-toggle': 'dropdown-toggle_TWISAWESOME125' };
    expect(component.find('.dropdown-toggle').exists()).toBe(true);

    component.setProps({ classNames: styles });
    expect(component.find('.dropdown-toggle').exists()).toBe(false);
    expect(component.find('.dropdown-toggle_TWISAWESOME125').exists()).toBe(true);
  });
});
