import { render, screen } from '@testing-library/react';
import withStayPlaceCard from './with-stay-place-card';

vi.mock('../../components/stay-place-card/stay-place-card-item', () => {
  const mockStayPlaceCardItem = <>MockCardItem</>;

  return {
    default: mockStayPlaceCardItem
  };
});

describe('HOC: withStayPlaceCard', () => {
  it('should render correctly with HOC', () => {
    const expectedText = 'wrappedComponent';
    const mockComponent = () => <span>{expectedText}</span>;
    const PreparedComponent = withStayPlaceCard(mockComponent);

    render(<PreparedComponent />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
