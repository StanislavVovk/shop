import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { UserOrderItem, CouponsModel, CartRequestModel } from 'common/models/common';
import { CartActionTypes } from './actions/cartActionTypes';
import { addCartItem, decreaseCartItem, removeCartItem, sendOrder } from './actions/actions';

interface IDiscounted {
  coupons?: CouponsModel[]
  code: string
}

export interface ICartSliceInitialState {
  shopName: string
  cart: UserOrderItem[]
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
    [CartActionTypes.ADD_ITEM]: (state, { payload }: PayloadAction<CartRequestModel>) => addCartItem(state, payload),
    [CartActionTypes.CLEAR_CART]: () => initialState,
    [CartActionTypes.DECREASE_ITEM]: (state, { payload }: PayloadAction<CartRequestModel>) => decreaseCartItem(state, payload),
    [CartActionTypes.REMOVE_ITEM]: (state, { payload }: PayloadAction<CartRequestModel>) => removeCartItem(state, payload),
    changeModalStatus: (state) => {
      state.modalStatus = !state.modalStatus
    },
    checkTotal: (state, { payload }: PayloadAction<IDiscounted>) => {
      if (payload.coupons) {
        for (let i = 0; i < payload.coupons.length; i++) {
          if (payload.coupons[i].codeDisc === payload.code) {
            state.totalPrice -= Number((state.totalPrice * payload.coupons[i].discount).toFixed(2))
            break
          } else {
            state.totalPrice = Number(state.cart.reduce((sum, cartItem) => sum + cartItem.quantity * cartItem.item.price, 0).toFixed(2))
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
