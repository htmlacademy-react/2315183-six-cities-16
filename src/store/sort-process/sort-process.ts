import { createSlice } from '@reduxjs/toolkit/dist/createSlice';
import { NameSpace, Sorts } from '../../const';
import { SortProcess } from '../../types/state';
import { PayloadAction } from '@reduxjs/toolkit';
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
    changeSort: (state, action: PayloadAction<{sortType: string}>) => {
      const { sortType } = action.payload;
      state.sort = sortType;
      state.offers = sort[sortType]([...state.offers]);
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
