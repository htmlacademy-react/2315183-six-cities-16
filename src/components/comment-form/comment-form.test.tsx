import { render, screen } from '@testing-library/react';
import CommentForm from './comment-form';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import { Action } from '@reduxjs/toolkit';
import { AppThunkDispatch, makeFakeStore } from '../../utils/mocks';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-route/history-route';
import userEvent from '@testing-library/user-event';

describe('Component: CommentForm', () => {
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>();
  const mockStore = mockStoreCreator(makeFakeStore());

  it ('should render correctly', () => {
    const expectedTestId = 'commentForm';

    render(
      <Provider store={mockStore}>
        <HistoryRouter history={createMemoryHistory()}>
          <HelmetProvider>
            <CommentForm onFormSubmit={vi.fn(async () => {})} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });

  it('should render correctly when user enter comment', async () => {
    const commentElementTestId = 'commentElement';
    const expectedCommentValue = 'some comment';

    render(
      <Provider store={mockStore}>
        <HistoryRouter history={createMemoryHistory()}>
          <HelmetProvider>
            <CommentForm onFormSubmit={vi.fn(async () => {})} />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    await userEvent.type(
      screen.getByTestId(commentElementTestId),
      expectedCommentValue,
    );

    expect(screen.getByDisplayValue(expectedCommentValue)).toBeInTheDocument();
  });
});
