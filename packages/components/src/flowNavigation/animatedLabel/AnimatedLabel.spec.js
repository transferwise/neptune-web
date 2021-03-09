import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import AnimatedLabel from '.';

const props = {
  activeLabel: 0,
  labels: ['label1', 'label2', 'label3'],
};
jest.useFakeTimers();
describe('AnimatedLabel', () => {
  it(`renders all labels`, () => {
    const { container } = render(<AnimatedLabel {...props} />);
    expect(container).toMatchSnapshot();
  });

  it(`renders only one label with class in`, () => {
    const { container, getByText } = render(<AnimatedLabel {...props} />);
    expect(getByText(props.labels[0])).toHaveClass('np-animated-label--in');
    expect(container.querySelectorAll('.np-animated-label--in')).toHaveLength(1);
  });

  it(`renders only one label with class out`, () => {
    const { container, getByText } = render(<AnimatedLabel {...props} />);
    expect(getByText(props.labels[1])).toHaveClass('np-animated-label--out');
    expect(container.querySelectorAll('.np-animated-label--out')).toHaveLength(1);
  });

  it(`when activeLabel increase it switches class accordingly`, () => {
    const { getByText, rerender } = render(<AnimatedLabel {...props} />);
    expect(getByText(props.labels[0])).toHaveClass('np-animated-label--in');
    expect(getByText(props.labels[1])).toHaveClass('np-animated-label--out');

    expect(getByText(props.labels[2])).not.toHaveClass('np-animated-label--out');
    expect(getByText(props.labels[2])).not.toHaveClass('np-animated-label--in');

    rerender(<AnimatedLabel {...props} activeLabel={1} />);

    expect(getByText(props.labels[0])).not.toHaveClass('np-animated-label--out');
    expect(getByText(props.labels[0])).not.toHaveClass('np-animated-label--in');

    expect(getByText(props.labels[1])).toHaveClass('np-animated-label--in');
    expect(getByText(props.labels[2])).toHaveClass('np-animated-label--out');
  });

  it(`when activeLabel decrease it switches class accordingly`, () => {
    const { getByText, rerender } = render(<AnimatedLabel {...props} activeLabel={1} />);
    expect(getByText(props.labels[1])).toHaveClass('np-animated-label--in');
    expect(getByText(props.labels[2])).toHaveClass('np-animated-label--out');

    expect(getByText(props.labels[0])).not.toHaveClass('np-animated-label--out');
    expect(getByText(props.labels[0])).not.toHaveClass('np-animated-label--in');

    rerender(<AnimatedLabel {...props} activeLabel={0} />);

    expect(getByText(props.labels[0])).toHaveClass('np-animated-label--in');
    expect(getByText(props.labels[1])).toHaveClass('np-animated-label--out');

    expect(getByText(props.labels[2])).not.toHaveClass('np-animated-label--out');
    expect(getByText(props.labels[2])).not.toHaveClass('np-animated-label--in');
  });
});
