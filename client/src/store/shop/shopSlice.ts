import { createSlice, isAnyOf, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { ShopModel } from 'common/models/common';
import { getShops } from './actions/actions';

interface IShopSliceInitial {
  shops?: ShopModel[]
  isLoading: boolean
  error?: SerializedError
}

const initialState: IShopSliceInitial = {
  shops: undefined,
  isLoading: false,
  error: undefined
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(getShops.fulfilled), (state, action: PayloadAction<ShopModel[]>) => {
        if (action.payload) {
          state.shops = action.payload
          state.error = undefined
          state.isLoading = false
        }
      }
      )
      .addMatcher(isAnyOf(getShops.pending), (state) => {
        state.shops = undefined
        state.error = undefined
        state.isLoading = true
      })
      .addMatcher(isAnyOf(getShops.rejected), (state, action) => {
        state.error = action.error
        state.shops = undefined
        state.isLoading = false
      })
  }
})

export default shopSlice.reducer
