import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, date, text } from '@storybook/addon-knobs';
import DateInput from './DateInput';

export default {
  component: DateInput,
  title: 'DateInput',
};

export const basic = () => {
  const disabled = boolean('disabled', false);
  const size = select('size', Object.values(DateInput.Size), DateInput.Size.MEDIUM);
  const monthFormat = select(
    'monthFormat',
    Object.values(DateInput.MonthFormat),
    DateInput.MonthFormat.LONG,
  );
  const mode = select('mode', Object.values(DateInput.DateMode), DateInput.DateMode.DAY_MONTH_YEAR);
  const useInitialValue = boolean('useInitialValue', false);
  const initialValue = date('initialValue', new Date('2020-01-01'));
  const day = text('dayPlacheholder', 'DD');
  const month = text('monthPlaceholder', 'Select an option...');
  const year = text('yearPlaceholder', 'YYYY');
  const value = useInitialValue ? new Date(initialValue) : null;

  const { changeLog, appendToLog } = useChangeLog();
  React.useLayoutEffect(() => {
    appendToLog(`DateInput key={${value}} ... />`);
  }, [useInitialValue, initialValue]);

  return (
    <>
      <DateInput
        onChange={(val) => {
          appendToLog(` onChange: ${val}`);
          return action(val);
        }}
        dayLabel="Day input"
        monthLabel="Month Select"
        yearLabel="Year input"
        disabled={disabled}
        size={size}
        value={value}
        monthFormat={monthFormat}
        mode={mode}
        onFocus={() => {
          appendToLog(` onFocus`);
        }}
        onBlur={() => {
          appendToLog(` onBlur`);
        }}
        placeholders={{
          day,
          month,
          year,
        }}
        id="date-input-1"
      />
      <br />
      <DateInput
        onChange={(val) => {
          appendToLog(` onChange: ${val}`);
          return action(val);
        }}
        disabled={disabled}
        size={size}
        value={value}
        monthFormat={monthFormat}
        mode={mode}
        onFocus={() => {
          appendToLog(` onFocus`);
        }}
        onBlur={() => {
          appendToLog(` onBlur`);
        }}
        placeholders={{
          day,
          month,
          year,
        }}
        id="date-input-2"
      />
      <br />
      <pre>{changeLog}</pre>
    </>
  );
};

function useChangeLog() {
  const [changeLog, setChangeLog] = React.useState('ChangeLog: (events from both components)');
  const appendToLog = (line) => setChangeLog((log) => `${log}\n${line}`);
  return { changeLog, appendToLog };
}
