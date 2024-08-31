import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import ReviewsItem from './reviews-item';
import { internet } from 'faker';

describe('Component: ReviewsItem', () => {
  it ('should render correctly', () => {
    const expectedTestId = 'reviewsItem';

    render(
      <HistoryRouter history={createMemoryHistory()}>
        <HelmetProvider>
          <ReviewsItem comment={{
            id: 'fvgjhbjnk86790',
            comment: 'fhjfjgjhhhhhhjvhgb',
            date: new Date(),
            rating: 4,
            user: {
              name: 'lola',
              avatarUrl: internet.avatar(),
              isPro: false
            }
          }}
          />
        </HelmetProvider>
      </HistoryRouter>
    );

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
