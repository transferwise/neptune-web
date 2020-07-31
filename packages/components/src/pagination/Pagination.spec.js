import React from 'react';
import { render } from '@testing-library/react';

import { Pagination } from '..';

describe('Pagination', () => {
  let component;
  const props = {
    onClick: () => {},
  };

  describe('when there is one page', () => {
    beforeEach(() => {
      component = render(<Pagination {...props} numberOfPages={1} currentPageIndex={0} />);
    });

    it('should display three buttons', () => {
      expect(component.queryAllByRole('link').length).toBe(3);
    });

    it('should disable the left arrow', () => {
      expect(component.queryAllByRole('link')[0].className).toBe('disabled');
    });

    it('should activate the middle button', () => {
      expect(component.queryAllByRole('link')[1].className).toBe('active');
    });

    it('should disable the right arrow', () => {
      expect(component.queryAllByRole('link')[2].className).toBe('disabled');
    });
  });

  describe('when there are two pages', () => {
    describe('when the first page is selected', () => {
      beforeEach(() => {
        component = render(<Pagination {...props} numberOfPages={2} currentPageIndex={0} />);
      });

      it('should disable the left arrow', () => {
        expect(component.queryAllByRole('link')[0].className).toBe('disabled');
      });

      it('should activate the first button', () => {
        expect(component.queryAllByRole('link')[1].className).toBe('active');
      });

      it('should not activate the second button', () => {
        expect(component.queryAllByRole('link')[2].className).not.toBe('active');
      });

      it('should not disable the right arrow', () => {
        expect(component.queryAllByRole('link')[3].className).not.toBe('disabled');
      });
    });

    describe('when the second page is selected', () => {
      beforeEach(() => {
        component = render(<Pagination {...props} numberOfPages={2} currentPageIndex={1} />);
      });

      it('should not disable the left arrow', () => {
        expect(component.queryAllByRole('link')[0].className).not.toBe('disabled');
      });

      it('should not activate the first button', () => {
        expect(component.queryAllByRole('link')[1].className).not.toBe('active');
      });

      it('should activate the second button', () => {
        expect(component.queryAllByRole('link')[2].className).toBe('active');
      });

      it('should disable the right arrow', () => {
        expect(component.queryAllByRole('link')[3].className).toBe('disabled');
      });
    });
  });

  describe('when there are three pages and the second page is selected', () => {
    beforeEach(() => {
      component = render(<Pagination {...props} numberOfPages={3} currentPageIndex={1} />);
    });

    it('should display five buttons', () => {
      expect(component.queryAllByRole('link').length).toBe(5);
    });

    it('should not disable the left arrow', () => {
      expect(component.queryAllByRole('link')[0].className).not.toBe('disabled');
    });

    it('should not activate the first button', () => {
      expect(component.queryAllByRole('link')[1].className).not.toBe('active');
    });

    it('should activate the second button', () => {
      expect(component.queryAllByRole('link')[2].className).toBe('active');
    });

    it('should not activate the third button', () => {
      expect(component.queryAllByRole('link')[3].className).not.toBe('active');
    });

    it('should not disable the right arrow', () => {
      expect(component.queryAllByRole('link')[3].className).not.toBe('disabled');
    });
  });

  describe('when there are seven pages and the fourth is selected', () => {
    beforeEach(() => {
      component = render(<Pagination {...props} numberOfPages={9} currentPageIndex={4} />);
    });

    it('should display nine buttons', () => {
      expect(component.queryAllByRole('link').length).toBe(9);
    });

    it('should disable ... in the second button', () => {
      expect(component.queryAllByRole('link')[2].textContent).toBe('...');
    });

    it('should disable ... in the sixth button', () => {
      expect(component.queryAllByRole('link')[6].textContent).toBe('...');
    });
  });
});
