import { changeSort, offerData, resetSort } from './offer-data';
import { Sorts } from '../../const';
import { makeFakeCurrentOffer, makeFakeOffers } from '../../utils/mocks';
import { fetchCurrentOfferAction, fetchFavoriteOffersAction, fetchNearestOfferAction, fetchOffersAction, updateOfferFavoriteStatusAction } from '../api-actions';

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

    const result = offerData.reducer(initialState, changeSort(expectedState.sort));

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

  it('should set "isOffersDataLoading" to "true" with "fetchOffersAction.pending"', () => {
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: true
    };

    const result = offerData.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with offers, "isOffersDataLoading" to "false" with "fetchOffersAction.fulfilled"', () => {
    const mockOffers = makeFakeOffers();
    const expectedState = {
      offers: [...mockOffers],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offerData.reducer(undefined, fetchOffersAction.fulfilled(mockOffers, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "true" with "fetchFavoriteOffersAction.pending"', () => {
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: true
    };

    const result = offerData.reducer(undefined, fetchFavoriteOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "favoriteOffers" to array with favoriteOffers, "isOffersDataLoading" to "false" with "fetchFavoriteOffersAction.fulfilled"', () => {
    const mockOffers = makeFakeOffers();
    const expectedState = {
      offers: [],
      favoriteOffers: [...mockOffers],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offerData.reducer(undefined, fetchFavoriteOffersAction.fulfilled(mockOffers, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "nearestOffers" to array with nearestOffers, "isOffersDataLoading" to "false" with "fetchNearestOfferAction.fulfilled"', () => {
    const mockOffers = makeFakeOffers();
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [...mockOffers],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offerData.reducer(undefined, fetchNearestOfferAction.fulfilled(mockOffers, '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "true" with "fetchCurrentOfferAction.pending"', () => {
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: true
    };

    const result = offerData.reducer(undefined, fetchCurrentOfferAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "currentOffer" to array with currentOffer, "isOffersDataLoading" to "false" with "fetchCurrentOfferAction.fulfilled"', () => {
    const mockCurrentOffer = makeFakeCurrentOffer();
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: mockCurrentOffer,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offerData.reducer(undefined, fetchCurrentOfferAction.fulfilled(mockCurrentOffer, '', mockCurrentOffer.id));

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with offers with "updateOfferFavoriteStatusAction.fulfilled"', () => {
    const mockOffers = makeFakeOffers();
    const mockFavoriteStatus = true;

    mockOffers[0].isFavorite = mockFavoriteStatus;

    const expectedState = {
      offers: [...mockOffers],
      favoriteOffers: [...mockOffers],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offerData.reducer(undefined, updateOfferFavoriteStatusAction.fulfilled(
      mockOffers,
      '',
      {
        id: mockOffers[0].id,
        favoriteStatus: mockFavoriteStatus
      }
    ));

    expect(result).not.toEqual(expectedState);
  });
});
