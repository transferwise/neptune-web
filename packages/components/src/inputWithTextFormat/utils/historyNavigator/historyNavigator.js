class HistoryNavigator {
  constructor(history = [], historyLimit = null) {
    this.history = history && history.length ? history : [''];
    this.currIndex = this.history.length - 1;
    this.historyLimit = historyLimit;
  }

  reset = (newHistory = [''], historyLimit = 20) => {
    this.history = newHistory;
    this.currIndex = newHistory.length - 1 > 0 ? newHistory.length - 1 : 0;
    this.historyLimit = historyLimit;
  };

  add = element => {
    if (!this.historyLimit || this.history.length <= this.historyLimit) {
      this.history.push(element);
      // Always keep the current Index to the latest change
      this.currIndex = this.history.length - 1;
    } else {
      // @TODO not needed now but maybe it can be useful to implement a limit.
      this.currIndex = this.history.length - 1;
    }
  };

  redo = () => {
    const historyLen = this.history.length;
    this.currIndex = this.currIndex + 1 < historyLen ? this.currIndex + 1 : historyLen - 1;
    return this.history[this.currIndex];
  };

  undo = () => {
    this.currIndex = this.currIndex - 1 > 0 ? this.currIndex - 1 : 0;
    return this.history[this.currIndex];
  };
}

export default HistoryNavigator;
