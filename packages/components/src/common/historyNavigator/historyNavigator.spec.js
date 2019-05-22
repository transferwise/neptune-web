import HistoryNavigator from './index';

describe('historyNavigator', () => {
  it('returns empty for empty history', () => {
    const historyNavigator = new HistoryNavigator([]);
    // Undo.
    expect(historyNavigator.undo()).toBe('');
    expect(historyNavigator.redo()).toBe('');
  });

  it('add elements to history', () => {
    const historyNavigator = new HistoryNavigator([1, 2, 3]);
    historyNavigator.add(4);
    expect(historyNavigator.history).toEqual([1, 2, 3, 4]);
  });

  it('reads the history backwards/forward', () => {
    const historyNavigator = new HistoryNavigator([1, 2, 3]);
    // Undo.
    expect(historyNavigator.undo()).toBe(2);
    expect(historyNavigator.undo()).toBe(1);
    expect(historyNavigator.undo()).toBe(1);
    // Redo.
    expect(historyNavigator.redo()).toBe(2);
    expect(historyNavigator.redo()).toBe(3);
    expect(historyNavigator.redo()).toBe(3);
  });

  it('resets history', () => {
    const historyNavigator = new HistoryNavigator([1, 2, 3]);
    historyNavigator.reset([2]);
    expect(historyNavigator.history).toEqual([2]);
  });

  it('update the index to the latest element', () => {
    const historyNavigator = new HistoryNavigator([1, 2, 3]);
    historyNavigator.undo();
    historyNavigator.undo();
    expect(historyNavigator.currIndex).toBe(0);
    historyNavigator.add(4);
    expect(historyNavigator.currIndex).toBe(3);
  });
});
