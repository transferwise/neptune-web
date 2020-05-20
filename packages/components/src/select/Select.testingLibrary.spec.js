import React from 'react';
import Transition from 'react-transition-group/Transition';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';

import Select from '.';

jest.mock('react-transition-group/Transition', () => jest.fn('placeholder'));

describe('Select', () => {
  const props = {
    onChange: jest.fn(),
    options: [
      { value: 0, label: 'yo' },
      { value: 1, label: 'dawg' },
      { value: 2, label: 'boi' },
    ],
  };

  beforeEach(() => {
    // Need to reset innerWidth for portal tests
    window.innerWidth = 1024;
    window.matchMedia = () => {
      return { matches: false };
    };

    Transition.mockImplementation((properties) => {
      const ActualTransition = jest.requireActual('react-transition-group/Transition').default;
      return <ActualTransition {...properties} timeout={0} />;
    });
    jest.clearAllMocks();
  });

  const bustStackAndUpdate = async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  };

  const openSelect = (container) => {
    const button = container.querySelector('button');
    user.click(button);
  };

  describe('search property', () => {
    it('should focus input when dropdown is open', async () => {
      const { container, getByPlaceholderText } = render(<Select {...props} search />);

      openSelect(container);
      await bustStackAndUpdate();
      const input = getByPlaceholderText('Search...');

      expect(input).toHaveFocus();
    });

    it('should filter the options with the default filter function', async () => {
      const { container, getByPlaceholderText, getAllByText } = render(
        <Select {...props} search />,
      );

      openSelect(container);
      await bustStackAndUpdate();
      const input = getByPlaceholderText('Search...');
      user.type(input, 'yo');

      // Not ideal, this higlights accessibility issues.
      expect(container.querySelector('.tw-dropdown-item.tw-dropdown-item--focused')).toEqual(
        container.querySelector('.tw-dropdown-item'),
      );
      expect(getAllByText('yo')).toHaveLength(1);
    });

    it('should filter the options with the default filter function in their currency attributum', async () => {
      const { container, getByPlaceholderText, getByText } = render(
        <Select
          {...props}
          search
          options={[
            { value: 0, label: 'Hungarian Forint', currency: 'HUF' },
            { value: 1, label: 'British Pounds', currency: 'GBP' },
          ]}
        />,
      );

      openSelect(container);
      await bustStackAndUpdate();
      const input = getByPlaceholderText('Search...');
      user.type(input, 'HUF');

      expect(container.querySelector('.tw-dropdown-item.tw-dropdown-item--focused')).toEqual(
        container.querySelector('.tw-dropdown-item'),
      );
      expect(getByText('Hungarian Forint').parentElement.parentElement).toHaveClass(
        'tw-dropdown-item tw-dropdown-item--clickable tw-dropdown-item--focused',
      );
    });

    it('should include searchable strings in option search if present', async () => {
      const { container, getByPlaceholderText, getByText } = render(
        <Select
          {...props}
          search
          options={[
            { value: 0, label: 'Estonia', searchStrings: ['EE', 'Tallinn'] },
            { value: 1, label: 'United States of America', searchStrings: ['US', 'USA', 'DC'] },
          ]}
        />,
      );

      openSelect(container);
      await bustStackAndUpdate();
      const input = getByPlaceholderText('Search...');
      user.type(input, 'Tallinn');

      expect(container.querySelector('.tw-dropdown-item.tw-dropdown-item--focused')).toEqual(
        container.querySelector('.tw-dropdown-item'),
      );
      expect(getByText('Estonia').parentElement.parentElement).toHaveClass(
        'tw-dropdown-item tw-dropdown-item--clickable tw-dropdown-item--focused',
      );
    });

    it('should filter the options with a custom search function', async () => {
      const searchFunction = jest.fn();
      const { container, getByPlaceholderText } = render(
        <Select {...props} search={searchFunction} />,
      );
      openSelect(container);
      await bustStackAndUpdate();
      const input = getByPlaceholderText('Search...');
      user.type(input, 'o');

      expect(searchFunction).toHaveBeenCalledTimes(3);
    });

    it('should filter the options with a custom search function', async () => {
      const searchFunction = jest.fn();
      searchFunction.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(true);
      const { container, getByPlaceholderText, getByRole } = render(
        <Select {...props} search={searchFunction} />,
      );
      openSelect(container);
      await bustStackAndUpdate();

      const input = getByPlaceholderText('Search...');
      user.type(input, 'o');

      expect(getByRole('menu').children).toHaveLength(3);
    });
  });

  it("on touch device doesn't focus on the search box once opened", async () => {
    window.matchMedia = () => {
      return { matches: true };
    };
    const { container, getByPlaceholderText } = render(
      <Select {...props} onSearchChange={jest.fn()} />,
    );

    openSelect(container);
    await bustStackAndUpdate();
    const input = getByPlaceholderText('Search...');

    expect(input).not.toHaveFocus();
  });

  it('on not touch device focuses on the search box once opened', async () => {
    const { container, getByPlaceholderText } = render(
      <Select {...props} search onSearchChange={jest.fn()} />,
    );

    openSelect(container);
    await bustStackAndUpdate();
    const input = getByPlaceholderText('Search...');

    expect(input).toHaveFocus();
  });
});
