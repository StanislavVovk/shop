import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { HistoryService } from 'services/history/history.service';
import { UserOrderModel, RequestModel } from 'common/models/common';

export const getOrders = createAsyncThunk<UserOrderModel[] | [], RequestModel, {
  rejectWithValue: SerializedError
  extra: { services: { History: HistoryService } }
}>(
  'history/get-orders',
  async (query, { rejectWithValue, extra: { services: { History } } }) => {
    return await History.getOrderByParam(query)
      .then(data => data
      )
      .catch(e => {
        rejectWithValue(e)
      })
  }
)
