import { store } from '../store';
import { clearErrorAction } from '../store/api-actions.ts';
import { setError } from '../store/errors-process/errors-process.ts';

export const processErrorHandle = (message: string) => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
