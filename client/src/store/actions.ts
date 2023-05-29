import { cartSliceActions } from './cart/cartSlice'
import { couponsSliceActions } from './coupons/couponsSlice';
import { getOrders } from './history/actions/action';
import { sendOrder } from './cart/actions/actions';
import { getCoupons } from './coupons/actions/actions';
import { verifyRecaptcha } from './recaptcha/actions/actions';
import { getShops } from './shop/actions/actions';
import { shopItemActions } from './shopItemSwitcher/shopItemSwitcherSlice';
import { recaptchaActions } from './recaptcha/recaptchaSlice';

export {
  cartSliceActions,
  couponsSliceActions,
  shopItemActions,
  recaptchaActions,
  getOrders,
  sendOrder,
  getCoupons,
  verifyRecaptcha,
  getShops
}
