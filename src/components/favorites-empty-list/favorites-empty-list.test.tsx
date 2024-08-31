import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import FavoritesEmptyList from './favorites-empty-list';

describe('Component: FavoritesEmptyList', () => {
  it ('should render correctly', () => {
    const expectedText = 'Nothing yet saved.';

    render(
      <HistoryRouter history={createMemoryHistory()}>
        <HelmetProvider>
          <FavoritesEmptyList />
        </HelmetProvider>
      </HistoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
