import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const expectedTestId = 'not-found-page';
    const preparedComponent = withHistory(<NotFoundPage />);

    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
