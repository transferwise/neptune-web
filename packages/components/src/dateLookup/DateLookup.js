import React, { PureComponent } from 'react';
import Types from 'prop-types';

import KeyCodes from '../common/keyCodes';
import { isWithinRange, moveToWithinRange } from '../common/dateUtils';
import { getStartOfDay } from './getStartOfDay';

import OpenButton from './openButton';
import DayCalendar from './dayCalendar';
import MonthCalendar from './monthCalendar';
import YearCalendar from './yearCalendar';

const MODE = {
  DAY: 'day',
  MONTH: 'month',
  YEAR: 'year',
};

class DateLookup extends PureComponent {
  static propTypes = {
    value: Types.instanceOf(Date),
    min: Types.instanceOf(Date),
    max: Types.instanceOf(Date),
    size: Types.oneOf(['sm', 'md', 'lg']),
    locale: Types.string,
    placeholder: Types.string,
    label: Types.string,
    shortDate: Types.bool,
    disabled: Types.bool,
    onChange: Types.func.isRequired,
    onFocus: Types.func,
    onBlur: Types.func,
  };

  static defaultProps = {
    value: null,
    min: null,
    max: null,
    size: 'md',
    locale: 'en-GB',
    placeholder: '',
    label: '',
    shortDate: false,
    disabled: false,
    onFocus: null,
    onBlur: null,
  };

  state = {
    selectedDate: getStartOfDay(this.props.value),
    min: getStartOfDay(this.props.min),
    max: getStartOfDay(this.props.max),
    viewMonth: (this.props.value || new Date()).getMonth(),
    viewYear: (this.props.value || new Date()).getFullYear(),
    open: false,
    mode: MODE.DAY,
  };

  static getDerivedStateFromProps(props, state) {
    const propsSelected = getStartOfDay(props.value);
    const propsMin = getStartOfDay(props.min);
    const propsMax = getStartOfDay(props.max);
    const hasSelectedChanged = +state.selectedDate !== +propsSelected;
    const hasMinChanged = +state.min !== +propsMin;
    const hasMaxChanged = +state.max !== +propsMax;
    if (hasSelectedChanged || hasMinChanged || hasMaxChanged) {
      const selectedDate = hasSelectedChanged ? propsSelected : state.selectedDate;
      const min = hasMinChanged ? propsMin : state.min;
      const max = hasMaxChanged ? propsMax : state.max;
      // make sure that selected date is within allowed range
      if (!isWithinRange(selectedDate, min, max)) {
        props.onChange(moveToWithinRange(selectedDate, min, max));
        return null;
      }
      const viewMonth = (selectedDate || new Date()).getMonth();
      const viewYear = (selectedDate || new Date()).getFullYear();
      return { selectedDate, min, max, viewMonth, viewYear };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (+this.props.value !== +prevProps.value && this.state.open) {
      this.focusOn('.active');
    }
  }

  element = React.createRef();

  open = () => {
    const { onFocus } = this.props;
    this.setState({ open: true, mode: MODE.DAY }, () => {
      this.focusOn('.tw-date-lookup-header-current');
    });
    if (onFocus) {
      onFocus();
    }

    document.addEventListener('click', this.handleOutsideClick, true);
  };

  close = () => {
    const { onBlur } = this.props;
    this.setState({ open: false });
    if (onBlur) {
      onBlur();
    }
    document.removeEventListener('click', this.handleOutsideClick, true);
  };

  handleOutsideClick = event => {
    if (!this.state.open) return;
    const dropdown = this.element.current.querySelector('.dropdown-menu');
    if (dropdown && !dropdown.contains(event.target)) this.close();
  };

  handleKeyDown = event => {
    const { open } = this.state;
    switch (event.keyCode) {
      case KeyCodes.LEFT:
        if (open) {
          this.adjustDate(-1, -1, -1);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.UP:
        if (open) {
          this.adjustDate(-7, -4, -4);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.RIGHT:
        if (open) {
          this.adjustDate(1, 1, 1);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.DOWN:
        if (open) {
          this.adjustDate(7, 4, 4);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.ESCAPE:
        this.close();
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  adjustDate = (daysToAdd, monthsToAdd, yearsToAdd) => {
    const { selectedDate, min, max, mode } = this.state;
    let date;
    if (selectedDate) {
      date = new Date(
        mode === MODE.YEAR ? selectedDate.getFullYear() + yearsToAdd : selectedDate.getFullYear(),
        mode === MODE.MONTH ? selectedDate.getMonth() + monthsToAdd : selectedDate.getMonth(),
        mode === MODE.DAY ? selectedDate.getDate() + daysToAdd : selectedDate.getDate(),
      );
    } else {
      date = getStartOfDay(new Date());
    }
    date = moveToWithinRange(date, min, max);
    if (+date !== +selectedDate) this.props.onChange(date);
  };

  focusOn = (preferredElement, fallbackElement) => {
    const el = this.element.current.querySelector(preferredElement);
    if (el) el.focus();
    else if (fallbackElement) this.focusOn(fallbackElement);
  };

  switchMode = mode => {
    this.setState({ mode }, () => {
      this.focusOn('.active', '.today');
    });
  };

  switchToDays = () => this.switchMode(MODE.DAY);

  switchToMonths = () => this.switchMode(MODE.MONTH);

  switchToYears = () => this.switchMode(MODE.YEAR);

  handleSelectedDateUpdate = selectedDate => {
    this.setState({ selectedDate }, () => {
      this.props.onChange(selectedDate);
      this.close();
      this.focusOn('.btn');
    });
  };

  handleViewDateUpdate = ({ month = this.state.viewMonth, year = this.state.viewYear }) => {
    this.setState({ viewMonth: month, viewYear: year });
  };

  render() {
    const { selectedDate, min, max, viewMonth, viewYear, open, mode } = this.state;
    const { size, locale, placeholder, label, shortDate, disabled } = this.props;
    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        ref={this.element}
        className={`btn-group btn-block dropdown ${open ? 'open' : ''}`}
        onKeyDown={this.handleKeyDown}
      >
        <OpenButton
          {...{ selectedDate, size, locale, placeholder, label, shortDate, disabled }}
          onClick={this.open}
        />
        {open && (
          <div className="dropdown-menu">
            {mode === MODE.DAY && (
              <DayCalendar
                {...{ selectedDate, min, max, viewMonth, viewYear, locale, shortDate }}
                onSelect={this.handleSelectedDateUpdate}
                onLabelClick={this.switchToYears}
                onViewDateUpdate={this.handleViewDateUpdate}
              />
            )}
            {mode === MODE.MONTH && (
              <MonthCalendar
                {...{ selectedDate, min, max, viewYear, locale, placeholder }}
                onSelect={this.switchToDays}
                onLabelClick={this.switchToYears}
                onViewDateUpdate={this.handleViewDateUpdate}
              />
            )}
            {mode === MODE.YEAR && (
              <YearCalendar
                {...{ selectedDate, min, max, viewYear, locale, placeholder }}
                onSelect={this.switchToMonths}
                onViewDateUpdate={this.handleViewDateUpdate}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default DateLookup;
