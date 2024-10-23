import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { errorActions } from '../slices/error-slice';
import { Setting } from '../../const';

const clearErrorAction = createAsyncThunk('travel-in-comfort/clearError', () => {
  setTimeout(() => errorActions.setError(null), Setting.TimeoutError);
});

export { clearErrorAction };