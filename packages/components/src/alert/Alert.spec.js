/* eslint-disable no-console */
import React from 'react';
import {
  InfoCircle,
  CheckCircle,
  CrossCircle,
  Alert as AlertIcon,
  Emoji,
} from '@transferwise/icons';

import { render, cleanup, screen, userEvent } from '../test-utils';
import Alert from './Alert';

describe('Alert', () => {
  let component;
  let container;

  const renderIcon = (Icon) => render(<Icon size={24} />).container.innerHTML;

  const iconTypeMap = {
    [Alert.Type.POSITIVE]: renderIcon(CheckCircle),
    [Alert.Type.NEUTRAL]: renderIcon(InfoCircle),
    [Alert.Type.WARNING]: renderIcon(AlertIcon),
    [Alert.Type.NEGATIVE]: renderIcon(CrossCircle),
  };

  const classForType = (type) => `alert-${type}`;

  const message = 'Your card is on its way.';

  const origWarn = console.warn;
  let mockedWarn;

  beforeAll(() => {
    mockedWarn = jest.fn();
    console.warn = mockedWarn;
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  afterAll(() => {
    console.warn = origWarn;
  });

  describe('defaults', () => {
    beforeEach(() => {
      ({ container } = render(<Alert message={message} />));
      component = screen.getByRole('alert');
    });

    it('the message is rendered', () => {
      expect(screen.getByText(message)).toBeInTheDocument();
    });

    it('will be of type neutral', () => {
      expect(component).toHaveClass(classForType(Alert.Type.NEUTRAL));
      expect(component).toContainHTML(iconTypeMap[Alert.Type.NEUTRAL]);
    });

    it('is not dismissible', () => {
      expect(container.querySelector('button')).not.toBeInTheDocument();
    });

    it('has no arrow', () => {
      expect(component).not.toHaveClass('arrow');
    });
  });

  describe('deprecated props', () => {
    it('renders arrows but logs a warning', () => {
      render(<Alert arrow={Alert.ArrowPosition.BOTTOM} message={message} />);
      component = screen.getByRole('alert');

      expect(component).toHaveClass('arrow');
      expect(component).toHaveClass('arrow-bottom');
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('renders children but logs a warning', () => {
      render(<Alert>{message}</Alert>);

      expect(screen.getByText(message)).toBeInTheDocument();
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('dismissible is ignored and a warning is logged', () => {
      ({ container } = render(<Alert dismissible message={message} />));

      expect(container.querySelector('button')).not.toBeInTheDocument();
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('size is ignored and a warning is logged', () => {
      const { container: small } = render(<Alert size={Alert.Size.SMALL} message={message} />);
      const { container: large } = render(<Alert size={Alert.Size.LARGE} message={message} />);

      expect(small.innerHTML).toEqual(large.innerHTML);
      expect(mockedWarn).toHaveBeenCalledTimes(2);
    });

    it('maps type SUCCESS to type POSITIVE and logs a warning', () => {
      render(<Alert type={Alert.Type.SUCCESS} message={message} />);

      const success = screen.getByRole('alert');

      expect(success).toHaveClass(classForType(Alert.Type.POSITIVE));
      expect(success).toContainHTML(iconTypeMap[Alert.Type.POSITIVE]);
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('maps type INFO to type NEUTRAL and logs a warning', () => {
      render(<Alert type={Alert.Type.INFO} message={message} />);

      const info = screen.getByRole('alert');

      expect(info).toHaveClass(classForType(Alert.Type.NEUTRAL));
      expect(info).toContainHTML(iconTypeMap[Alert.Type.NEUTRAL]);
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('maps type ERROR to type NEGATIVE and logs a warning', () => {
      render(<Alert type={Alert.Type.ERROR} message={message} />);

      const error = screen.getByRole('alert');

      expect(error).toHaveClass(classForType(Alert.Type.NEGATIVE));
      expect(error).toContainHTML(iconTypeMap[Alert.Type.NEGATIVE]);
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });
  });

  describe('action', () => {
    it('sets text and href', () => {
      const action = {
        href: 'fluffykittens.com',
        text: 'Learn more',
      };
      render(<Alert action={action} message={message} />);

      const el = screen.getByText(action.text);

      expect(el).toHaveAttribute('href', action.href);
      expect(el).not.toHaveAttribute('aria-label');
      expect(el).not.toHaveAttribute('target');
    });

    it('adds additional attributes', () => {
      const action = {
        'aria-label': 'Learn more about fluffy kittens',
        href: 'fluffykittens.com',
        text: 'Learn more',
        target: '_blank',
      };
      render(<Alert action={action} message={message} />);

      const el = screen.getByText(action.text);

      expect(el).toHaveAttribute('aria-label', action['aria-label']);
      expect(el).toHaveAttribute('target', action.target);
    });
  });

  describe('markdown support', () => {
    const input = 'That is one **bold cat**';
    const output = 'That is one <strong>bold cat</strong>';

    it('converts message to markdown', () => {
      render(<Alert message={input} />);

      expect(screen.getByRole('alert')).toContainHTML(output);
    });

    it('does not convert children to markdown', () => {
      render(<Alert>{input}</Alert>);

      expect(screen.getByText(input)).toBeInTheDocument();
      expect(screen.getByRole('alert')).not.toContainHTML(output);
    });
  });

  describe('className', () => {
    it('applies provided classes', () => {
      render(<Alert className="cats" message={message} />);

      expect(screen.getByRole('alert')).toHaveClass('cats');
    });
  });

  describe('custom icon', () => {
    it('uses any provided icon in preference to the default', () => {
      const icon = <Emoji size={24} />;
      const iconHTML = renderIcon(Emoji);

      render(<Alert icon={icon} message={message} />);
      component = screen.getByRole('alert');

      expect(component).toContainHTML(iconHTML);
      expect(component).not.toContainHTML(iconTypeMap[Alert.Type.NEGATIVE]);
    });
  });

  describe('onDismiss', () => {
    it('renders the close button if onDismiss is provided', () => {
      render(<Alert onDismiss={jest.fn()} message={message} />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onDismiss when the close button is clicked', () => {
      const onDismiss = jest.fn();

      render(<Alert onDismiss={onDismiss} message={message} />);

      userEvent.click(screen.getByRole('button'));

      expect(onDismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe('types', () => {
    const getComponentWithType = (type) => {
      render(<Alert type={type} message={message} />);
      return screen.getByRole('alert');
    };

    it('renders neutral', () => {
      component = getComponentWithType(Alert.Type.NEUTRAL);

      expect(component).toHaveClass(classForType(Alert.Type.NEUTRAL));
      expect(component).toContainHTML(iconTypeMap[Alert.Type.NEUTRAL]);
    });

    it('renders positive', () => {
      component = getComponentWithType(Alert.Type.POSITIVE);

      expect(component).toHaveClass(classForType(Alert.Type.POSITIVE));
      expect(component).toContainHTML(iconTypeMap[Alert.Type.POSITIVE]);
    });

    it('renders negative', () => {
      component = getComponentWithType(Alert.Type.NEGATIVE);

      expect(component).toHaveClass(classForType(Alert.Type.NEGATIVE));
      expect(component).toContainHTML(iconTypeMap[Alert.Type.NEGATIVE]);
    });

    it('renders warning', () => {
      component = getComponentWithType(Alert.Type.WARNING);

      expect(component).toHaveClass(classForType(Alert.Type.WARNING));
      expect(component).toContainHTML(iconTypeMap[Alert.Type.WARNING]);
    });
  });
});
