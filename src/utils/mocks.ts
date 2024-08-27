import { Cities } from '../const';
import { CurrentOffer, Offer } from '../types/offer';
import { datatype, internet, name } from 'faker';
import { UserData } from '../types/user-data';

export const makeFakeUser = (): UserData => ({
  email: internet.email(),
  token: name.title(),
  name: name.title(),
  avatarUrl: internet.avatar(),
  isPro: true
});

export const makeFakeCurrentOffer = (): CurrentOffer => ({
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
  images: new Array(6).fill(null).map(() => internet.avatar()),
  description: name.title(),
  goods: new Array(5).fill(null).map(() => name.title()),
  host: {
    name: name.title(),
    avatarUrl: internet.avatar(),
    isPro: false,
  },
  bedrooms: 2,
  maxAdults: 2,
});

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
});

export const makeFakeOffers = (): Offer[] => new Array(50).fill(null).map(() => makeFakeOffer());
