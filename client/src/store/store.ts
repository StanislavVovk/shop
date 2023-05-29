import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Shop, Coupons, Cart, Recaptcha, History } from 'services/services';
import shopReducer from './shop/shopSlice'
import cartReducer from './cart/cartSlice'
import couponReducer from './coupons/couponsSlice'
import historyReducer from './history/historySlice'
import shopItemSwitcherReducer from './shopItemSwitcher/shopItemSwitcherSlice';
import recaptchaReducer from './recaptcha/recaptchaSlice';

const rootReducer = combineReducers(
  { shopReducer, shopItemSwitcherReducer, cartReducer, couponReducer, recaptchaReducer, historyReducer }
)

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
      extraArgument: {
        services: {
          Shop,
          Coupons,
          Cart,
          Recaptcha,
          History
        }
      }
    }
  })
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
