import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { HistoryService } from '../../../services/history/history.service';

export interface IOrderParam {
  paramName: string
  paramValue: string
}

export const getOrders = createAsyncThunk<any, IOrderParam, {
  rejectWithValue: SerializedError
  extra: { services: { History: HistoryService } }
}>(
  'history/get-orders',
  async (query, { rejectWithValue, extra: { services: { History } } }) => {
    return await History.getOrderByParam(query.paramName, query.paramValue)
      .then(data => data)
      .catch(e => {
        rejectWithValue(e)
      })
  }
)
