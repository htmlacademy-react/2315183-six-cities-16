import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page';
import HistoryRouter from '../../components/history-route/history-route';
import { HelmetProvider } from 'react-helmet-async';
import { Action } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { AppThunkDispatch, makeFakeStore } from '../../utils/mocks';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

describe('Component: LoginPage', () => {
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>();
  const mockStore = mockStoreCreator(makeFakeStore());

  it('should render correctly', () => {
    const emailText = 'E-mail';
    const passwordText = 'Password';

    render(
      <Provider store={mockStore}>
        <HistoryRouter history={createMemoryHistory()}>
          <HelmetProvider>
            <LoginPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(emailText)).toBeInTheDocument();
    expect(screen.getByText(passwordText)).toBeInTheDocument();
  });

  it('should render correctly when user enter email and password', async () => {
    const emailElementTestId = 'emailElement';
    const passwordElementTestId = 'passwordElement';
    const expectedEmailValue = 'keks@mail.ru';
    const expectedPasswordValue = '123456';

    render(
      <Provider store={mockStore}>
        <HistoryRouter history={createMemoryHistory()}>
          <HelmetProvider>
            <LoginPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    await userEvent.type(
      screen.getByTestId(emailElementTestId),
      expectedEmailValue,
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue,
    );

    expect(screen.getByDisplayValue(expectedEmailValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });
});
