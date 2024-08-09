import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offer';
import { AppRoute } from '../const';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  SET_ERROR: 'SET_ERROR',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE'
};

export const changeCity = createAction(Action.CHANGE_CITY, (selectedCity: City) => ({
  payload: selectedCity
}));

export const setError = createAction<string | null>(Action.SET_ERROR);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);
