import { Offer } from '../types/offer.ts';

const sortOffersPriceLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;
const sortOffersPriceHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

const sortTopRatingFirst = (offerA: Offer, OfferB: Offer) => OfferB.rating - offerA.rating;

export { sortOffersPriceLowToHigh, sortOffersPriceHighToLow, sortTopRatingFirst };
