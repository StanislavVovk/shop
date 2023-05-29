import { createSlice, isAnyOf, SerializedError } from '@reduxjs/toolkit';
import { CouponsModel } from 'common/models/common';
import { getCoupons } from './actions/actions';

interface ICouponsSlice {
  coupons?: CouponsModel[]
  isLoading: boolean
  error?: SerializedError
}

const initialState: ICouponsSlice = {
  coupons: undefined,
  isLoading: false,
  error: undefined

};
const couponsSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(getCoupons.fulfilled), (state, action) => {
      state.coupons = action.payload
      state.error = undefined
      state.isLoading = false
    })
      .addMatcher(isAnyOf(getCoupons.pending), (state, action) => {
        state.coupons = action.payload
        state.error = undefined
        state.isLoading = true
      })
      .addMatcher(isAnyOf(getCoupons.rejected), (state, action) => {
        state.coupons = undefined
        state.error = action.error
        state.isLoading = false
      })
  }
})

export default couponsSlice.reducer

export const couponsSliceActions = couponsSlice.actions
