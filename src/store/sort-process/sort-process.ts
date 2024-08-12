import { NameSpace } from '../../const';
import { SortProcess } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';

const initialState: SortProcess = {
  isFiltersOpen: false
};

export const sortProcess = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    openSorts: (state) => {
      state.isFiltersOpen = true;
    },
    closeSorts: (state) => {
      state.isFiltersOpen = false;
    }
  }
});

export const { openSorts, closeSorts } = sortProcess.actions;
