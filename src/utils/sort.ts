import { Sorts } from '../const.ts';
import { Offer } from '../types/offer.ts';
import { sortOffersPriceHighToLow, sortOffersPriceLowToHigh, sortTopRatingFirst } from './list.ts';

const sort = {
  [Sorts.POPULAR]: (offers: Offer[]) => offers,
  [Sorts.PRICE_LOW_TO_HIGH]: (offers: Offer[]) => offers.sort(sortOffersPriceLowToHigh),
  [Sorts.PRICE_HIGH_TO_LOW]: (offers: Offer[]) => offers.sort(sortOffersPriceHighToLow),
  [Sorts.TOP_RATED_FIRST]: (offers: Offer[]) => offers.sort(sortTopRatingFirst)
};

export { sort };
