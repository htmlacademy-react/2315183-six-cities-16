import { NameSpace } from '../../const';
import { SortProcess } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';

const initialState: SortProcess = {
  isSortsOpen: false
};

export const sortProcess = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    openSorts: (state) => {
      state.isSortsOpen = true;
    },
    closeSorts: (state) => {
      state.isSortsOpen = false;
    }
  }
});

export const { openSorts, closeSorts } = sortProcess.actions;
