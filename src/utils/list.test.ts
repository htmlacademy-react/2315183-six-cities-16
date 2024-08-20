import { sortOffersPriceLowToHigh } from './list';
import { makeFakeOffers } from './mocks';

describe('Function: sortOffersPriceLowToHigh', () => {
  it('should return "true" when its working correct', () => {
    //Arrange
    const mockOffers = makeFakeOffers();
    //Act
    const result = mockOffers.sort(sortOffersPriceLowToHigh);
    //Assert
    expect(result).toBe(typeof mockOffers);
  });
});
