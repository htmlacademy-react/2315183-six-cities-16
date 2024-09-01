import { AuthorizationStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { userProcess } from './user-process';
import { makeFakeUser } from '../../utils/mocks';

describe('UserProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const mockUser = makeFakeUser();
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "checkAuthAction.fulfilled" action', () => {
    const mockUser = makeFakeUser();
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser };

    const result = userProcess.reducer(initialState, checkAuthAction.fulfilled(mockUser, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "checkAuthAction.rejected" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: null };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null };

    const result = userProcess.reducer(initialState, checkAuthAction.rejected(null, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "loginAction.fulfilled" action', () => {
    const mockUser = makeFakeUser();
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser
    };

    const result = userProcess.reducer(initialState, loginAction.fulfilled(mockUser, '', {email: 'krok@mail.ru', password: 'gadshhv33'}));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "loginAction.rejected" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: null };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null };

    const result = userProcess.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth", with "logoutAction.fulfilled" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.Auth, user: null };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, user: null };

    const result = userProcess.reducer(initialState, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
