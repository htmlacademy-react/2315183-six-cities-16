import { Cities, NameSpace } from '../../const';
import { State } from '../../types/state';
import { getCurrentCity } from './selectors';

describe('CityProcess selectors', () => {
  const state: Pick<State, NameSpace.City> = {
    [NameSpace.City]: {
      city: Object.values(Cities)[Math.floor(Math.random() * Object.entries(Cities).length)]
    }
  };

  it('should return city from state', () => {
    const { city } = state[NameSpace.City];
    const result = getCurrentCity(state);

    expect(result).toBe(city);
  });
});
