import React from 'react';
import Transition from 'react-transition-group/Transition';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { render } from '../test-utils';

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

    describe('when options contain searchables', () => {
      let component;
      let input;

      const searchableOptions = [
        {
          value: 0,
          label: 'first_label',
          note: 'first_note',
          secondary: 'first_secondary',
          currency: 'gbp',
          searchStrings: ['first_search_string'],
        },
        {
          value: 1,
          label: 'second_label',
          note: 'second_note',
          secondary: 'second_secondary',
          currency: 'usd',
          searchStrings: ['second_search_string'],
        },
        {
          value: 2,
          label: 'third_label',
          note: 'third_note',
          secondary: 'third_secondary',
          currency: 'eur',
          searchStrings: ['third_search_string'],
        },
      ];

      beforeEach(async () => {
        component = render(<Select {...props} options={searchableOptions} search />);

        openSelect(component.container);
        await bustStackAndUpdate();

        input = component.getByPlaceholderText('Search...');
      });

      describe('when searching by label', () => {
        it('should display the search result', () => {
          user.type(input, 'second_label');

          expect(component.queryAllByText('first_label')).toHaveLength(0);
          expect(component.queryAllByText('second_label')).toHaveLength(1);
          expect(component.queryAllByText('third_label')).toHaveLength(0);
        });
      });

      describe('when searching by note', () => {
        it('should display the search result', () => {
          user.type(input, 'third_note');

          expect(component.queryAllByText('first_label')).toHaveLength(0);
          expect(component.queryAllByText('second_label')).toHaveLength(0);
          expect(component.queryAllByText('third_label')).toHaveLength(1);
        });
      });

      describe('when searching by secondary', () => {
        it('should display the search result', () => {
          user.type(input, 'first_secondary');

          expect(component.queryAllByText('first_label')).toHaveLength(1);
          expect(component.queryAllByText('second_label')).toHaveLength(0);
          expect(component.queryAllByText('third_label')).toHaveLength(0);
        });
      });

      describe('when searching by currency', () => {
        it('should display the search result', () => {
          user.type(input, 'usd');

          expect(component.queryAllByText('first_label')).toHaveLength(0);
          expect(component.queryAllByText('second_label')).toHaveLength(1);
          expect(component.queryAllByText('third_label')).toHaveLength(0);
        });
      });

      describe('when searching by searchStrings', () => {
        it('should display the search result', () => {
          user.type(input, 'third_search_string');

          expect(component.queryAllByText('first_label')).toHaveLength(0);
          expect(component.queryAllByText('second_label')).toHaveLength(0);
          expect(component.queryAllByText('third_label')).toHaveLength(1);
        });
      });
    });

    it('should filter the options with the default filter function in their currency attributum', async () => {
      const { container, getByPlaceholderText, getByText } = render(
        <Select
          {...props}
          search
          options={[
            { value: 0, label: 'Hungarian forint', currency: 'HUF' },
            { value: 1, label: 'British pound', currency: 'GBP' },
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
      expect(getByText('Hungarian forint').parentElement.parentElement).toHaveClass(
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
