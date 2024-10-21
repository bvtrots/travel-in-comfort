import { createAsyncThunk } from '@reduxjs/toolkit/react';
import { errorActions } from '../../slices/error-slice';
import { TIMEOUT_SHOW_ERROR } from '../../../const';

export const clearErrorAction = createAsyncThunk(
  'travel-in-comfort/clearError',
  () => {
    setTimeout(() => errorActions.setError(null), TIMEOUT_SHOW_ERROR);
  }
);