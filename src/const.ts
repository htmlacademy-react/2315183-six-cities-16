import { City } from './types/offer.ts';

const STARS = [1, 2, 3, 4, 5];

const city: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37403,
    longitude: 4.88969,
    zoom: 13
  }
};

const UrlMarkers = {
  URL_MARKER_DEFAULT: '../public/img/pin.svg',
  URL_MARKER_CURRENT: '../public/img/pin-active.svg'
};

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  OfferId = ':id',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export { STARS, UrlMarkers, city };
