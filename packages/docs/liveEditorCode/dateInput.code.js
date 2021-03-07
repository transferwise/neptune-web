<DateInput
  onChange={(value) => console.log(value)}
  locale="en-GB"
  disabled={false}
  size={DateInput.Size.MEDIUM}
  value="1995-12-01"
  monthFormat={DateInput.MonthFormat.LONG}
  mode={DateInput.DateMode.DAY_MONTH_YEAR}
  placeholders={{
    day: 'DD',
    month: 'Month',
    year: 'YYYY',
  }}
/>;
