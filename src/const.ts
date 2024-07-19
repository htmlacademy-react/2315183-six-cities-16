const STARS = [1, 2, 3, 4, 5];

const UrlMarkers = {
  URL_MARKER_DEFAULT: 'https://raw.githubusercontent.com/ElisavetaKoltsova/2315183-six-cities-16/8e9929e4bb9129e810096003bfe363ccc23496a2/public/img/pin.svg',
  URL_MARKER_CURRENT: 'https://raw.githubusercontent.com/ElisavetaKoltsova/2315183-six-cities-16/8e9929e4bb9129e810096003bfe363ccc23496a2/public/img/pin-active.svg'
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

export { STARS, UrlMarkers };
