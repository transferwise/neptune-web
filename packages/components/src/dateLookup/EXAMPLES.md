# DateLookup Usage Examples

Here are some examples of how to use the value (javascript `Date` object) returned by DateLookup

1. [Query Range](#query-range)
2. [Choosing a Date](#choosing-a-date)

## Query Range

Here's a simplified and example of 2 `DateLookup` components being used for submitting query range to server.
> Assuming that server expects and stores UTC dates and can handle ISO 8601 timestamps

```javascript
const TODAY = new Date();
const MONTH_AGO = new Date(TODAY.getFullYear(), TODAY.getMonth() - 1, TODAY.getDate());

...

state = { start: TODAY, end: MONTH_AGO };

handleSubmit = () => {
  api.query(
    this.state.start.toISOString(), // example [GMT +13]: new Date(2019, 0, 1) -> "2018-12-31T11:00:00.000Z"
    this.start.end.toISOString()
  );
}

...

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <DateLookup value={this.state.start} onChange={this.handleStartDateChange} />
      <DateLookup value={this.state.end} onChange={this.handleEndDateChange} />
  </form>
  );
}
```

## Choosing a Date

Don't use [`Date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) when the time is not important.

> Why? `toIsoString` converts time to UTC. It can roll back or forward one a day. When its early in the day for user in +12 timezone for example.

```javascript
handleSubmit = api.submit(getDateAsString(this.state.date));

// bad
function getDateAsString(date) {
  return date.toISOString().split('T')[0];
}

// good
function getDateAsString(date) {
  return [
    date.getFullYear(),
    `0${date.getMonth() + 1}`.slice(-2),
    `0${date.getDate()}`.slice(-2),
  ].join('-');
}
```
