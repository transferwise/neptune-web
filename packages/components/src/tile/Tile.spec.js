import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Key } from '../common/key';

import Tile from '.';

describe(Tile, () => {
  const onClick = jest.fn();
  const defaultProps = {
    description: 'Receive money from friends and family like a local',
    href: '#href',
    media: <svg data-testid="illustration" />,
    onClick: () => onClick(),
    title: 'Receive money',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot when regular size', () => {
    const { asFragment } = render(<Tile {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot when small size', () => {
    const { asFragment } = render(<Tile size={Tile.Size.SMALL} {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onClick when anchor is clicked', () => {
    const { getByText } = render(<Tile {...defaultProps} />);

    const title = getByText('Receive money');

    expect(onClick).not.toHaveBeenCalled();

    fireEvent.click(title);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when space or enter keys are pressed', () => {
    const { getByText } = render(<Tile {...defaultProps} />);

    const title = getByText('Receive money');

    fireEvent.keyDown(title, { key: Key.ENTER });

    expect(onClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(title, { key: Key.SPACE[0] });

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it(`doesn't call onClick when disabled anchor is clicked`, () => {
    const { getByText } = render(<Tile {...defaultProps} disabled />);

    fireEvent.click(getByText('Receive money'));

    expect(onClick).not.toHaveBeenCalled();
  });

  it(`doesn't call onClick when space or enter keys are pressed on disabled anchor`, () => {
    const { getByText } = render(<Tile {...defaultProps} disabled />);

    const title = getByText('Receive money');

    fireEvent.keyDown(title, { key: Key.ENTER });

    expect(onClick).not.toHaveBeenCalled();

    fireEvent.keyDown(title, { key: Key.SPACE[0] });

    expect(onClick).not.toHaveBeenCalled();
  });
});
