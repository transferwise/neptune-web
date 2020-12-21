import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Nudge from '.';

describe('Nudge', () => {
  const defaultProps = {
    media: (
      <span role="img" aria-label="Party popper emoji">
        🎉
      </span>
    ),
    title: 'A nudge title',
    link: 'CTA',
    href: '#',
    onDismiss: jest.fn(),
  };

  afterEach(cleanup);

  it('renders a media element', () => {
    const { getByRole } = render(<Nudge {...defaultProps} />);
    const media = getByRole('img');
    expect(media).toBeDefined();
  });

  it('renders a title', () => {
    const { getByText } = render(<Nudge {...defaultProps} />);
    const title = getByText('A nudge title');
    expect(title).toBeDefined();
  });

  it('renders a link to the passed href', () => {
    const { getByText } = render(<Nudge {...defaultProps} />);
    const link = getByText('CTA');
    expect(link).toBeDefined();
    expect(link.getAttribute('href')).toBe(defaultProps.href);
  });

  it('calls onDismiss prop when close button is clicked', () => {
    const { getByLabelText } = render(<Nudge {...defaultProps} />);
    const closeButton = getByLabelText('close');
    fireEvent.click(closeButton);
    expect(defaultProps.onDismiss).toHaveBeenCalled();
  });

  it('adds the passed id to the parent container', () => {
    const { getByRole } = render(<Nudge {...defaultProps} id="nudge-id" />);
    const parentContainer = getByRole('img').parentElement.parentElement;
    expect(parentContainer.id).toBe('nudge-id');
  });

  it(`adds the passed className to the parent container's className`, () => {
    const { getByRole } = render(<Nudge {...defaultProps} className="happy-nudge" />);
    const parentContainer = getByRole('img').parentElement.parentElement;
    expect(parentContainer).toHaveClass('happy-nudge');
  });
});
