import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { verifyRecaptcha } from './actions/actions';
import { RecaptchaAnswerModel } from 'common/models/common';

interface IRecaptchaInitial {
  recaptchaAnswerData?: RecaptchaAnswerModel
}
const initialState: IRecaptchaInitial = {
  recaptchaAnswerData: undefined
}

const recaptchaSlice = createSlice({
  name: 'recaptcha',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
    .addMatcher(
      isAnyOf(verifyRecaptcha.fulfilled),
      (state, action: PayloadAction<RecaptchaAnswerModel>) => {
        state.recaptchaAnswerData = action.payload
      })
})

export default recaptchaSlice.reducer

export const recaptchaActions = recaptchaSlice.actions
