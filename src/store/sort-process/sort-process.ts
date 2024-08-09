import { NameSpace, Sorts } from '../../const';
import { SortProcess } from '../../types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sort } from '../../utils/sort';
import { sortOffers } from '../offer-data/offer-data';
import { Offer } from '../../types/offer';

const initialState: SortProcess = {
  sort: Sorts.POPULAR,
  isFiltersOpen: false
};

export const sortProcess = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<{sortType: string; offers: Offer[]}>) => {
      const { sortType, offers } = action.payload;
      const sortedOffers = sort[sortType]([...offers]);
      state.sort = sortType;
      sortOffers(sortedOffers);
    },
    openSorts: (state) => {
      state.isFiltersOpen = true;
    },
    closeSorts: (state) => {
      state.isFiltersOpen = false;
    },
    resetSort: (state) => {
      state.sort = Sorts.POPULAR;
    }
  }
});

export const { changeSort, openSorts, closeSorts, resetSort } = sortProcess.actions;
