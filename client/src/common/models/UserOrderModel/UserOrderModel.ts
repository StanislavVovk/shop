import { ShopItemModel } from '../ShopItemModel/ShopItemModel';
export interface UserOrderItem {
  item: ShopItemModel
  quantity: number
}

export interface UserOrderModel {
  username: string
  email: string
  phoneNumber: string
  address: string
  order: UserOrderItem[]
  totalPrice: number
}
