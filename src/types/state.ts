import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { Comment } from './comments.js';
import { CurrentOffer, Offer } from './offer.js';
import { UserData } from './user-data.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

export type OffersData = {
  offers: Offer[];
  favoriteOffers: Offer[];
  currentOffer: CurrentOffer | null;
  nearestOffers: Offer[];
  isOffersDataLoading: boolean;
};

export type CommentsData = {
  comments: Comment[];
};

export type SortProcess = {
  offers: Offer[];
  sort: string;
  isFiltersOpen: boolean;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
