import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import StayPlaceCardEmptyList from './stay-place-card-empty-list';
import { Cities } from '../../const';

describe('Component: StayPlaceCardEmptyList', () => {

  it ('should render correctly', () => {
    const expectedTestId = 'stayPlaceCardEmptyList';

    render(
      <HistoryRouter history={createMemoryHistory()}>
        <HelmetProvider>
          <StayPlaceCardEmptyList currentCity={Cities.AMSTERDAM} />
        </HelmetProvider>
      </HistoryRouter>
    );

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
