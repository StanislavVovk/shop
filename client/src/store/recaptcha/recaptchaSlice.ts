import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { verifyRecaptcha } from './actions/actions';

const initialState = {
  data: {},
  recaptchaRef: {}
}
const recaptchaSlice = createSlice({
  name: 'recaptcha',
  initialState,
  reducers: {
    addRecaptchaRef: (state, action) => {
      state.recaptchaRef = action.payload
    }
  },
  extraReducers: (builder) => builder
    .addMatcher(
      isAnyOf(verifyRecaptcha.fulfilled),
      (state, action) => {
        state.data = action.payload
      })
})

export default recaptchaSlice.reducer

export const recaptchaActions = recaptchaSlice.actions
