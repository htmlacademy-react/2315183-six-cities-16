import { createReducer } from '@reduxjs/toolkit';
import { Cities, Sorts } from '../const.ts';
import { offers } from '../mocks/offers.ts';
import { changeCity, changeSort, closeSorts, fillOffers, openSorts, resetSort } from './action.ts';
import { sort } from '../utils/sort.ts';

const initialState = {
  city: Cities.PARIS,
  offers: offers,
  sort: Sorts.POPULAR,
  isFiltersOpen: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
      state.offers = sort[action.payload]([...offers]);
    })
    .addCase(openSorts, (state) => {
      state.isFiltersOpen = true;
    })
    .addCase(closeSorts, (state) => {
      state.isFiltersOpen = false;
    })
    .addCase(resetSort, (state) => {
      state.sort = Sorts.POPULAR;
    });
});

export { reducer };
