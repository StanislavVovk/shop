import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { extendedShopItemModel } from 'common/models/UserOrderModel';
import { CartActionTypes } from './actions/cartActionTypes';
import { addCartItem, decreaseCartItem, removeCartItem, sendOrder } from './actions/actions';
import { CouponsModel } from '../../common/models/CouponsModel';

export interface IPayload {
  shopName: string
  shopItem: extendedShopItemModel
}
interface IDiscounted {
  coupons?: CouponsModel[]
  code: string
}

export interface ICartSliceInitialState {
  shopName: string
  cart: extendedShopItemModel[]
  itemMap: Record<string, number>
  totalEquality: number
  totalPrice: number
  isLoading: boolean
  modalStatus: boolean
}
export const initialState: ICartSliceInitialState = {
  shopName: 'none',
  cart: [],
  itemMap: {},
  totalEquality: 0,
  totalPrice: 0,
  isLoading: false,
  modalStatus: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    [CartActionTypes.ADD_ITEM]: (state, { payload }: PayloadAction<IPayload>) => addCartItem(state, payload),
    [CartActionTypes.CLEAR_CART]: () => initialState,
    [CartActionTypes.DECREASE_ITEM]: (state, { payload }: PayloadAction<IPayload>) => decreaseCartItem(state, payload),
    [CartActionTypes.REMOVE_ITEM]: (state, { payload }: PayloadAction<IPayload>) => removeCartItem(state, payload),
    changeModalStatus: (state) => {
      state.modalStatus = !state.modalStatus
    },
    checkTotal: (state, { payload }: PayloadAction<IDiscounted>) => {
      if (payload.coupons) {
        for (let i = 0; i < payload.coupons.length; i++) {
          if (payload.coupons[i].codeDisc === payload.code) {
            state.totalPrice -= state.totalPrice * payload.coupons[i].discount
            break
          } else {
            state.totalPrice = state.cart.reduce((sum, cartItem) => sum + cartItem.quantity * cartItem.item.price, 0)
          }
        }
      }
    }
  },
  extraReducers: builder => builder.addMatcher(
    isAnyOf(sendOrder.fulfilled), (state) => {
      state.modalStatus = true
    })
    .addMatcher(isAnyOf(sendOrder.pending), state => {
      state.isLoading = true
    })
})

export default cartSlice.reducer

export const cartSliceActions = cartSlice.actions
