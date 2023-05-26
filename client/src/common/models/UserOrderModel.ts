import { ShopItemModel } from './ShopItemModel';
export interface extendedShopItemModel {
  item: ShopItemModel
  quantity: number
}

export interface UserOrderModel {
  username: string
  email: string
  phoneNumber: string
  address: string
  order: extendedShopItemModel[]
  totalPrice: number
}
