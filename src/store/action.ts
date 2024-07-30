import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS: 'FILL_OFFERS',
  CHANGE_SORT: 'CHANGE_SORT',
  OPEN_SORTS: 'OPEN_SORTS',
  CLOSE_SORTS: 'CLOSE_SORTS',
  RESET_SORT: 'RESET_SORT'
};

export const changeCity = createAction(Action.CHANGE_CITY, (selectedCity: City) => ({
  payload: selectedCity
}));

export const fillOffers = createAction(Action.FILL_OFFERS, (currentOffers: Offer[]) => ({
  payload: currentOffers
}));

export const changeSort = createAction(Action.CHANGE_SORT, (currentFilter: string) => ({
  payload: currentFilter
}));

export const openSorts = createAction(Action.OPEN_SORTS);
export const closeSorts = createAction(Action.CLOSE_SORTS);
export const resetSort = createAction(Action.RESET_SORT);
