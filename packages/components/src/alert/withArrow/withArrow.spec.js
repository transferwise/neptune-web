import React from 'react';
import { render, getByRole } from '@testing-library/react';
import withArrow, { ArrowPosition } from './withArrow';
import Alert from '../Alert';

describe('withArrow', () => {
  let container;
  let component;
  const message = 'I hope you have a nice day today';

  const getAlert = (el) => getByRole(el, 'alert');

  describe('default props', () => {
    it(`returns an arrowless alert if you don't pass an arrow`, () => {
      const ArrowLessAlert = withArrow(Alert);

      ({ container } = render(<ArrowLessAlert message={message} />));
      component = getAlert(container);

      expect(component.className).not.toContain('arrow');
    });

    it(`ignores the arrow prop passed to the new alert`, () => {
      const AlertTopArrow = withArrow(Alert, ArrowPosition.TOP_LEFT);

      ({ container } = render(
        <AlertTopArrow message={message} arrow={ArrowPosition.BOTTOM_LEFT} />,
      ));
      component = getAlert(container);
      expect(component.className).toContain('arrow');
      expect(component.className).not.toContain('arrow-bottom');
    });
  });

  describe('renders arrows', () => {
    const getPointyAlert = (arrow) => withArrow(Alert, arrow);

    it(`returns an bottom arrowed alert if you pass a bottom arrow`, () => {
      const BottomArrowAlert = getPointyAlert(ArrowPosition.BOTTOM);
      ({ container } = render(<BottomArrowAlert message={message} />));
      component = getAlert(container);

      expect(component.className).toContain('arrow');
      expect(component.className).toContain('arrow-bottom');
    });

    it(`returns an top-right arrowed alert if you pass a top right arrow`, () => {
      const BottomArrowAlert = getPointyAlert(ArrowPosition.TOP_RIGHT);
      ({ container } = render(<BottomArrowAlert message={message} />));
      component = getAlert(container);

      expect(component.className).toContain('arrow');
      expect(component.className).toContain('arrow-right');
    });
  });
});
