import React from 'react';
import { render, waitFor, fireEvent } from '../test-utils';
import Summary from './Summary';

describe('Summary', () => {
  it('renders minimal component', () => {
    const { asFragment } = render(<Summary icon={<strong>icon</strong>} title="Hello world" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders full component', async () => {
    let container;
    await waitFor(() => {
      ({ container } = render(
        <Summary
          action={{
            text: 'text',
            href: 'href',
            'aria-label': 'aria-label',
          }}
          description="description"
          info={{
            title: 'title',
            content: 'description',
            'aria-label': 'aria-label',
          }}
          icon={<strong>icon</strong>}
          status={Summary.Status.DONE}
          title="title"
        />,
      ));

      expect(container).toMatchSnapshot();
    });
  });

  describe('action', () => {
    const onClickStub = jest.fn();
    const props = {
      icon: <strong>icon</strong>,
      title: 'Hello world',
      action: {
        text: 'text',
        href: 'href',
        target: '_blank',
        onClick: onClickStub,
      },
    };

    it('sets target on the link', () => {
      const { getByText } = render(<Summary {...props} />);

      const el = getByText('text');
      expect(el).toHaveAttribute('target', props.action.target);
    });

    it('runs the onClick callback provided', () => {
      const { container } = render(<Summary {...props} />);

      fireEvent.click(container.querySelector('.np-summary__action'));

      expect(onClickStub).toBeCalledTimes(1);
    });
  });

  describe('statuses', () => {
    const props = {
      icon: <strong>icon</strong>,
      title: 'Hello world',
    };
    it('renders no badge by default', () => {
      const { container } = render(<Summary {...props} />);
      expect(container.querySelector('.np-summary-icon__pending')).not.toBeInTheDocument();
      expect(container.querySelector('.np-summary-icon__done')).not.toBeInTheDocument();
    });

    it('renders an aria-label and no badge for a not done status', () => {
      const { container, getByLabelText } = render(
        <Summary {...props} status={Summary.Status.NOT_DONE} />,
      );

      getByLabelText('Item to do');
      expect(container.querySelector('.np-summary-icon__pending')).not.toBeInTheDocument();
      expect(container.querySelector('.np-summary-icon__done')).not.toBeInTheDocument();
    });

    it('renders badge and aria-label for a pending status', () => {
      const { container, getByLabelText } = render(
        <Summary {...props} status={Summary.Status.PENDING} />,
      );

      getByLabelText('Item pending');
      expect(container.querySelector('.np-summary-icon__pending')).toBeInTheDocument();
    });

    it('renders badge and aria-label for a done status', () => {
      const { container, getByLabelText } = render(
        <Summary {...props} status={Summary.Status.DONE} />,
      );

      getByLabelText('Item done');
      expect(container.querySelector('.np-summary-icon__done')).toBeInTheDocument();
    });
  });
});
