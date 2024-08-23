import { Cities } from '../const';
import { Offer } from '../types/offer';
import { datatype, internet, name } from 'faker';

export const makeFakeOffer = (): Offer => ({
  id: name.title(),
  title: name.title(),
  type: name.title(),
  price: datatype.number(),
  previewImage: internet.avatar(),
  city: Object.values(Cities)[Math.floor(Math.random() * Object.entries(Cities).length)],
  location: {
    latitude: datatype.number(),
    longitude: datatype.number(),
    zoom: datatype.number(),
  },
  isFavorite: datatype.number() > datatype.number(),
  isPremium: datatype.number() < datatype.number(),
  rating: datatype.number(),
} as Offer);

export const makeFakeOffers = (): Offer[] => new Array(50).fill(null).map(() => makeFakeOffer());
