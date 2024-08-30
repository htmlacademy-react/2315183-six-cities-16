import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page';
import HistoryRouter from '../../components/history-route/history-route';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    const emailText = 'E-mail';
    const passwordText = 'Password';
    //const { withStoreComponent } = withStore(<LoginPage />, {});

    render(
      <HistoryRouter history={createMemoryHistory()}>
        <HelmetProvider>
          <LoginPage />
        </HelmetProvider>
      </HistoryRouter>
    );

    expect(screen.getByText(emailText)).toBeInTheDocument();
    expect(screen.getByText(passwordText)).toBeInTheDocument();
  });

  it('should render correctly when user enter email and password', async () => {
    const emailElementTestId = 'emailElement';
    const passwordElementTestId = 'passwordElement';
    const expectedEmailValue = 'keks@mail.ru';
    const expectedPasswordValue = '123456';
    //const { withStoreComponent } = withStore(<LoginPage />, {});

    render(
      <HistoryRouter history={createMemoryHistory()}>
        <HelmetProvider>
          <LoginPage />
        </HelmetProvider>
      </HistoryRouter>
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
