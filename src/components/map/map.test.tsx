import { render, screen } from '@testing-library/react';
import { makeFakeOffer, makeFakeOffers } from '../../utils/mocks';
import Map from './map';
import { Cities } from '../../const';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const expectedTestId = 'map';
    const mockOffers = makeFakeOffers();
    const mockSelectedOffer = makeFakeOffer();

    render(
      <Map city={Cities.AMSTERDAM} points={mockOffers} selectedOffer={mockSelectedOffer}/>
    );

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
