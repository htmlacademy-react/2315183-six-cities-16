import { render, screen } from '@testing-library/react';
import Logo from './logo';
import HistoryRouter from '../history-route/history-route';
import { createMemoryHistory } from 'history';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const expectedAltText = '6 cities logo';

    render(
      <HistoryRouter history={createMemoryHistory()}>
        <Logo />
      </HistoryRouter>
    );

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});
