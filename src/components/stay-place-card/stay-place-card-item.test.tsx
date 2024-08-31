import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { Action } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { AppThunkDispatch, makeFakeOffer, makeFakeStore } from '../../utils/mocks';
import StayPlaceCardItem from './stay-place-card-item';

describe('Component: StayPlaceCardItem', () => {
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>();
  const mockStore = mockStoreCreator(makeFakeStore());

  it ('should render correctly', () => {
    const expectedTestId = 'stayPlaceCardItem';

    render(
      <Provider store={mockStore}>
        <HistoryRouter history={createMemoryHistory()}>
          <HelmetProvider>
            <StayPlaceCardItem offer={makeFakeOffer()} onOfferClick={vi.fn} onOfferHover={vi.fn} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
