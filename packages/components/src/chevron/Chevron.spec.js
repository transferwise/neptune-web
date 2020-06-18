import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Chevron from '.';

const { Orientation } = Chevron;

describe('Chevron', () => {
  describe('test rotation', () => {
    it('top', () => {
      const { container } = render(<Chevron orientation={Orientation.TOP} />);

      expect(container.querySelector('.tw-icon-chevron-up.top')).not.toBe(null);
    });

    it('right', () => {
      const { container } = render(<Chevron orientation={Orientation.RIGHT} />);

      expect(container.querySelector('.tw-icon-chevron-up.right')).not.toBe(null);
    });

    it('left', () => {
      const { container } = render(<Chevron orientation={Orientation.LEFT} />);

      expect(container.querySelector('.tw-icon-chevron-up.left')).not.toBe(null);
    });

    it('down (default)', () => {
      const { container } = render(<Chevron />);

      expect(container.querySelector('.tw-icon-chevron-up.bottom')).not.toBe(null);
    });
  });

  describe('disabled / enabled states', () => {
    it('enabled (by default)', () => {
      const { container } = render(<Chevron />);

      expect(container.querySelector('.tw-icon-chevron-up')).toHaveClass('chevron-color');
    });

    it('disabled', () => {
      const { container } = render(<Chevron disabled />);

      expect(container.querySelector('.tw-icon-chevron-up')).not.toHaveClass('chevron-color');
    });
  });
});
