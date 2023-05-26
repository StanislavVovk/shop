import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IShopItemInitialState {
  shopName: string
}
const initialState: IShopItemInitialState = {
  shopName: ''
}

const shopItemSwitcherSlice = createSlice({
  name: 'shopItemSwitcher',
  initialState,
  reducers: {
    selectShop: (state, { payload }: PayloadAction<string>) => {
      state.shopName = payload
    },
    clearSelection: state => initialState
  }
})

export default shopItemSwitcherSlice.reducer

export const shopItemActions = shopItemSwitcherSlice.actions
