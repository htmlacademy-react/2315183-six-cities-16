import { NameSpace, Sorts } from '../../const';
import { State } from '../../types/state';
import { makeFakeOffers } from '../../utils/mocks';
import { getActiveSort, getCurrentOffer, getFavoriteOffers, getNearestOffers, getOffers, getOffersDataLoadingStatus } from './selectors';

describe('OfferProcess selectors', () => {
  const state: Pick<State, NameSpace.Offers> = {
    [NameSpace.Offers]: {
      offers: makeFakeOffers(),
      favoriteOffers: makeFakeOffers(),
      currentOffer: null,
      nearestOffers: makeFakeOffers(),
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    }
  };

  it('should return offers from state', () => {
    const { offers } = state[NameSpace.Offers];
    const result = getOffers(state);

    expect(result).toBe(offers);
  });

  it('should return favoriteOffers from state', () => {
    const { favoriteOffers } = state[NameSpace.Offers];
    const result = getFavoriteOffers(state);

    expect(result).toBe(favoriteOffers);
  });

  it('should return currentOffer from state', () => {
    const { currentOffer } = state[NameSpace.Offers];
    const result = getCurrentOffer(state);

    expect(result).toBe(currentOffer);
  });

  it('should return nearestOffers from state', () => {
    const { nearestOffers } = state[NameSpace.Offers];
    const result = getNearestOffers(state);

    expect(result).toBe(nearestOffers);
  });

  it('should return sort from state', () => {
    const { sort } = state[NameSpace.Offers];
    const result = getActiveSort(state);

    expect(result).toBe(sort);
  });

  it('should return isOffersDataLoading from state', () => {
    const { isOffersDataLoading } = state[NameSpace.Offers];
    const result = getOffersDataLoadingStatus(state);

    expect(result).toBe(isOffersDataLoading);
  });
});
