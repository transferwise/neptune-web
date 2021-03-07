import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Card from '.';

describe('Card', () => {
  const defaultProps = {
    title: 'A Card',
    details: 'Some details about this card',
    icon: <svg />,
    isExpanded: false,
    onClick: jest.fn(),
  };
  const children = <div />;
  const dataTestId = 'testCard';
  const renderCard = (props = {}) => {
    return render(<Card {...defaultProps} {...props} />);
  };

  it('renders as a div by default', () => {
    const { getByTestId } = renderCard({ 'data-testid': dataTestId });
    expect(getByTestId(dataTestId).tagName).toBe('DIV');
  });

  it('renders as a tag passed to it', () => {
    const { getByTestId } = renderCard({ as: 'li', 'data-testid': dataTestId });
    expect(getByTestId(dataTestId).tagName).toBe('LI');
  });

  it('adds the passed id to the card element', () => {
    const id = 'card-id';
    const { getByTestId } = renderCard({ id, 'data-testid': dataTestId });
    expect(getByTestId(dataTestId).id).toBe(id);
  });

  it('adds the passed className to the card element', () => {
    const className = 'card-class';
    const { getByTestId } = renderCard({ className, 'data-testid': dataTestId });
    expect(getByTestId(dataTestId).className.includes(className)).toBe(true);
  });

  it('renders the card title', () => {
    const { getByText } = renderCard();
    expect(getByText(defaultProps.title)).not.toBe(null);
  });

  it('renders the card details', () => {
    const { container } = renderCard();
    const panelBody = container.querySelector('.tw-card__panel .media-body');
    const { container: renderedCardDetails } = render(defaultProps.details);

    expect(panelBody.innerHTML.includes(renderedCardDetails.innerHTML)).toBe(true);
  });

  it('renders the card icon', () => {
    const { container } = renderCard();
    const iconWrapper = container.querySelector('.tw-card__panel .circle');
    const { container: renderedIcon } = render(defaultProps.icon);

    expect(iconWrapper.innerHTML).toEqual(renderedIcon.innerHTML);
  });

  describe('when there is no children prop', () => {
    it("doesn't have active class irrespective of isExpanded prop", () => {
      expect(activeClassCard()).toBe(null);
      cleanup();

      const expandedProps = { isExpanded: true };
      expect(activeClassCard(expandedProps)).toBe(null);
    });

    it('has an inactive toggle panel', () => {
      const { container } = renderCard();
      expect(container.querySelector('.tw-card__panel--inactive')).not.toBe(null);
    });

    it("doesn't call onClick when the toggle panel is clicked", () => {
      clickTogglePanel();
      expect(defaultProps.onClick).not.toBeCalled();
    });

    it("doesn't render a chevron", () => {
      expect(chevron()).toBe(null);
    });

    it("doesn't render content panel irrespective of isExpanded prop", () => {
      expect(contentPanel()).toBe(null);
      cleanup();

      const expandedProps = { isExpanded: true };
      expect(contentPanel(expandedProps)).toBe(null);
    });
  });

  describe('when there is children prop', () => {
    it('has active class when expanded', () => {
      const closedProps = { children };
      expect(activeClassCard(closedProps)).toBe(null);
      cleanup();

      const expandedProps = { children, isExpanded: true };
      expect(activeClassCard(expandedProps)).not.toBe(null);
    });

    it('calls on onClick with inverse of current isExpanded value when the toggle panel is clicked', () => {
      clickTogglePanel(true);
      expect(defaultProps.onClick).toBeCalledWith(!defaultProps.isExpanded);
    });

    it('renders a chevron', () => {
      expect(chevron({ children })).not.toBe(null);
    });

    it('flips chevron when expanded', () => {
      const closedProps = { children };
      expect(flippedChevron(closedProps)).toBe(null);
      cleanup();

      const expandedProps = { children, isExpanded: true };
      expect(flippedChevron(expandedProps)).not.toBe(null);
    });

    it('inverses media circle when expanded', () => {
      const closedProps = { children };
      expect(inversedMediaCircle(closedProps)).toBe(null);
      cleanup();

      const expandedProps = { children, isExpanded: true };
      expect(inversedMediaCircle(expandedProps)).not.toBe(null);
    });

    it('renders content panel when expanded', () => {
      const closedProps = { children };
      expect(contentPanel(closedProps)).toBe(null);
      cleanup();

      const expandedProps = { children, isExpanded: true };
      expect(contentPanel(expandedProps)).not.toBe(null);
    });

    it('renders children when expanded', () => {
      const { getByText, rerender } = render(
        <Card {...defaultProps} isExpanded={false}>
          Children
        </Card>,
      );

      expect(() => getByText('Children')).toThrow();

      rerender(
        <Card {...defaultProps} isExpanded>
          Children
        </Card>,
      );

      expect(() => getByText('Children')).not.toThrow();
    });
  });

  const activeClassCard = (renderProps) => {
    const { container } = renderCard(renderProps);
    return container.querySelector('.tw-card.active');
  };
  const clickTogglePanel = (withChildren) => {
    const props = withChildren ? { children } : {};
    const { container } = renderCard(props);
    const togglePanel = container.querySelector('.tw-card__panel');
    fireEvent.click(togglePanel);
  };
  const chevron = (renderProps) => {
    const { container } = renderCard(renderProps);
    return container.querySelector('.tw-icon-chevron-up.bottom');
  };
  const flippedChevron = (renderProps) => {
    const { container } = renderCard(renderProps);
    return container.querySelector('.tw-icon-chevron-up.top');
  };
  const contentPanel = (renderProps) => {
    const { container } = renderCard(renderProps);
    return container.querySelector('.p-l-panel');
  };
  const inversedMediaCircle = (renderProps) => {
    const { container } = renderCard(renderProps);
    return container.querySelector('.tw-card__panel .circle-inverse');
  };
});
