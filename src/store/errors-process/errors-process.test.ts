import { errorsProcess, setError } from './errors-process';

describe('ErrorsProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { error: 'error' };

    const result = errorsProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = { error: 'error' };

    const result = errorsProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set error with "setError" action', () => {
    const initialState = { error: null };
    const expectedState = { error: 'error2' };

    const result = errorsProcess.reducer(initialState, setError);

    expect(result).toEqual(expectedState);
  });
});
