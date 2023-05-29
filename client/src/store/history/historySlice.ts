import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { getOrders } from './actions/action';
import { UserOrderModel } from 'common/models/common';

export interface HistorySliceInitial {
  orders: UserOrderModel[] | []
}
const initialState: HistorySliceInitial = {
  orders: []
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: builder => builder.addMatcher(
    isAnyOf(getOrders.fulfilled), (state, { payload }: PayloadAction<UserOrderModel[] | []>) => {
      state.orders = payload
    }
  )
})

export default historySlice.reducer
