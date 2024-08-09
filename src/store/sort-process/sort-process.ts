import { NameSpace, Sorts } from '../../const';
import { SortProcess } from '../../types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sort } from '../../utils/sort';

const initialState: SortProcess = {
  offers: [],
  sort: Sorts.POPULAR,
  isFiltersOpen: false
};

export const sortProcess = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
      state.offers = sort[action.payload]([...state.offers]);
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
