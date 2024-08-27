import { changeSort, offerData, resetSort } from './offer-data';
import { Sorts } from '../../const';
import { makeFakeOffers } from '../../utils/mocks';

describe('OfferData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: makeFakeOffers(),
      favoriteOffers: makeFakeOffers(),
      currentOffer: null,
      nearestOffers: makeFakeOffers(),
      sort: Sorts.PRICE_HIGH_TO_LOW,
      isOffersDataLoading: false
    };

    const result = offerData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offerData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change sort with "changeSort" action', () => {
    const initialState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.TOP_RATED_FIRST,
      isOffersDataLoading: false
    };

    const result = offerData.reducer(initialState, changeSort);

    expect(result).toEqual(expectedState);
  });

  it('should reset sort with "resetSort" action', () => {
    const initialState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.TOP_RATED_FIRST,
      isOffersDataLoading: false
    };
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offerData.reducer(initialState, resetSort);

    expect(result).toEqual(expectedState);
  });
});
