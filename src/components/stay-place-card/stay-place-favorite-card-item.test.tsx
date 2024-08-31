import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { Action } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { AppThunkDispatch, makeFakeOffer, makeFakeStore } from '../../utils/mocks';
import StayPlaceFavoriteCardItem from './stay-place-favorite-card-item';

describe('Component: StayPlaceFavoriteCardItem', () => {
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>();
  const mockStore = mockStoreCreator(makeFakeStore());

  it ('should render correctly', () => {
    const expectedTestId = 'stayPlaceFavoriteCardItem';

    render(
      <Provider store={mockStore}>
        <HistoryRouter history={createMemoryHistory()}>
          <HelmetProvider>
            <StayPlaceFavoriteCardItem offer={makeFakeOffer()} onOfferClick={vi.fn}/>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
