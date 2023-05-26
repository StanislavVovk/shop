import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { extendedShopItemModel } from 'common/models/UserOrderModel';
import { CartActionTypes } from './actions/cartActionTypes';
import { addCartItem, decreaseCartItem, removeCartItem } from './actions/actions';

export interface IPayload {
  shopName: string
  shopItem: extendedShopItemModel
}
export interface ICartSliceInitialState {
  shopName: string
  cart: extendedShopItemModel[]
  itemMap: Record<string, number>
  totalEquality: number
  totalPrice: number
}
export const initialState: ICartSliceInitialState = {
  shopName: 'none',
  cart: [],
  itemMap: {},
  totalEquality: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    [CartActionTypes.ADD_ITEM]: (state, { payload }: PayloadAction<IPayload>) => addCartItem(state, payload),
    [CartActionTypes.CLEAR_CART]: () => initialState,
    [CartActionTypes.DECREASE_ITEM]: (state, { payload }: PayloadAction<IPayload>) => decreaseCartItem(state, payload),
    [CartActionTypes.REMOVE_ITEM]: (state, { payload }: PayloadAction<IPayload>) => removeCartItem(state, payload)
  },
  extraReducers: builder => {}
})

export default cartSlice.reducer

export const cartSliceActions = cartSlice.actions
