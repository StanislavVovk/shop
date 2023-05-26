import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { getOrders } from './actions/action';
import { UserOrderModel } from '../../common/models/UserOrderModel';

export interface HistorySliceInitial {
  orders: UserOrderModel[] | UserOrderModel | []
}
const initialState: HistorySliceInitial = {
  orders: []
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: builder => builder.addMatcher(
    // todo fix this. Code smells
    isAnyOf(getOrders.fulfilled), (state, { payload }: PayloadAction<any>) => {
      state.orders = payload.data
    }
  )
})

export default historySlice.reducer
