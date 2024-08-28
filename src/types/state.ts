import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { Comment } from './comments.js';
import { City, CurrentOffer, Offer } from './offer.js';
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
  sort: string;
  isOffersDataLoading: boolean;
};

export type CommentsData = {
  comments: Comment[];
};

export type SortProcess = {
  isSortsOpen: boolean;
};

export type CityProcess = {
  city: City;
};

export type ErrorsProcess = {
  error: string | null;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
