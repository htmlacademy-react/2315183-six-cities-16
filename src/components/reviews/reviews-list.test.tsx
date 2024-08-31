import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import ReviewsList from './reviews-list';

describe('Component: ReviewsList', () => {

  it ('should render correctly', () => {
    const expectedTestId = 'reviewsList';

    render(
      <HistoryRouter history={createMemoryHistory()}>
        <HelmetProvider>
          <ReviewsList comments={[]} />
        </HelmetProvider>
      </HistoryRouter>
    );

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
