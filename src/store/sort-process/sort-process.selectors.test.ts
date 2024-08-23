import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { getOpenedStatus } from './selectors';

describe('ErrorsProcess selectors', () => {
  const state: Pick<State, NameSpace.Sort> = {
    [NameSpace.Sort]: {
      isFiltersOpen: true
    }
  };

  it('should return city from state', () => {
    const { isFiltersOpen } = state[NameSpace.Sort];
    const result = getOpenedStatus(state);

    expect(result).toBe(isFiltersOpen);
  });
});
