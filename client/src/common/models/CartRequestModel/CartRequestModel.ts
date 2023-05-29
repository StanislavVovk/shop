import { UserOrderItem } from '../UserOrderModel/UserOrderModel';

export interface CartRequestModel {
  shopName: string
  shopItem: UserOrderItem
}
