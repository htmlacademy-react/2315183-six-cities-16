import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorsProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: ErrorsProcess = {
  error: null
};

export const errorsProcess = createSlice({
  name: NameSpace.Errors,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<{error: string}>) => {
      const { error } = action.payload;
      state.error = error;
    }
  }
});
