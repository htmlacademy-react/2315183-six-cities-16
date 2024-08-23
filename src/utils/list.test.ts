import { sortOffersPriceLowToHigh } from './list';
import { makeFakeOffers } from './mocks';

describe('Function: sortOffersPriceLowToHigh', () => {
  it('should return "true" when offers differ', () => {
    //Arrange
    const mockOffers = makeFakeOffers();
    //Act
    const result = mockOffers === mockOffers.sort(sortOffersPriceLowToHigh);
    //Assert
    expect(result).toBe(true);
  });
  it('should return "false" when offers are no differ', () => {
    //Arrange
    const mockOffers = makeFakeOffers();
    //Act
    const result = mockOffers !== mockOffers.sort(sortOffersPriceLowToHigh);
    //Assert
    expect(result).toBe(false);
  });
});
