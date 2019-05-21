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

import { HistoryNavigator } from './utils';

class InputWithTextFormat extends React.Component {
  static propTypes = {
    pattern: Types.string,
    className: Types.string,
    placeholder: Types.string,
    onChange: Types.func.isRequired,
    value: Types.string,
  };

  static defaultProps = {
    className: '',
    pattern: '',
    placeholder: '',
    value: '',
  };

  constructor(props) {
    super(props);
    const { value, pattern } = props;
    const unformattedValue = unformatWithPattern(value, pattern);
    this.input = React.createRef();
    this.state = {
      value: formatWithPattern(unformattedValue, pattern),
      historyNavigator: new HistoryNavigator(),
      prevPattern: props.pattern,
      triggerType: null,
      triggerEvent: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevPattern !== nextProps.pattern) {
      const { value, prevPattern, historyNavigator } = prevState;
      const { pattern } = nextProps;
      const unFormattedValue = unformatWithPattern(value, prevPattern);
      historyNavigator.reset();

      return {
        prevPattern: pattern,
        value: formatWithPattern(unFormattedValue, pattern),
        triggerType: null,
        triggerEvent: null,
        pastedLength: 0,
      };
    }
    return null;
  }

  setCursorPosition = select => {
    setTimeout(() => {
      this.input.current.setSelectionRange(select, select);
      this.setState({ selectionStart: select, selectionEnd: select });
    }, 0);
  };

  getUserAction = unformattedValue => {
    const { triggerEvent, triggerType, value } = this.state;
    const { pattern } = this.props;

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
      if (unformattedValue.length <= unformatWithPattern(value, pattern).length) {
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
    const { selectionStart, selectionEnd } = this.input.current;
    const { historyNavigator } = this.state;
    const { pattern } = this.props;

    // Unfortunately Undo and Redo don't trigger OnChange event so we need to handle some value logic here.
    let newFormattedValue = '';

    if (this.detectUndoRedo(event) === 'Undo') {
      newFormattedValue = formatWithPattern(historyNavigator.undo(), pattern);
      this.setState({ value: newFormattedValue, triggerType: 'Undo' });
    } else if (this.detectUndoRedo(event) === 'Redo') {
      newFormattedValue = formatWithPattern(historyNavigator.redo(), pattern);
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
    const { pattern } = this.props;
    const pastedLength = unformatWithPattern(event.clipboardData.getData('Text'), pattern).length;

    this.setState({ triggerType: 'Paste', pastedLength });
  };

  handleOnCut = () => {
    this.setState({ triggerType: 'Cut' });
  };

  isKeyAllowed = unformattedValue => {
    const action = this.getUserAction(unformattedValue);
    const { pattern } = this.props;
    const symbolsInPattern = pattern.split('').filter(character => character !== '*');

    return symbolsInPattern.indexOf(action) === -1;
  };

  handleOnChange = event => {
    const { historyNavigator, triggerType } = this.state;
    const { pattern, onChange } = this.props;
    const { value } = event.target;

    let unformattedValue = unformatWithPattern(value, pattern);
    if (!this.isKeyAllowed(unformattedValue) || triggerType === 'Undo' || triggerType === 'Redo') {
      return;
    }

    const action = this.getUserAction(unformattedValue);

    if (action === 'Backspace' || action === 'Delete') {
      unformattedValue = this.handleDelete(unformattedValue, action);
    }

    const newFormattedValue = formatWithPattern(unformattedValue, pattern);
    historyNavigator.add(unformattedValue);

    this.handleCursorPositioning(action);

    const broadcastValue = unformatWithPattern(newFormattedValue, pattern);

    this.setState({ value: newFormattedValue }, this.resetEvent(), onChange(broadcastValue));
  };

  handleDelete = (unformattedValue, action) => {
    const { pattern } = this.props;
    const { selectionStart, selectionEnd } = this.state;
    const newStack = [...unformattedValue];
    if (selectionStart === selectionEnd) {
      let startPosition = selectionStart - getCountOfSymbolsInSelection(0, selectionStart, pattern);
      let toDelete = 0;

      let count = getDistanceToNextSymbol(selectionStart, pattern);
      if (action === 'Backspace') {
        startPosition -= 1;
        count = getDistanceToPreviousSymbol(selectionStart, pattern);
      }

      if (startPosition >= 0 && count) {
        toDelete = 1;
      }

      newStack.splice(startPosition, toDelete);
    }

    return newStack.join('');
  };

  handleCursorPositioning = action => {
    const { pattern } = this.props;
    const { selectionStart, selectionEnd, pastedLength } = this.state;

    const cursorPosition = getCursorPositionAfterKeystroke(
      action,
      selectionStart,
      selectionEnd,
      pattern,
      pastedLength,
    );

    this.setCursorPosition(cursorPosition);
  };

  render() {
    const { placeholder, className } = this.props;
    const { value } = this.state;

    return (
      <input
        ref={this.input}
        className={className}
        value={value}
        placeholder={placeholder}
        onPaste={this.handleOnPaste}
        onKeyDown={this.handleOnKeyDown}
        onChange={ev => this.handleOnChange(ev)}
        onCut={this.handleOnCut}
      />
    );
  }
}

export default InputWithTextFormat;
