import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { ShopActionTypes } from './ActionTypes';
import { ShopService } from '../../../services/shop/shop.service';
import { ShopModel } from '../../../common/models/ShopModel';

export const getShops = createAsyncThunk<ShopModel[], {}, { rejectWithValue: SerializedError, extra: { services: { Shop: ShopService } } }>(
  ShopActionTypes.GET_SHOPS,
  async (_, { rejectWithValue, extra: { services: { Shop } } }) => {
    return await Shop.load()
      .then((data) => data)
      .catch(e => {
        rejectWithValue(e)
      })
  })
