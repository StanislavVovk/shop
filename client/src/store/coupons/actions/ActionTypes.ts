export interface IShopActionTypes {
  GET_COUPONS?: string
}

export const CouponsActionTypes: Record<keyof IShopActionTypes, string> = {
  GET_COUPONS: 'coupons/get-coupos'
}
