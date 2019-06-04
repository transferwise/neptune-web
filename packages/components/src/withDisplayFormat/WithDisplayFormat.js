import React from 'react';
import Types from 'prop-types';
import {
  formatWithPattern,
  getCountOfSymbolsInSelection,
  getCursorPositionAfterKeystroke,
  unformatWithPattern,
  getDistanceToPreviousSymbol,
  getDistanceToNextSymbol,
} from '../common/textFormat';

import { HistoryNavigator } from '../common';

class WithDisplayFormat extends React.Component {
  static propTypes = {
    /**
     * autocomplete hides our form help so we need to disable it when help text
     * is present. Chrome ignores autocomplete=off, the only way to disable it is
     * to provide an 'invalid' value, for which 'disabled' serves.
     */
    autoComplete: Types.oneOf(['on', 'off', 'disabled']),
    className: Types.string,
    disabled: Types.bool,
    id: Types.string,
    maxLength: Types.number,
    minLength: Types.number,
    name: Types.string,
    onChange: Types.func.isRequired,
    placeholder: Types.string,
    readOnly: Types.bool,
    render: Types.func.isRequired,
    required: Types.bool,
    displayPattern: Types.string,
    type: Types.string,
    value: Types.string,
  };

  static defaultProps = {
    autoComplete: 'off',
    className: '',
    disabled: false,
    id: null,
    maxLength: null,
    minLength: null,
    name: '',
    placeholder: '',
    readOnly: false,
    required: false,
    displayPattern: '',
    type: 'text',
    value: '',
  };

