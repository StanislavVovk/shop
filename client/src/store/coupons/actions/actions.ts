import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { CouponsModel } from 'common/models/common';
import { CouponsService } from 'services/coupons/coupons.service';
import { CouponsActionTypes } from './ActionTypes';

export const getCoupons = createAsyncThunk<CouponsModel[], {}, {
  rejectWithValue: SerializedError
  extra: { services: { Coupons: CouponsService } }
}>(
  CouponsActionTypes.GET_COUPONS,
  async (_, { rejectWithValue, extra: { services: { Coupons } } }) => {
    return await Coupons.loadCoupons('')
      .then(data => data)
      .catch(e => {
        rejectWithValue(e)
      })
  }
)
