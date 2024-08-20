import { City, Location, Offer } from '../types/offer';
import { datatype, internet, name } from 'faker';

export const makeFakeOffers = (): Offer[] => {
  const testOffers: Offer[] = new Array(3).fill(null).map(() => ({
    id: name.title(),
    title: name.title(),
    type: name.title(),
    price: datatype.number(),
    previewImage: internet.avatar(),
    city: new Array(3).fill(null).map(() => ({
      name: name.title(),
      location: new Array(3).fill(null).map(() => ({
        latitude: datatype.number(),
        longitude: datatype.number(),
        zoom: datatype.number(),
      }) as Location)
    }) as unknown as City),
    location: new Array(3).fill(null).map(() => ({
      latitude: datatype.number(),
      longitude: datatype.number(),
      zoom: datatype.number(),
    }) as Location),
    isFavorite: datatype.number() > datatype.number(),
    isPremium: datatype.number() < datatype.number(),
    rating: datatype.number(),
  }) as unknown as Offer);

  return testOffers;
};

