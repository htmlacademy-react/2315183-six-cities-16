const STARS = [1, 2, 3, 4, 5];

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

export { STARS };
