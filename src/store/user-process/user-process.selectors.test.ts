import { AuthorizationStatus, NameSpace } from '../../const';
import { UserProcess } from '../../types/state';
import { getAuthCheckedStatus, getAuthorizationStatus, getUserData } from './selectors';

describe('UserProcess selectors', () => {
  it('should return authorization status from state', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    const state: UserProcess = {
      authorizationStatus,
      user: null
    };

    const result = getAuthorizationStatus({ [NameSpace.User]: state });

    expect(result).toBe(authorizationStatus);
  });

  it('should return "true" because auth status is "Auth"', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    const state: UserProcess = {
      authorizationStatus,
      user: null
    };

    const result = getAuthCheckedStatus({ [NameSpace.User]: state });

    expect(result).toBe(true);
  });

  it('should return "false" because auth status is "Unknown"', () => {
    const authorizationStatus = AuthorizationStatus.Unknown;
    const state: UserProcess = {
      authorizationStatus,
      user: null
    };

    const result = getAuthCheckedStatus({ [NameSpace.User]: state });

    expect(result).toBe(false);
  });

  it('should return user from state', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    const state = {
      [NameSpace.User]: {
        authorizationStatus,
        user: null
      }
    };

    const { user } = state[NameSpace.User];
    const result = getUserData(state);

    expect(result).toBe(user);
  });
});
