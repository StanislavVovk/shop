import { ShopItemModel } from './ShopItemModel';
export interface extendedShopItemModel {
  item: ShopItemModel
  quantity: number
}

export interface UserOrderModel {
  name: string
  email: string
  phoneNumber: string
  address: string
  order: extendedShopItemModel[]
}
