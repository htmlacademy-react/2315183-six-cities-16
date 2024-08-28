import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { getErrorMessage } from './selectors';

describe('ErrorsProcess selectors', () => {
  const state: Pick<State, NameSpace.Errors> = {
    [NameSpace.Errors]: {
      error: 'error'
    }
  };

  it('should return city from state', () => {
    const { error } = state[NameSpace.Errors];
    const result = getErrorMessage(state);

    expect(result).toBe(error);
  });
});
