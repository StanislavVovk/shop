export const ShopActionTypes: Record<keyof IShopActionTypes, string> = {
  ADD_SHOP: 'shopAction/add-shop',
  GET_SHOPS: 'shopAction/get_shops',
  MODIFY_SHOP: 'shopAction/modify_shop'
}

export interface IShopActionTypes {
  ADD_SHOP?: string
  GET_SHOPS?: string
  MODIFY_SHOP?: string
}
