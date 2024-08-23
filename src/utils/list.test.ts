import { sortOffersPriceHighToLow, sortOffersPriceLowToHigh, sortTopRatingFirst } from './list';
import { makeFakeOffers } from './mocks';

describe('Function: sortOffersPriceLowToHigh', () => {
  it('should return "true" when offers differ', () => {
    //Arrange
    const mockOffers = makeFakeOffers();
    //Act
    const sortedMockOffers = mockOffers.sort(sortOffersPriceLowToHigh);
    const result = mockOffers.every((value, index) => value !== sortedMockOffers[index]);
    //Assert
    expect(result).toBe(true);
  });
  it('should return "false" when offers are no differ', () => {
    //Arrange
    const mockOffers = makeFakeOffers();
    //Act
    const sortedMockOffers = mockOffers.sort(sortOffersPriceLowToHigh);
    const result = mockOffers.every((value, index) => value === sortedMockOffers[index]);
    //Assert
    expect(result).toBe(false);
  });
});

describe('Function: sortOffersPriceHighToLow', () => {
  it('should return "true" when offers differ', () => {
    //Arrange
    const mockOffers = makeFakeOffers();
    //Act
    const sortedMockOffers = mockOffers.sort(sortOffersPriceHighToLow);
    const result = mockOffers.every((value, index) => value !== sortedMockOffers[index]);
    //Assert
    expect(result).toBe(true);
  });
  it('should return "false" when offers are no differ', () => {
    //Arrange
    const mockOffers = makeFakeOffers();
    //Act
    const sortedMockOffers = mockOffers.sort(sortOffersPriceHighToLow);
    const result = mockOffers.every((value, index) => value === sortedMockOffers[index]);
    //Assert
    expect(result).toBe(false);
  });
});

describe('Function: sortTopRayingFirst', () => {
  it('should return "true" when offers differ', () => {
    //Arrange
    const mockOffers = makeFakeOffers();
    //Act
    const sortedMockOffers = mockOffers.sort(sortTopRatingFirst);
    const result = mockOffers.every((value, index) => value !== sortedMockOffers[index]);
    //Assert
    expect(result).toBe(true);
  });
  it('should return "false" when offers are no differ', () => {
    //Arrange
    const mockOffers = makeFakeOffers();
    //Act
    const sortedMockOffers = mockOffers.sort(sortTopRatingFirst);
    const result = mockOffers.every((value, index) => value === sortedMockOffers[index]);
    //Assert
    expect(result).toBe(false);
  });
});