  constructor(props) {
    super(props);
    const { value, displayPattern } = props;
    const unformattedValue = unformatWithPattern(value, displayPattern);
    this.state = {
      value: formatWithPattern(unformattedValue, displayPattern),
      historyNavigator: new HistoryNavigator(),
      prevDisplayPattern: props.displayPattern,
      triggerType: null,
      triggerEvent: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { displayPattern } = nextProps;
    const { prevDisplayPattern } = prevState;
    if (prevState.prevDisplayPattern !== displayPattern) {
      const { value, historyNavigator } = prevState;

      const unFormattedValue = unformatWithPattern(value, prevDisplayPattern);
      historyNavigator.reset();

      return {
        prevDisplayPattern: displayPattern,
        value: formatWithPattern(unFormattedValue, displayPattern),
        triggerType: null,
        triggerEvent: null,
        pastedLength: 0,
      };
    }
    return null;
  }

  setCursorPosition = select => {
    const { triggerEvent } = this.state;
    setTimeout(() => {
      triggerEvent.target.setSelectionRange(select, select);
      this.setState({ selectionStart: select, selectionEnd: select });
    }, 0);
  };

  getUserAction = unformattedValue => {
    const { triggerEvent, triggerType, value } = this.state;
    const { displayPattern } = this.props;

    const charCode = String.fromCharCode(triggerEvent.which).toLowerCase();

    if (triggerType === 'Paste' || triggerType === 'Cut') {
      return triggerType;
    }

    if ((triggerEvent.ctrlKey || triggerEvent.metaKey) && charCode === 'z') {
      return triggerEvent.shiftKey ? 'Redo' : 'Undo';
    }
    // Detect mouse event redo
    if (triggerEvent.ctrlKey && charCode === 'd') {
      return 'Delete';
    }

    // Android Fix.
    if (typeof triggerEvent.key === 'undefined') {
      if (unformattedValue.length <= unformatWithPattern(value, displayPattern).length) {
        return 'Backspace';
      }
    }

    return triggerEvent.key;
  };

  resetEvent = () => {
    this.setState({
      triggerType: null,
      triggerEvent: null,
      pastedLength: 0,
    });
  };

  detectUndoRedo = event => {
    const charCode = String.fromCharCode(event.which).toLowerCase();
    if ((event.ctrlKey || event.metaKey) && charCode === 'z') {
      return event.shiftKey ? 'Redo' : 'Undo';
    }
    return null;
  };

  handleOnKeyDown = event => {
    event.persist();
    const { selectionStart, selectionEnd } = event.target;
    const { historyNavigator } = this.state;
    const { displayPattern } = this.props;

    // Unfortunately Undo and Redo don't trigger OnChange event so we need to handle some value logic here.
    let newFormattedValue = '';

    if (this.detectUndoRedo(event) === 'Undo') {
      newFormattedValue = formatWithPattern(historyNavigator.undo(), displayPattern);
      this.setState({ value: newFormattedValue, triggerType: 'Undo' });
    } else if (this.detectUndoRedo(event) === 'Redo') {
      newFormattedValue = formatWithPattern(historyNavigator.redo(), displayPattern);
      this.setState({ value: newFormattedValue, triggerType: 'Redo' });
    } else {
      this.setState({
        triggerEvent: event,
        triggerType: 'KeyDown',
        selectionStart,
        selectionEnd,
      });
    }
  };

  handleOnPaste = event => {
    const { displayPattern } = this.props;
    const pastedLength = unformatWithPattern(event.clipboardData.getData('Text'), displayPattern)
      .length;

    this.setState({ triggerType: 'Paste', pastedLength });
  };

  handleOnCut = () => {
    this.setState({ triggerType: 'Cut' });
  };

  isKeyAllowed = unformattedValue => {
    const action = this.getUserAction(unformattedValue);
    const { displayPattern } = this.props;
    const symbolsInPattern = displayPattern.split('').filter(character => character !== '*');

    return symbolsInPattern.indexOf(action) === -1;
  };

  handleOnChange = event => {
    const { historyNavigator, triggerType } = this.state;
    const { displayPattern, onChange } = this.props;
    const { value } = event.target;

    let unformattedValue = unformatWithPattern(value, displayPattern);
    if (!this.isKeyAllowed(unformattedValue) || triggerType === 'Undo' || triggerType === 'Redo') {
      return;
    }

    const action = this.getUserAction(unformattedValue);

    if (action === 'Backspace' || action === 'Delete') {
      unformattedValue = this.handleDelete(unformattedValue, action);
    }

    const newFormattedValue = formatWithPattern(unformattedValue, displayPattern);
    historyNavigator.add(unformattedValue);

    this.handleCursorPositioning(action);

    const broadcastValue = unformatWithPattern(newFormattedValue, displayPattern);

    this.setState({ value: newFormattedValue }, this.resetEvent(), onChange(broadcastValue));
  };

  handleDelete = (unformattedValue, action) => {
    const { displayPattern } = this.props;
    const { selectionStart, selectionEnd } = this.state;
    const newStack = [...unformattedValue];
    if (selectionStart === selectionEnd) {
      let startPosition =
        selectionStart - getCountOfSymbolsInSelection(0, selectionStart, displayPattern);
      let toDelete = 0;

      let count = getDistanceToNextSymbol(selectionStart, displayPattern);
      if (action === 'Backspace') {
        startPosition -= 1;
        count = getDistanceToPreviousSymbol(selectionStart, displayPattern);
      }

      if (startPosition >= 0 && count) {
        toDelete = 1;
      }

      newStack.splice(startPosition, toDelete);
    }

    return newStack.join('');
  };

  handleCursorPositioning = action => {
    const { displayPattern } = this.props;
    const { selectionStart, selectionEnd, pastedLength } = this.state;

    const cursorPosition = getCursorPositionAfterKeystroke(
      action,
      selectionStart,
      selectionEnd,
      displayPattern,
      pastedLength,
    );

    this.setCursorPosition(cursorPosition);
  };

  render() {
    const {
      type,
      className,
      id,
      name,
      placeholder,
      readOnly,
      required,
      minLength,
      maxLength,
      disabled,
      autoComplete,
    } = this.props;
    const { value } = this.state;
    const renderProps = {
      type,
      className,
      id,
      name,
      placeholder,
      readOnly,
      required,
      minLength,
      maxLength,
      disabled,
      autoComplete,
      value,
      onPaste: this.handleOnPaste,
      onKeyDown: this.handleOnKeyDown,
      onChange: this.handleOnChange,
      onCut: this.handleOnCut,
    };
    return this.props.render(renderProps);
  }
}

export default WithDisplayFormat;
