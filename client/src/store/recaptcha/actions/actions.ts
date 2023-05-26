import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { RecaptchaService } from '../../../services/recaptcha/recaptcha.service';
import { RecaptchaActionTypes } from './ActionTypes';

export const verifyRecaptcha = createAsyncThunk<{}, string, { rejectWithValue: SerializedError, extra: { services: { Recaptcha: RecaptchaService } } }>(
  RecaptchaActionTypes.VERIFY,
  async (token, { rejectWithValue, extra: { services: { Recaptcha } } }) => {
    return await Recaptcha.verifyToken(token)
      .then(data => data)
      .catch(e => rejectWithValue(e))
  }

)
