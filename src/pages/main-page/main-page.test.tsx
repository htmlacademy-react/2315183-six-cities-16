import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-route/history-route';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { Action } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { AppThunkDispatch, makeFakeStore } from '../../utils/mocks';
import { Provider } from 'react-redux';
import MainPage from './main-page';

describe('Component: MainPage', () => {
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>();
  const mockStore = mockStoreCreator(makeFakeStore());

  it('should render correctly', () => {
    const expectedTestId = 'mainPage';

    render(
      <Provider store={mockStore}>
        <HistoryRouter history={createMemoryHistory()}>
          <HelmetProvider>
            <MainPage onOfferClick={vi.fn} onOfferHover={vi.fn} selectedOffer={undefined} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
