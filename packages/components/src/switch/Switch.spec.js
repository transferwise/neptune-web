import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

import KeyCodes from '../common/keyCodes';

const props = {
  checked: true,
  onClick: jest.fn(),
  id: 'id',
  className: 'a-class-name',
};

describe('Switch', () => {
  it('renders component when checked', () => {
    const { asFragment } = render(<Switch {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders component when unchecked', () => {
    const { asFragment } = render(<Switch {...props} checked={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onClick when user press space key', () => {
    const { getAllByRole } = render(<Switch {...props} />);

    const input = getAllByRole('checkbox')[0];
    fireEvent.keyDown(input, { key: '33', keyCode: KeyCodes.ENTER });
    expect(props.onClick).not.toHaveBeenCalled();
    fireEvent.keyDown(input, { key: '32', keyCode: KeyCodes.SPACE });
    expect(props.onClick).toHaveBeenCalled();
  });
});
