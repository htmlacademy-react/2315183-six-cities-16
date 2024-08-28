import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { getOpenedStatus } from './selectors';

describe('ErrorsProcess selectors', () => {
  const state: Pick<State, NameSpace.Sort> = {
    [NameSpace.Sort]: {
      isSortsOpen: true
    }
  };

  it('should return city from state', () => {
    const { isSortsOpen } = state[NameSpace.Sort];
    const result = getOpenedStatus(state);

    expect(result).toBe(isSortsOpen);
  });
});
