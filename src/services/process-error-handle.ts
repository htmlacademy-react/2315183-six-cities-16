import { TIMEOUT_SHOW_ERROR } from '../const.ts';
import { store } from '../store';
import { setError } from '../store/errors-process/errors-process.ts';

export const processErrorHandle = (message: string) => {
  store.dispatch(setError(message));

  setTimeout(
    () => store.dispatch(setError(null)),
    TIMEOUT_SHOW_ERROR
  );
};
