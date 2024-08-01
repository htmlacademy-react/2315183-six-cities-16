import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_SORT: 'CHANGE_SORT',
  OPEN_SORTS: 'OPEN_SORTS',
  CLOSE_SORTS: 'CLOSE_SORTS',
  RESET_SORT: 'RESET_SORT',
  LOAD_OFFERS: 'LOAD_OFFERS',
  REQUIRE_AUTH: 'REQUIRE_AUTH',
  SET_OFFERS_DATA_LOADING_STATUS: 'SET_OFFERS_DATA_LOADING_STATUS'
};

export const changeCity = createAction(Action.CHANGE_CITY, (selectedCity: City) => ({
  payload: selectedCity
}));

export const changeSort = createAction(Action.CHANGE_SORT, (currentFilter: string) => ({
  payload: currentFilter
}));

export const openSorts = createAction(Action.OPEN_SORTS);
export const closeSorts = createAction(Action.CLOSE_SORTS);
export const resetSort = createAction(Action.RESET_SORT);

export const loadOffers = createAction<Offer[]>(Action.LOAD_OFFERS);

export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIRE_AUTH);

export const setOffersDataLoadingStatus = createAction<boolean>(Action.SET_OFFERS_DATA_LOADING_STATUS);
