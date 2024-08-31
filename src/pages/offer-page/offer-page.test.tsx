import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-route/history-route';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { Action } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { AppThunkDispatch, makeFakeOffer, makeFakeStore } from '../../utils/mocks';
import { Provider } from 'react-redux';
import OfferPage from './offer-page';

describe('Component: OfferPage', () => {
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>();
  const mockStore = mockStoreCreator(makeFakeStore());

  it('should render correctly', () => {
    const expectedTestId = 'offerPage';
    const offer = makeFakeOffer();

    render(
      <Provider store={mockStore}>
        <HistoryRouter history={createMemoryHistory()}>
          <HelmetProvider>
            <OfferPage selectedOffer={offer} onOfferClick={vi.fn} onOfferHover={vi.fn} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
