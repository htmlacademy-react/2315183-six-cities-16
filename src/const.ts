const STARS = [1, 2, 3, 4, 5];

const Cities = {
  PARIS: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  COLOGNE: {
    name: 'Cologne',
    location: {
      latitude: 52.37403,
      longitude: 4.88969,
      zoom: 13
    }
  },
  BRUSSELS: {
    name: 'Brussels',
    location: {
      latitude: 52.37403,
      longitude: 4.88969,
      zoom: 13
    }
  },
  AMSTERDAM: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37403,
      longitude: 4.88969,
      zoom: 13
    }
  },
  HAMBURG: {
    name: 'Hamburg',
    location: {
      latitude: 52.37403,
      longitude: 4.88969,
      zoom: 13
    }
  },
  DUSSELDORF: {
    name: 'Dusseldorf',
    location: {
      latitude: 52.37403,
      longitude: 4.88969,
      zoom: 13
    }
  }
};

const UrlMarkers = {
  URL_MARKER_DEFAULT: '../public/img/pin.svg',
  URL_MARKER_CURRENT: '../public/img/pin-active.svg'
};

const OffersClassNames = {
  DEFAULT: 'cities__places-list places__list tabs__content',
  NEAREST: 'near-places__list places__list'
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

export { STARS, UrlMarkers, OffersClassNames, Cities };
