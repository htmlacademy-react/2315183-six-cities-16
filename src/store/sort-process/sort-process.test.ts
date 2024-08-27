import { openSorts, sortProcess } from './sort-process';

describe('SortProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { isSortsOpen: false };

    const result = sortProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = { isSortsOpen: false };

    const result = sortProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should open sorts with "openSorts" action', () => {
    const initialState = { isSortsOpen: false };
    const expectedState = { isSortsOpen: true };

    const result = sortProcess.reducer(initialState, openSorts);

    expect(result).toEqual(expectedState);
  });

  it('should close sorts with "closeSorts" action', () => {
    const initialState = { isSortsOpen: true };
    const expectedState = { isSortsOpen: false };

    const result = sortProcess.reducer(initialState, openSorts);

    expect(result).toEqual(expectedState);
  });
});
