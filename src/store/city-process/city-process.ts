import { Cities, NameSpace } from '../../const';
import { CityProcess } from '../../types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../types/offer';

const initialState: CityProcess = {
  city: Cities.PARIS
};

export const cityProcess = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: City}>) => {
      const { city } = action.payload;
      state.city = city;
    }
  }
});
