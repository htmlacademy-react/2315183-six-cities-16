import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, Cities, Sorts } from '../const.ts';
import { changeCity, setError } from './action.ts';
import { City, CurrentOffer, Offer } from '../types/offer.ts';
import { UserData } from '../types/user-data.ts';
import { Comment } from '../types/comments.ts';

type InitialState = {
  city: City;
  offers: Offer[];
  favoriteOffers: Offer[];
  currentOffer: CurrentOffer | null;
  nearestOffers: Offer[];
  comments: Comment[];
  user: UserData | null;
  sort: string;
  isFiltersOpen: boolean;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  city: Cities.PARIS,
  offers: [],
  favoriteOffers: [],
  currentOffer: null,
  nearestOffers: [],
  comments: [],
  user: null,
  sort: Sorts.POPULAR,
  isFiltersOpen: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
