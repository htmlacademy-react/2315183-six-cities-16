import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getOpenedStatus = (state: State) =>
  state[NameSpace.Sort].isFiltersOpen;
export const getActiveSort = (state: State) =>
  state[NameSpace.Sort].sort;
