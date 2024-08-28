import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getOffers = (state: Pick<State, NameSpace.Offers>) =>
  state[NameSpace.Offers].offers;
export const getFavoriteOffers = (state: Pick<State, NameSpace.Offers>) =>
  state[NameSpace.Offers].favoriteOffers;
export const getCurrentOffer = (state: Pick<State, NameSpace.Offers>) =>
  state[NameSpace.Offers].currentOffer;
export const getNearestOffers = (state: Pick<State, NameSpace.Offers>) =>
  state[NameSpace.Offers].nearestOffers;

export const getOffersDataLoadingStatus = (state: Pick<State, NameSpace.Offers>) =>
  state[NameSpace.Offers].isOffersDataLoading;

export const getActiveSort = (state: Pick<State, NameSpace.Offers>) =>
  state[NameSpace.Offers].sort;
