import { Comment } from '../types/comments.ts';
import { Offer } from '../types/offer.ts';

export const sortOffersPriceLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;
export const sortOffersPriceHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

export const sortTopRatingFirst = (offerA: Offer, OfferB: Offer) => OfferB.rating - offerA.rating;

function isValidComment(oldComment: object): oldComment is Comment {
  return (
    oldComment !== null &&
    typeof oldComment === 'object' &&
    'id' in oldComment &&
    'rating' in oldComment &&
    'comment' in oldComment &&
    'date' in oldComment &&
    'user' in oldComment
  );
}

export function convertToComment(oldComment: object): Comment | null {
  if (isValidComment(oldComment)) {
    return oldComment;
  } else {
    return null;
  }
}

