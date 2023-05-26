import { ICartSliceInitialState, initialState, IPayload } from '../cartSlice';
import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { CartService } from 'services/cart/cart.service';
import { UserOrderModel } from 'common/models/UserOrderModel';
import { CartActionTypes } from './cartActionTypes';

export const addCartItem = (state: ICartSliceInitialState, payload: IPayload) => {
  if (payload.shopItem.item._id in state.itemMap) {
    state.cart[state.itemMap[payload.shopItem.item._id]].quantity += 1
  } else {
    state.itemMap[payload.shopItem.item._id] = state.cart.length
    payload.shopItem.quantity += 1
    state.cart.push({ ...payload.shopItem })
  }
  state.totalPrice += payload.shopItem.item.price
  state.totalEquality += 1
  state.shopName = payload.shopName
}

export const decreaseCartItem = (state: ICartSliceInitialState, payload: IPayload) => {
  if (!(payload.shopItem.item._id in state.itemMap)) {
    return state
  }
  state.cart[state.itemMap[payload.shopItem.item._id]].quantity -= 1
  const deltaQuantity = state.cart[state.itemMap[payload.shopItem.item._id]].quantity
  if (deltaQuantity === 0) {
    filterCartItems(state, payload)
  }
  state.totalPrice -= payload.shopItem.item.price
  state.totalEquality -= 1
}

export const removeCartItem = (state: ICartSliceInitialState, payload: IPayload) => {
  const cartItem = state.cart[state.itemMap[payload.shopItem.item._id]]
  filterCartItems(state, payload)
  state.totalPrice -= cartItem.quantity * cartItem.item.price
  state.totalEquality -= cartItem.quantity
}

const filterCartItems = (state: ICartSliceInitialState, payload: IPayload) => {
  state.cart = [...state.cart].filter((cartItem) => cartItem.item._id !== payload.shopItem.item._id)
  const index = state.itemMap[payload.shopItem.item._id]
  delete state.itemMap[payload.shopItem.item._id]
  state.shopName = initialState.shopName
  for (let i = index; i < Object.keys(state.itemMap).length; i++) {
    state.itemMap[state.cart[i].item._id] -= 1
  }
}

export const sendOrder = createAsyncThunk <boolean, UserOrderModel, { rejectWithValue: SerializedError, extra: { services: { Cart: CartService } } }>(
  CartActionTypes.SEND_ORDER,
  async (data, { rejectWithValue, extra: { services: { Cart } } }) => {
    return await Cart.sendOrder(data)
      .then(() => true)
      .catch(e => rejectWithValue(e))
  }
)
