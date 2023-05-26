import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Shop } from '../services/services';
import shopReducer from './shop/shopSlice'
import cartReducer from './cart/cartSlice'
import shopItemSwitcherReducer from './shopItemSwitcher/shopItemSwitcherSlice';
const rootReducer = combineReducers(
  { shopReducer, shopItemSwitcherReducer, cartReducer }
)

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
      extraArgument: {
        services: {
          Shop
        }
      }
    }
  })
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
