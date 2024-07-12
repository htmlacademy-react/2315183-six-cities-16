import { Offer } from '../types/offer.ts';

export const offers: Offer[] = [
  {
    id: '72c7a320-49a1-4d6a-8706-52e375d06947',
    title: 'Perfectly located Castro',
    type: 'apartment',
    price: 458,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3
  },
  {
    id: '17b64013-2b7c-4060-a882-be5dbace2e80',
    title: 'House in countryside',
    type: 'hotel',
    price: 433,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.9
  },
  {
    id: 'fee1475e-640b-4945-b3e8-135ec0a2e60a',
    title: 'Amazing and Extremely Central Flat',
    type: 'house',
    price: 568,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.5
  },
  {
    id: '9c21c854-fb07-4822-ac05-cb2da82ea586',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 248,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.2
  },
];
